import React from 'react';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import { Route } from 'react-router-dom';

import FileUpload from './components/FileUploader/FileUploader';
import ProductCreation from './components/ProductCreation/ProductCreation';
import Login from './components/Login/Login'
import Navbar from './components/Nav/Navbar';

function App() {
  return (
    <React.Fragment>
      <Route path="/" component={Navbar} />
      <Route exact path='/' component={Home} />
      <Route path={ROUTES.SHOP} component={Shop}/>
      <Route path='/uploadPhoto' component={FileUpload} />
      <Route path='/productcreation' component={ProductCreation} />
      <Route path='/login' component={Login} />
    </React.Fragment>
  )
}

export default App
