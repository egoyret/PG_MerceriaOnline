import React from 'react';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';

import FileUpload from './components/FileUploader/FileUploader';
import SignUpPage from './components/authentication/SignUp/index';
import SignInPage from './components/authentication/SignIn';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductList/ProductDetail';
import * as ROUTES from './constants/routes';
import ProductCreation from './components/ProductCreation/ProductCreation';
import Login from './components/Login/Login'
import Navbar from './components/Nav/Navbar';

function App() {
  return (
    <React.Fragment>
      <Route path='/' component={Navigation}/>
      <Route path={ROUTES.HOME} component={Home}/>
      <Route path='/uploadPhoto' component={FileUpload}/>
      <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
      <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
      <Route path={ROUTES.PRODUCTS} component={ProductList}/>
      <Route path={ROUTES.PRODDETAIL} component={ProductDetail}/>
      <Route path="/" component={Navbar} />
      <Route exact path='/' component={Home} />
      <Route path='/uploadPhoto' component={FileUpload} />
      <Route path='/productcreation' component={ProductCreation} />
      <Route path='/login' component={Login} />
    </React.Fragment>
  )
}

export default App
