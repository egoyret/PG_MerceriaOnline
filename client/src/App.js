import React from 'react';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';
// import ImageUpLoader from './components/ImageUpLoader/ImageUpLoader'
import FileUpload from './components/FileUploader/FileUploader';
import SignUpPage from './components/authentication/SignUp/index';
import SignInPage from './components/authentication/SignIn';
import Navigation from './components/Navigation';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <React.Fragment>
      <Route path='/' component={Navigation}/>
      <Route path={ROUTES.HOME} component={Home}/>
      <Route path='/uploadPhoto' component={FileUpload}/>
      <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
      <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
    </React.Fragment>
  )
}

export default App
