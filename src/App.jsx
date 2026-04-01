import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';


import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import MonthlyPlanner from './pages/MonthlyPlanner';
import MyOrders from './pages/MyOrders';
import MyProfile from './pages/MyProfile';
import Offers from './pages/Offers';
import CancellationRefund from './pages/CancellationRefund';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="offers" element={<Offers />} />
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="my-profile" element={<MyProfile />} />
            <Route path="monthly-planner" element={<MonthlyPlanner />} />
            <Route path="cancellation-refund" element={<CancellationRefund />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="category/:categoryName" element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;