import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Error 404</h1>
      <h2 style={{ color: "red", textAlign: "center" }}>
        The requested page is not exist!
      </h2>
    </div>
  );
};

export default NotFound;
