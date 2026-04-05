import { createSlice } from '@reduxjs/toolkit';

const STORAGE_KEY = 'dailyOffers';
const EXPIRY_KEY = 'offersExpiry';
const DISCOUNT_PERCENT = 20; 
const EXPIRY_HOURS = 24;     

const getRandomProducts = (products, count) => {
  const shuffled = [...products];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};

// Load stored offers from localStorage if not expired
const loadStoredOffers = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  const expiry = localStorage.getItem(EXPIRY_KEY);
  if (stored && expiry && Date.now() < parseInt(expiry)) {
    return JSON.parse(stored);
  }
  return null;
};

const saveOffers = (offers) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(offers));
  const expiryTime = Date.now() + EXPIRY_HOURS * 60 * 60 * 1000;
  localStorage.setItem(EXPIRY_KEY, expiryTime.toString());
};

const initialState = {
  offers: [],           
  discountPercent: DISCOUNT_PERCENT,
  loaded: false,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    // Manually set offers 
    setOffers: (state, action) => {
      state.offers = action.payload;
      state.loaded = true;
    },
    refreshOffers: (state, action) => {
      const { allProducts } = action.payload;
      if (!allProducts || allProducts.length === 0) return;

      const storedOffers = loadStoredOffers();
      if (storedOffers) {
        state.offers = storedOffers;
        state.loaded = true;
        return;
      }

      const selectedProducts = getRandomProducts(allProducts, 3);
      const offerIds = selectedProducts.map(p => p.id);
      state.offers = offerIds;
      saveOffers(offerIds);
      state.loaded = true;
    },
  },
});

export const { setOffers, refreshOffers } = offersSlice.actions;
export default offersSlice.reducer;