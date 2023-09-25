//import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
//import { FetchData } from "./components/FetchData";
import { Home } from "./components/pages/Home";
import { Employee } from './components/pages/Employee';
import { Cat } from './components/pages/Cat'

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
