import React from "react";
// header
import Header from "../../components/header/Index";

// react formik
import { Form, Formik } from "formik";

// value
import { CovidConditionInitialValues } from "../../components/FormikHelpers/InitialValues";

// interface
import { radioArrProps, CovidConditionValueProps } from "../../interface/Index";

// formik helpers
import { CovidConditionValidationSchema } from "../../components/FormikHelpers/ValidationSchema";
import FormControl from "../../components/FormikHelpers/FormControl";

// mui
import { Grid } from "@mui/material";

// buttons
import NextBtn from "../../components/UI/NextBtn";
import PrevBtn from "../../components/UI/PrevBtn";

// router dom
import { Link, useNavigate } from "react-router-dom";

const hadCovid: radioArrProps[] = [
  { id: 1, value: "yes", label: "კი" },
  { id: 2, value: "no", label: "არა" },
  { id: 3, value: "I have now", label: "ახლა მაქვს" },
];

const hadAntibodyTest: radioArrProps[] = [
  { id: 1, value: "true", label: "კი" },
  { id: 2, value: "false", label: "არა" },
];

const CovidCondition = () => {
  const navigate = useNavigate();
  const onSubmit = (values: any) => {
    if (values.had_covid == "no" && values.had_covid === "I have now") {
      sessionStorage.setItem(
        "covidConditionValues",
        JSON.stringify(values.had_covid)
      );
    } else if (
      values.had_covid === "yes" &&
      values.had_antibody_test === "true"
    ) {
      const modifiedValues = {
        ...values,
        had_antibody_test: Boolean(values.had_antibody_test),
        antibodies: {
          test_date: values.antibodies.test_date,
          number: Number(values.antibodies.number),
        },
      };
      sessionStorage.setItem(
        "covidConditionValues",
        JSON.stringify(modifiedValues)
      );
    }

    if (values.had_antibody_test === "false") {
      console.log("antibody is false");
      const modifiedValues = {
        ...values,
        antibodies: {
          covid_sickness_date: values.antibodies.covid_sickness_date,
        },
      };
      sessionStorage.setItem(
        "covidConditionValues",
        JSON.stringify(modifiedValues)
      );
    }
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
            validationSchema={CovidConditionValidationSchema}
            validateOnBlur={true}
            validateOnChange={true}>
            {({ values }) => {
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
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {values.had_covid === "yes" && (
                        <FormControl
                          control="radio"
                          name="had_antibody_test"
                          label="ანტისხეულების ტესტი გაქვს გაკეთებული?*"
                          array={hadAntibodyTest}
                        />
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      {values.had_antibody_test === "false" &&
                      values.had_covid === "yes" ? (
                        <FormControl
                          control="datePicker"
                          name="antibodies.covid_sickness_date"
                          label="მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*"
                        />
                      ) : values.had_antibody_test === "true" &&
                        values.had_covid === "yes" ? (
                        <React.Fragment>
                          <FormControl
                            control="datePicker"
                            name="antibodies.test_date"
                            label="თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*"
                          />
                          <FormControl
                            control="input"
                            name="antibodies.number"
                            placeholder="ანტისხეულების რაოდენობა"
                          />
                        </React.Fragment>
                      ) : null}
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    mt={4}>
                    <Link to="/personal-info">
                      <PrevBtn />
                    </Link>
                    <NextBtn />
                  </Grid>
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
