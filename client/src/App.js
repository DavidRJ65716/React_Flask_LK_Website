import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
//import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import Layout from './layouts/Layout';
import './assets/css/global.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App(){

  return (
    <Layout>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, requireAuth, ...rest } = route;
          //return <Route key={index} {...rest} element={requireAuth ? <AuthorizeRoute {...rest} element={element} /> : element} />;
          return <Route key={index} {...rest} element = {element}/>;
          //return <Route key={index}/>;
        })}
      </Routes>
    </Layout>
  );
}

/*export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, requireAuth, ...rest } = route;
            //return <Route key={index} {...rest} element={requireAuth ? <AuthorizeRoute {...rest} element={element} /> : element} />;
            return <Route key={index} {...rest} element = {element}/>;
            //return <Route key={index}/>;
          })}
        </Routes>
      </Layout>
    );
  }
}*/
