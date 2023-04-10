import React from "react";

// import styles
import styles from "./NextBtn.module.css";
import { NextBtnProps } from "../../interface/Index";

const NextBtn = () => {
  return (
    <button className={styles.btn} type="submit">
      <img src="./assets/images/goForward.png" alt="go forward" />
    </button>
  );
};

export default NextBtn;
