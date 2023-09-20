import React from "react";
import { FromData } from "../data";
import { LoginItem } from "../component";

const LoginScreen = () => {
  return (
    <>
      <div style={{ white_space: "pre-wrap", background: "white" }}>
        <h1>LoginScreen</h1>
        {FromData.map( item => {
            return <LoginItem key={item.id} params={item}/>
        })}
      </div>
    </>
  );
};

export default LoginScreen;
