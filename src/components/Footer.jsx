import React from "react";
import Styles from "../styles.module.sass";

function Footer() {
  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <a href="https://github.com/aemirdnr" target="_blank">
        <h6 className={Styles.covid_text}>@aemirdnr</h6>
      </a>
      <a href="https://github.com/aemirdnr" target="_blank">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="Github Icon"
          width="55"
        />
      </a>
    </div>
  );
}

export default React.memo(Footer);
