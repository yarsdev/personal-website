import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { WeddingPage } from './pages/Wedding';
import MainLayout from './lib/layouts/MainLayout';

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/">
                  <Route index element={<MainLayout />} />
               </Route>
               <Route path="features">
                  <Route path="wedding" element={<WeddingPage />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
