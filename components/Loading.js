import { Circle } from "better-react-spinkit";

const Loading = () => {
  return (
    <center
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        backgroundColor: "#212121",
      }}
    >
      <h1 style={{ color: "#fff", fontSize: "2em" }}>FlemChat</h1>
      <Circle color="#8224e3" />
    </center>
  );
};

export default Loading;
