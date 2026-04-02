import './App.css';
import { HashRouter, Route, Routes } from 'react-router';
import { WeddingPage } from './pages/Wedding';
import MainLayout from './lib/layouts/MainLayout';
import NotFoundPage from './pages/NotFound';

function App() {
   return (
      <>
         <HashRouter>
            <Routes>
               <Route path="/">
                  <Route index element={<MainLayout />} />
               </Route>
               <Route path="features">
                  <Route path="wedding" element={<WeddingPage />} />
               </Route>
               <Route path="/*" element={<NotFoundPage />}></Route>
            </Routes>
         </HashRouter>
      </>
   );
}

export default App;
