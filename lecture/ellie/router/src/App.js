import './App.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Videos from './pages/Videos';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root />,
    errorElement : <NotFound />,
    children : [
      { 
        index : true, 
        element : <Home /> 
      }, 
      {
        path : '/videos',
        element : <Videos />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;