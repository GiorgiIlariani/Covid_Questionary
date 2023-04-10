import React from "react";
// header
import Header from "../../components/header/Index";

// react formik
import { Form, Formik } from "formik";

// value
import { CovidConditionInitialValues } from "../../components/FormikHelpers/InitialValues";

// interface
import { radioArrProps, CovidConditionValueProps } from "../../interface/Index";
import { CovidConditionValidationSchema } from "../../components/FormikHelpers/ValidationSchema";

import FormControl from "../../components/FormikHelpers/FormControl";
import { Grid } from "@mui/material";
import NextBtn from "../../components/UI/NextBtn";
import PrevBtn from "../../components/UI/PrevBtn";
import { Link, useNavigate } from "react-router-dom";

const hadCovid: radioArrProps[] = [
  { id: 1, value: "კი", label: "კი" },
  { id: 2, value: "არა", label: "არა" },
  { id: 3, value: "ახლა მაქვს", label: "ახლა მაქვს" },
];

const hadAntibodyTest: radioArrProps[] = [
  { id: 1, value: true, label: "კი" },
  { id: 2, value: false, label: "არა" },
];

const CovidCondition = () => {
  const navigate = useNavigate();
  const onSubmit = (values: CovidConditionValueProps, helpers: any) => {
    navigate("/vaccine", { replace: true });
  };

  return (
    <section className="main-section">
      <Header page="2 / 4" />
      <div className="content">
        <div className="left-side">
          <Formik
            onSubmit={onSubmit}
            initialValues={CovidConditionInitialValues}
            validationSchema={CovidConditionValidationSchema}>
            {({ values, setFieldValue }) => {
              console.log(values);

              return (
                <Form autoComplete="off">
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <FormControl
                        control="radio"
                        name="had_covid"
                        label="გაქვს გადატანილი covid-19?*"
                        array={hadCovid}
                        value={values.had_covid}
                        setFieldValue={setFieldValue}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {values.had_covid === "კი" && (
                        <FormControl
                          control="radio"
                          name="had_antibody_test"
                          label="ანტისხეულების ტესტი გაქვს გაკეთებული?*"
                          array={hadAntibodyTest}
                          value={values.had_antibody_test}
                          setFieldValue={setFieldValue}
                        />
                      )}
                    </Grid>
                    <Grid item xs={11}>
                      {values.had_antibody_test === "false" &&
                      values.had_covid === "კი" ? (
                        <FormControl
                          control="datePicker"
                          name="antibodies.test_date"
                          value={values.antibodies.test_date}
                          label="მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*"
                          setFieldValue={setFieldValue}
                        />
                      ) : values.had_antibody_test === "true" &&
                        values.had_covid === "კი" ? (
                        <React.Fragment>
                          <FormControl
                            control="datePicker"
                            name="antibodies.test_date"
                            value={values.antibodies.test_date}
                            label="თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*"
                            setFieldValue={setFieldValue}
                          />
                          <FormControl
                            control="input"
                            name="antibodies.number"
                            value={values.antibodies.number}
                            setFieldValue={setFieldValue}
                            placeholder="ანტისხეულების რაოდენობა"
                          />
                        </React.Fragment>
                      ) : null}
                    </Grid>
                  </Grid>
                  <Link to="/personal-info">
                    <PrevBtn />
                  </Link>
                  <NextBtn />
                </Form>
              );
            }}
          </Formik>
        </div>
        <div>
          <img src="./assets/images/temperature.png" alt="vaccinate" />
        </div>
      </div>
    </section>
  );
};

export default CovidCondition;
