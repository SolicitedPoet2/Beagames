import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Homepage from './components/Homepage/Homepage.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Reportagem from './components/Reportagens/reportagem1.jsx';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: "/", element: <Homepage />},
  { path: "/reportagens/o-impacto-dos-jogos-na-vida-das-pessoas", element: <Reportagem /> },
  { path: "*", element: <NotFound />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
