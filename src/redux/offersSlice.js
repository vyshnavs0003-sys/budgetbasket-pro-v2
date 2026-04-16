import { createSlice } from '@reduxjs/toolkit';

const STORAGE_KEY = 'dailyOffers';
const EXPIRY_KEY = 'offersExpiry';
const DISCOUNT_PERCENT = 20;
const EXPIRY_HOURS = 24;
const OFFER_COUNT = 6; // Change to 6

const getRandomProducts = (products, count) => {
  const shuffled = [...products];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};

const loadStoredOffers = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  const expiry = localStorage.getItem(EXPIRY_KEY);
  if (stored && expiry && Date.now() < parseInt(expiry)) {
    const offers = JSON.parse(stored);
    // If stored offers count doesn't match desired count, ignore them
    if (offers.length === OFFER_COUNT) {
      return offers;
    }
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

      const selectedProducts = getRandomProducts(allProducts, OFFER_COUNT);
      const offerIds = selectedProducts.map(p => p.id);
      state.offers = offerIds;
      saveOffers(offerIds);
      state.loaded = true;
    },
  },
});

export const { setOffers, refreshOffers } = offersSlice.actions;
export default offersSlice.reducer;