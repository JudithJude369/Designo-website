import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '@/pages/About';
import Locations from '@/pages/Locations';
import Contact from '@/pages/Contact';
import Homepage from '@/pages/Homepage';
import PageNotFound from '@/pages/PageNotFound';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
