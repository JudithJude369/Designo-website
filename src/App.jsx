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
import AppDesign from '@/pages/AppDesign';
import GraphicDesign from '@/pages/GraphicDesign';
import WebDesign from '@/pages/WebDesign';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="/appdesign" element={<AppDesign />} />
      <Route path="/graphicdesign" element={<GraphicDesign />} />
      <Route path="/webdesign" element={<WebDesign />} />
      <Route path="/about" element={<About />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
const App = () => {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
