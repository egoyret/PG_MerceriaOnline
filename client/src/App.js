import React from 'react';
import Home from './components/views/Home/Home';
import { Route } from 'react-router-dom';


import SignUpPage from './components/authentication/SignUp/index';
import SignInPage from './components/authentication/SignIn';
import Account from './components/authentication/Account';
import PasswordForgetPage from './components/authentication/PasswordForget';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductList/ProductDetail';
import * as ROUTES from './constants/routes';
import ProductCreation from './components/views/ProductCreation/ProductCreation';
import Login from './components/Login/Login'
import Navbar from './components/Nav/Navbar';
import Form from './components/Admin/FormDetail/Form';

function App() {
  return (
    <React.Fragment>
      <Route path="/" component={Navbar} />
      <Route path='/' component={Navigation}/>
      <Route path={ROUTES.HOME} component={Home}/>
      <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
      <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
      <Route path={ROUTES.ACCOUNT} component={Account}/>
      <Route path={ROUTES.PRODUCTS} component={ProductList}/>
      <Route path='/productdetail/:idProduct' component={ProductDetail}/>
      
      <Route exact path='/' component={Home} />
      <Route path={ROUTES.FORM} component={Form}/>
      <Route path='/productcreation' component={ProductCreation} />
      <Route path='/login' component={Login} />
    </React.Fragment>
  )
}

export default App
