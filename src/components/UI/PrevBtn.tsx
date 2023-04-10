import React from "react";

// import styles
import styles from "./PrevBtn.module.css";
import { Link } from "react-router-dom";

const PrevBtn = () => {
  return (
    <button className={styles.btn} type="button">
      <img src="./assets/images/goBack.png" alt="go forward" />
    </button>
  );
};

export default PrevBtn;
