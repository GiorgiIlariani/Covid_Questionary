import Header from "../../components/header/Index";
import styles from "./styles.module.css";
import { Form, Formik } from "formik";
import { AdvicesInitialValues } from "../../components/FormikHelpers/InitialValues";
import { AdvicesValidationSchema } from "../../components/FormikHelpers/ValidationSchema";
import { Grid } from "@mui/material";
import FormControl from "../../components/FormikHelpers/FormControl";
import { radioArrProps } from "../../interface/Index";
import { Link, useNavigate } from "react-router-dom";
import PrevBtn from "../../components/UI/PrevBtn";
import NextBtn from "../../components/UI/NextBtn";

const nonFormalMeetings: radioArrProps[] = [
  { id: 1, value: "twice_a_week", label: "კვირაში ორჯერ" },
  { id: 2, value: "once_a_week", label: "კვირაში ერთხელ" },
  { id: 3, value: "once_every_two_weeks", label: "ორ კვირაში ერთხელ" },
  { id: 4, value: "once_a_month", label: "თვეში ერთხელ" },
];

const numberOfDaysFromOffice: radioArrProps[] = [
  { id: 0, value: 0, label: "0" },
  { id: 1, value: 1, label: "1" },
  { id: 2, value: 2, label: "2" },
  { id: 3, value: 3, label: "3" },
  { id: 4, value: 4, label: "4" },
  { id: 5, value: 5, label: "5" },
];

const Advices = () => {
  const navigate = useNavigate();
  const onSubmit = (values: any) => {
    const modifiedValues = {
      ...values,
      number_of_days_from_office: Number(values.number_of_days_from_office),
    };
    sessionStorage.setItem("advicesValues", JSON.stringify(modifiedValues));
    navigate("/thanks", { replace: true });
  };

  return (
    <section className="main-section">
      <Header page="4 / 4" />
      <div className="content">
        <div className="left-side">
          <Formik
            initialValues={AdvicesInitialValues}
            onSubmit={onSubmit}
            validationSchema={AdvicesValidationSchema}>
            {({ values }) => {
              console.log(values);

              return (
                <Form autoComplete="off">
                  <Grid container spacing={5}>
                    <Grid item xs={12} className={styles.text}>
                      <p>
                        რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული
                        წევრია. გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით,
                        ბევრისთვის არის და ყოფილა წლების განმავლობაში
                        მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
                        ჩვენთან გადმოსვლის.
                      </p>
                      <p className={styles.margin}>
                        პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ
                        პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
                      </p>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        control="radio"
                        label="რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*"
                        name="non_formal_meetings"
                        array={nonFormalMeetings}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        control="radio"
                        label="კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*"
                        name="number_of_days_from_office"
                        array={numberOfDaysFromOffice}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        control="textarea"
                        label="რას ფიქრობ ფიზიკურ შეკრებებზე?"
                        name="what_about_meetings_in_live"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        control="textarea"
                        label="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
                        name="tell_us_your_opinion_about_us"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center">
                      <Link to="/vaccine">
                        <PrevBtn />
                      </Link>
                      <NextBtn />
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div>
          <img src="./assets/images/office.png" alt="office" />
        </div>
      </div>
    </section>
  );
};

export default Advices;
