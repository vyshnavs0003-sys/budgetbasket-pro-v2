import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TopBar from '../navbar/TopBar';
import MainNav from '../navbar/MainNav';
import CategoryBar from '../navbar/CategoryBar';
import BottomNav from '../navbar/BottomNav';
import HamburgerSidebar from '../navbar/HamburgerSidebar';
import CartDrawer from '../ui/CartDrawer';
import Footer from '../footer/Footer';
import MiniCartBar from '../ui/MiniCartBar';
import AuthModal from '../ui/AuthModal';
import BudgetDrawer from '../ui/BudgetDrawer';
import BudgetWarningModal from '../ui/BudgetWarningModal';
import { useCart } from '../../context/CartContext';
import { fetchProducts } from '../../redux/productsSlice';
import { refreshOffers } from '../../redux/offersSlice';  

const Layout = () => {
  const dispatch = useDispatch();
  const { itemsTotal } = useCart();
  const monthlyBudget = useSelector((state) => state.budget.monthlyBudget);
  const { items: products, status } = useSelector((state) => state.products); 

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [budgetDrawerOpen, setBudgetDrawerOpen] = useState(false);
  const [showBudgetWarning, setShowBudgetWarning] = useState(false);
  const [hasShownWarning, setHasShownWarning] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);


  useEffect(() => {
    if (status === 'succeeded' && products.length > 0) {
      dispatch(refreshOffers({ allProducts: products }));
    }
  }, [status, products, dispatch]);

  
  useEffect(() => {
    if (itemsTotal > monthlyBudget && !hasShownWarning && monthlyBudget > 0) {
      setShowBudgetWarning(true);
      setHasShownWarning(true);
    }
    
    if (itemsTotal <= monthlyBudget) {
      setHasShownWarning(false);
    }
  }, [itemsTotal, monthlyBudget, hasShownWarning]);

  useEffect(() => {
    setHasShownWarning(false);
  }, [monthlyBudget]);

  const handleMenuClick = () => setSidebarOpen(!sidebarOpen);
  const handleSearchClick = () => setSearchOpen(!searchOpen);
  const handleCategoryClick = () => setSidebarOpen(true);
  const handleSidebarClose = () => setSidebarOpen(false);

  const handleCartOpen = () => setCartOpen(true);
  const handleCartClose = () => setCartOpen(false);

  const openBudgetDrawer = () => setBudgetDrawerOpen(true);
  const closeBudgetDrawer = () => setBudgetDrawerOpen(false);

  const closeWarningModal = () => setShowBudgetWarning(false);
  const handleReviewCart = () => {
    setShowBudgetWarning(false);
    handleCartOpen(); 
  };

  return (
    <>
      <TopBar />

      <MainNav
        onSearchClick={handleSearchClick}
        onMenuClick={handleMenuClick}
        onCartClick={handleCartOpen}
        onBudgetClick={openBudgetDrawer}
      />

      <CategoryBar onBudgetClick={openBudgetDrawer} />

      <main>
        <Outlet />
      </main>

      <BottomNav
        onMenuClick={handleMenuClick}
        onCategoryClick={handleCategoryClick}
        onCartClick={handleCartOpen}
        onBudgetClick={openBudgetDrawer}
      />

      <HamburgerSidebar
        isOpen={sidebarOpen}
        onClose={handleSidebarClose}
        onBudgetClick={openBudgetDrawer}
      />

      <CartDrawer isOpen={cartOpen} onClose={handleCartClose} />
      <MiniCartBar />
      <Footer onBudgetClick={openBudgetDrawer} />

      <AuthModal />
      <BudgetDrawer isOpen={budgetDrawerOpen} onClose={closeBudgetDrawer} />

      <BudgetWarningModal
        isOpen={showBudgetWarning}
        onClose={closeWarningModal}
        onReviewCart={handleReviewCart}
        cartTotal={itemsTotal}
        budget={monthlyBudget}
      />
    </>
  );
};

export default Layout;