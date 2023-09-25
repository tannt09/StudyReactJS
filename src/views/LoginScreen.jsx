import { FromData } from "../data";
import { LoginItem } from "@/component"
 
const LoginScreen = () => {
  return (
    <>
      <div
        style={{
          white_space: "pre-wrap",
          background: "white",
          display: "flex",
          flexDirection: "column",
          padding: "10px 20px"
        }}
      >
        <h1 style={{ color: "black" }}>LoginScreen</h1>
        {FromData.map((item) => {
          return <LoginItem key={item.id} params={item} />;
        })}
      </div>
    </>
  );
};

export default LoginScreen;
