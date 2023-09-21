//import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
//import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Employee } from './components/Employee';

//json Array stroing pages paths
const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  /*{
    path: '/fetch-data',
    requireAuth: false,
    element: <FetchData />
  },*/
  {
    path: '/Employee',
    requireAuth: false,
    element: <Employee />
  }
];

export default AppRoutes;
