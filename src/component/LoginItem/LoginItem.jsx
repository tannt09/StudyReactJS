/* eslint-disable react/prop-types */

const LoginItem = ({ params }) => {
  return (
    <>
      <input
        placeholder={params.placeholder}
        style={{
          padding: "10px",
          border: "1px solid black",
          backgroundColor: "white",
        }}
      ></input>
      <span style={{ color: "red", textAlign: "left" }}>{params.label}</span>
    </>
  );
};

export default LoginItem;
