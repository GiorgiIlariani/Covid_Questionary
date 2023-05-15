import { useEffect } from "react";

import axios from "axios";

// import styles
import styles from "./styles.module.css";

const Thanks = () => {
  useEffect(() => {
    const personalInfoValues = JSON.parse(
      sessionStorage.getItem("personalInfoValues")!
    );
    const covidConditionValues = JSON.parse(
      sessionStorage.getItem("covidConditionValues")!
    );
    const vaccineValues = JSON.parse(sessionStorage.getItem("vaccineValues")!);
    const advicesValues = JSON.parse(sessionStorage.getItem("advicesValues")!);

    const values = Object.assign(
      {},
      personalInfoValues,
      covidConditionValues,
      vaccineValues,
      advicesValues
    );

    // something bad happening with backend server

    // axios
    //   .post("https://covid19.devtest.ge/api/create", values)
    //   .then((response) => {
    //     console.log(response);
    //     // handle the response from the server
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     // handle the error
    //   });
  }, []);
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
