import React from "react";

// styles
import styles from "./styles.module.css";
import { HeaderProps } from "../../interface/Index";

const Header: React.FC<HeaderProps> = ({ page }) => {
  return (
    <header>
      <div className={styles["header-top"]}>
        <img src="./assets/images/redberry.png" alt="redberry" />
        <span>{page}</span>
      </div>
      <hr />
    </header>
  );
};

export default Header;
