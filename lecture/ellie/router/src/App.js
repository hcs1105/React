import './App.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path : '/',
    element : <p>Home</p>,
    errorElement : <p>Not Found</p>
  },
  {
    path : '/videos',
    element : <p>Videos</p>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
  // return <p>App</p>;
}

export default App;