import React from 'react';
import { Route } from 'react-router-dom';
import * as ROUTES from "./constants/routes"
// import ImageUpLoader from './components/ImageUpLoader/ImageUpLoader'
import Home from './components/views/Home/Home';
import Product from './components/views/Product/Product';
import FileUpload from './components/FileUploader/FileUploader';
import ProductCreation from './components/views/ProductCreation/ProductCreation';
import Login from './components/Login/Login'
import Navbar from './components/Nav/Navbar';

function App() {
  return (
    <React.Fragment>
      {/* <Route path='/' component={Navigation}/> */}
      <Route path={ROUTES.HOME} component={Home}/>
      <Route path={ROUTES.PRODUCT} component={Product}/>
      <Route path={ROUTES.CREATE_PRODUCT} component={ProductCreation}/>
      <Route path='/uploadPhoto' component={FileUpload}/>
      {/* <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
      <Route path={ROUTES.SIGN_IN} component={SignInPage}/> */}
    </React.Fragment>
  )
}

export default App
