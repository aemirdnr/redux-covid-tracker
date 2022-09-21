import React from "react";

function Header() {
  return (
    <div className="d-flex flex-column align-items-center gap-1 mt-3">
      <img
        src="../img/covid.png"
        alt="Covid19 Image"
        style={{ width: "370px" }}
      />
      <b>Global and Country Wise Cases of Corona Virus</b>
      <text>(For a Particular country, select a Country from below)</text>
    </div>
  );
}

export default React.memo(Header);
