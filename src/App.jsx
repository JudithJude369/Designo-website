import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import About from '@/pages/About';
import Locations from '@/pages/Locations';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import PageNotFound from '@/pages/PageNotFound';
import AppLayout from '@/layout/AppLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
