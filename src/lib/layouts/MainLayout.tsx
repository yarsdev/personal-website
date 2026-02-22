import { Header } from '@/components/ui/Header';
import { onLanguageChange } from '../i18n';
import { Footer } from '@/components/ui/Footer';
import { Route, Routes } from 'react-router';
import { Home } from '@/pages/Home';

const MainLayout = () => {
   return (
      <>
         <Header onLanguageChange={onLanguageChange} />
            <Routes>
                <Route index element={<Home />} />
            </Routes>
         <Footer />
      </>
   );
};

export default MainLayout;
