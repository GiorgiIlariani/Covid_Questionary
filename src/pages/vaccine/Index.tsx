// header component
import Header from "../../components/header/Index";
// formik
import { Form, Formik } from "formik";

// helpers
import { VaccineInitialValues } from "../../components/FormikHelpers/InitialValues";
import FormControl from "../../components/FormikHelpers/FormControl";
import { VaccineValidationSchema } from "../../components/FormikHelpers/ValidationSchema";
// mui
import { Grid } from "@mui/material";

// interface
import { radioArrProps } from "../../interface/Index";

// import styles
import styles from "./styles.module.css";

//router link
import { Link } from "react-router-dom";

//buttons
import PrevBtn from "../../components/UI/PrevBtn";
import NextBtn from "../../components/UI/NextBtn";

const hadVaccine: radioArrProps[] = [
  { id: 1, value: true, label: "კი" },
  { id: 2, value: false, label: "არა" },
];

const chooseTheStage: radioArrProps[] = [
  {
    id: 1,
    value: "პირველი დოზა და დარეგისტრირებული ვარ მეორეზე",
    label: "პირველი დოზა და დარეგისტრირებული ვარ მეორეზე",
  },

  { id: 2, value: "სრულად აცრილი ვარ", label: "სრულად აცრილი ვარ" },
  {
    id: 3,
    value: "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე",
    label: "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე",
  },
];

const whatAreYouWaitingFor: radioArrProps[] = [
  {
    id: 1,
    value: "დარეგისტრირებული ვარ და ველოდები რიცხვს",
    label: "დარეგისტრირებული ვარ და ველოდები რიცხვს",
  },

  { id: 2, value: "არ ვგეგმავ", label: "არ ვგეგმავ" },
  {
    id: 3,
    value: "გადატანილი მაქვს და ვგეგმავ აცრას",
    label: "გადატანილი მაქვს და ვგეგმავ აცრას",
  },
];

const Vaccine = () => {
  const submitHandler = () => {
    console.log("submited");
  };
  return (
    <section className="main-section">
      <Header page="3 / 4" />
      <div className="content">
        <div className="left-side">
          <Formik
            initialValues={VaccineInitialValues}
            validationSchema={VaccineValidationSchema}
            onSubmit={submitHandler}>
            {({ setFieldValue, values }) => {
              return (
                <Form autoComplete="off">
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <FormControl
                        control="radio"
                        name="had_vaccine"
                        array={hadVaccine}
                        label="უკვე აცრილი ხარ?*"
                        setFieldValue={setFieldValue}
                        value={values.had_vaccine}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {values.had_vaccine === "true" && (
                        <FormControl
                          control="radio"
                          name="vaccination_stage"
                          label="აირჩიე რა ეტაპზე ხარ*"
                          array={chooseTheStage}
                          setFieldValue={setFieldValue}
                          value={values.vaccination_stage}
                        />
                      )}
                      {values.had_vaccine === "false" && (
                        <FormControl
                          control="radio"
                          name="what_are_you_waiting_for"
                          label="რას ელოდები"
                          array={whatAreYouWaitingFor}
                          setFieldValue={setFieldValue}
                          value={values.what_are_you_waiting_for}
                        />
                      )}
                    </Grid>
                    <Grid item xs={12} mt={4} ml={4}>
                      {values.vaccination_stage ===
                        "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე" &&
                        values.had_vaccine === "true" && (
                          <div>
                            <p style={{ fontSize: "20px" }}>
                              რომ არ გადადო,
                              <br /> ბარემ ახლავე დარეგისტრირდი
                              <br />
                              <a
                                href=" https://booking.moh.gov.ge/"
                                style={{ color: "#1289AE" }}>
                                https://booking.moh.gov.ge/
                              </a>
                            </p>
                          </div>
                        )}
                    </Grid>
                    <Grid item xs={12} ml={4}>
                      {values.had_vaccine === "false" &&
                        values.what_are_you_waiting_for ===
                          "გადატანილი მაქვს და ვგეგმავ აცრას" && (
                          <div style={{ fontSize: "20px" }}>
                            <p
                              style={{
                                marginBottom: "10px",
                              }}>
                              ახალი პროტოკოლით კოვიდის გადატანიდან 1<br /> თვის
                              შემდეგ შეგიძლიათ ვაქცინის გაკეთება.
                            </p>
                            <span>
                              👉 რეგისტრაციის ბმული
                              <br />
                              <a
                                href=" https://booking.moh.gov.ge/"
                                style={{ color: "#1289AE" }}>
                                https://booking.moh.gov.ge/
                              </a>
                            </span>
                          </div>
                        )}
                    </Grid>
                  </Grid>
                  <Link to="/covid-condition">
                    <PrevBtn />
                  </Link>
                  <NextBtn />
                </Form>
              );
            }}
          </Formik>
        </div>
        <div>
          <img src="./assets/images/doctor.png" alt="doctor" />
        </div>
      </div>
    </section>
  );
};

export default Vaccine;
