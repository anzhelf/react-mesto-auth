import React from "react";
import { Route, Redirect } from "react-router-dom";
import Main from "./Main";
import Register from './Register';
import Login from './Login';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route /*exact*/>
      {() => {
        //props.loggedIn ? <Component {...props} /> : <Redirect to='/sign-in' />
        console.log(<Component {...props} />);
        console.log(props.loggedIn);
        if (props.loggedIn) {
          console.log('y');
        }
        else {
          console.log('no');
          <Redirect to='/sign-in' />
        }

      }
      }
    </Route>
  )
}
export default ProtectedRoute;