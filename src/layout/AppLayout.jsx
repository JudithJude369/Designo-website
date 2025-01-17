import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
const AppLayout = () => {
  return (
    <main>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </main>
  );
};

export default AppLayout;
