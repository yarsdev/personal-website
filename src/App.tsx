import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { Header } from './components/ui/Header';
import { Footer } from './components/ui/Footer';
import { onLanguageChange } from './lib/i18n';

function App() {
   return (
      <>
         <BrowserRouter>
            <Header onLanguageChange={onLanguageChange} />
            <Routes>
               <Route index element={<Home />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   );
}

export default App;
