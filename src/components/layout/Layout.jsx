import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../navbar/TopBar';
import MainNav from '../navbar/MainNav';
import CategoryBar from '../navbar/CategoryBar';
import BottomNav from '../navbar/BottomNav';
import HamburgerSidebar from '../navbar/HamburgerSidebar';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleMenuClick = () => setSidebarOpen(!sidebarOpen);
  const handleSearchClick = () => setSearchOpen(!searchOpen);
  const handleCategoryClick = () => setSidebarOpen(true);
  const handleSidebarClose = () => setSidebarOpen(false);

  return (
    <>
      <TopBar />
      <MainNav
        cartCount={2}
        remainingBudget={1200}
        onSearchClick={handleSearchClick}
        onMenuClick={handleMenuClick}
      />
      <CategoryBar />
      <main>
        <Outlet />
      </main>
      <BottomNav
        cartCount={2}
        onMenuClick={handleMenuClick}
        onCategoryClick={handleCategoryClick}
      />
      <HamburgerSidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
      {/* Footer placeholder */}
      <footer style={{ background: '#f8f9fa', padding: '1rem', marginTop: '2rem' }}>
        <p>[Footer will go here]</p>
      </footer>
    </>
  );
};

export default Layout;