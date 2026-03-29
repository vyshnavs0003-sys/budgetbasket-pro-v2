import { Outlet } from 'react-router-dom';
import TopBar from '../navbar/TopBar';
import MainNav from '../navbar/MainNav';

const Layout = () => {
  const handleMenuClick = () => {
    console.log('Menu clicked');
  };
  const handleSearchClick = () => {
    console.log('Search clicked');
  };

  return (
    <>
      <TopBar />
      <MainNav 
        cartCount={2}
        remainingBudget={1200}
        onSearchClick={handleSearchClick}
        onMenuClick={handleMenuClick}
      />
      <main>
        <Outlet />
      </main>
      <footer style={{ background: '#f8f9fa', padding: '1rem', marginTop: '2rem' }}>
        <p>[Footer will go here]</p>
      </footer>
    </>
  );
};

export default Layout;