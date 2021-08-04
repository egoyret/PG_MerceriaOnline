import React from 'react';
import { withRouter } from 'react-router-dom';
import {compose} from 'recompose';

import { withFirebase } from '../../FireBase/context';
import Firebase from '../../FireBase';

 function LogOutButton () {
     return (
         <SignOutButton/>
     )
 }


 function SignOutButtonBase  (props) {

    function clickHandler  (props) {
        console.log('hiciste click')
        try {
            props.firebase.doSignOut();
            props.history.push('/')
        } catch (error) {
            console.log(error.message); 
        }
        
    }

    return (
  <button type="button" onClick={clickHandler}>
    Sign Out
  </button>
);}

const SignOutButton = compose(
    withRouter,
    withFirebase,
  )(SignOutButtonBase);

export default LogOutButton;
export {SignOutButton}  
// export default withFirebase(SignOutButton);


// export function SignOutButton  ({ firebase }) {
//     return (<button type="button" onClick={firebase.doSignOut}>
//     Sign Out
//   </button>)

// }
  


// export default withFirebase(SignOutButton);

// export {SignOutButton};