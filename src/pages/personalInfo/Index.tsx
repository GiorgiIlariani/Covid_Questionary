// formik
import { Formik, Form } from "formik";

// import styles
import styles from "./styles.module.css";

// header
import Header from "../../components/header/Index";

// formik helpers
import { PersonInitialValues } from "../../components/FormikHelpers/InitialValues";
import { PersonalValidationSchema } from "../../components/FormikHelpers/ValidationSchema";
import FormControl from "../../components/FormikHelpers/FormControl";

// mui
import { Grid } from "@mui/material";

// react router
import { useNavigate } from "react-router-dom";

// nextbtn
import NextBtn from "../../components/UI/NextBtn";

const PersonalInfo = () => {
  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    sessionStorage.setItem("personalInfoValues", JSON.stringify(values));
    navigate("/covid-condition", { replace: true });
  };

  return (
    <section className="main-section">
      <Header page="1 / 4" />
      <div className="content">
        <div className="left-side">
          <Formik
            initialValues={PersonInitialValues}
            onSubmit={onSubmit}
            validationSchema={PersonalValidationSchema}>
            {({ values }) => {
              return (
                <Form autoComplete="off">
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <FormControl
                        control="input"
                        name="first_name"
                        label="სახელი*"
                        placeholder="გიორგი"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        control="input"
                        name="last_name"
                        label="გვარი*"
                        placeholder="ილარიანი"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        control="input"
                        label="მეილი*"
                        name="email"
                        placeholder="lmaisuradze3333@redberry.ge"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} display="flex" justifyContent="flex-end">
                    <NextBtn />
                  </Grid>
                </Form>
              );
            }}
          </Formik>
          <div className={styles.warning}>
            <hr style={{ marginBottom: "20px", width: "70%" }} />
            <span>*-ით მონიშნული ველების შევსება სავალდებულოა</span>
          </div>
        </div>
        <div>
          <img src="./assets/images/people.png" alt="people" />
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
