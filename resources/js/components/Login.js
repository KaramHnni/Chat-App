import React from "react";
import { Link } from "react-router-dom";

const Login = ({ userlogin = f => f }) => {
  let _email, _password;
  const handleLogin = e => {
    e.preventDefault();
    userlogin(_email.value, _password.value);
  };
  return (
    <div id="main" className="flex items-center justify-around">
      <form style={{width:600 }} className ="my-32 bg-white py-12 text-center" action="" onSubmit={handleLogin} method="post">
        <input ref={input => (_email = input)} name="email" type="text" className=" rounded focus:border-blue block my-8 w-4/5 mx-auto border border-solid border-grey-lighter py-4 px-4 text-grey-darkest" placeholder="email" />
        <input ref={input => (_password = input)} name="password" type="password" className="rounded focus:border-blue block my-8 w-4/5 mx-auto border border-solid border-grey-lighter py-4 px-4 text-grey-darkest" placeholder="password" />
        <input type="submit"value="submit" className="rounded shadow inline-block px-4 py-2 text-white bg-blue hover:bg-blue-dark focus:bg-blue-darker font-semibold text-center" />
      </form>
    </div>
  );
};
export default Login;
