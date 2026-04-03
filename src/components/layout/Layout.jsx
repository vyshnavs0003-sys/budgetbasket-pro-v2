import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../navbar/TopBar';
import MainNav from '../navbar/MainNav';
import CategoryBar from '../navbar/CategoryBar';
import BottomNav from '../navbar/BottomNav';
import HamburgerSidebar from '../navbar/HamburgerSidebar';
import CartDrawer from '../ui/CartDrawer';
import Footer from '../footer/Footer';
import MiniCartBar from '../ui/MiniCartBar';
import AuthModal from '../ui/AuthModal';  // ✅ Import AuthModal

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleMenuClick = () => setSidebarOpen(!sidebarOpen);
  const handleSearchClick = () => setSearchOpen(!searchOpen);
  const handleCategoryClick = () => setSidebarOpen(true);
  const handleSidebarClose = () => setSidebarOpen(false);

  const handleCartOpen = () => setCartOpen(true);
  const handleCartClose = () => setCartOpen(false);

  return (
    <>
      <TopBar />

      <MainNav
        remainingBudget={1200}
        onSearchClick={handleSearchClick}
        onMenuClick={handleMenuClick}
        onCartClick={handleCartOpen}
      />

      <CategoryBar />

      <main>
        <Outlet />
      </main>

      <BottomNav
        onMenuClick={handleMenuClick}
        onCategoryClick={handleCategoryClick}
        onCartClick={handleCartOpen}
      />

      <HamburgerSidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />

      <CartDrawer isOpen={cartOpen} onClose={handleCartClose} />
      <MiniCartBar />
      <Footer />

      
      <AuthModal />
    </>
  );
};

export default Layout;