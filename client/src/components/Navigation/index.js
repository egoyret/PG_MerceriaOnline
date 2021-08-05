import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SignOutButton from '../authentication/SignOut/index';
import * as ROUTES from '../../constants/routes';

function Navigation  ()  {

  var authUser = useSelector((state)=>state.authUser);
  
  return (
  <div>
    <ul>
      {authUser&&authUser!=='guest'?(
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
      ):null}
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.SHOP}>Shop</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li>
        <Link to={ROUTES.PRODUCTS}>Productos</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </div>
);}

export default Navigation;