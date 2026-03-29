import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      {/* Placeholder for TopBar, MainNav, etc. */}
      <header style={{ background: '#f8f9fa', padding: '1rem' }}>
        <p>[Navbar will go here]</p>
      </header>

      <main>
        <Outlet />
      </main>

      {/* Placeholder for Footer */}
      <footer style={{ background: '#f8f9fa', padding: '1rem', marginTop: '2rem' }}>
        <p>[Footer will go here]</p>
      </footer>
    </>
  );
};

export default Layout;