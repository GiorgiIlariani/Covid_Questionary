import React from "react";

// import styles
import styles from "./styles.module.css";

const Thanks = () => {
  return (
    <div className={styles.thanks}>
      <div>
        <img
          src="./assets/images/thanks1.png"
          alt=""
          className={styles.thanks1}
        />
        <span>მადლობა</span>
        <img
          src="./assets/images/thanks2.png"
          alt=""
          className={styles.thanks2}
        />
      </div>
    </div>
  );
};

export default Thanks;
