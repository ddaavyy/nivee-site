import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Header } from '@/components/components/Header';

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
