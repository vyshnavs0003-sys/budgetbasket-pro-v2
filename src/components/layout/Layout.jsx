import { Outlet } from 'react-router-dom';
import TopBar from '../navbar/TopBar';

const Layout = () => {
  return (
    <>
      <TopBar />
      
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