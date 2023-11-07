//import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
//import { FetchData } from "./components/FetchData";
import Home from "./pages/Home";
import Employee from './pages/Employee';
import Cat from './pages/Cat'

//json Array stroing pages paths
const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/Employee',
    requireAuth: false,
    element: <Employee />
  },
  {
    path: '/Cat',
    requireAuth: false,
    element: <Cat />
  }
];

export default AppRoutes;
