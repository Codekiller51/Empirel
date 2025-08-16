import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { ScrollToTop } from '../components/common/ScrollToTop';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow mt-12 md:mt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;