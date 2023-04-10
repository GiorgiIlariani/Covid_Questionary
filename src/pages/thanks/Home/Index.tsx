import React from "react";

//react router
import { Link } from "react-router-dom";

// import styles
import styles from "./styles.module.css";

const HomePage = () => {
  return (
    <section className={styles["section-center"]}>
      <img src="./assets/images/redberry-logo.png" alt="redberry-logo" />
      <Link to="/personal-info">
        <h2>კითხვარის დაწყება</h2>
      </Link>
    </section>
  );
};

export default HomePage;
