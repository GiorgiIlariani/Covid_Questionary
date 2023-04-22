import * as Yup from "yup";

const patterns = {
  name: /^[ა-ჰ]{3,}$/,
  surname: /^[ა-ჰ]{3,}$/,
  email: /^[a-zA-Z\d\.-]+@redberry\.ge$/,
};

export const PersonalValidationSchema = Yup.object().shape({
  first_name: Yup.string()
    .matches(
      patterns.name,
      "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან"
    )
    .required("მინიმუმ სამი სიმბოლო, ქართული ასოები"),
  last_name: Yup.string()
    .matches(
      patterns.surname,
      "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან"
    )
    .required("მინიმუმ სამი სიმბოლო, ქართული ასოები"),
  email: Yup.string()
    .matches(patterns.email, "უნდა მთავრდებოდეს @redberry.ge-ით")
    .required("უნდა მთავრდებოდეს @redberry.ge-ით"),
});

export const CovidConditionValidationSchema = Yup.object({
  had_covid: Yup.string().required(),
  had_antibody_test: Yup.string().when("had_covid", {
    is: (value: string) => value !== "yes",
    then: (value) => value.notRequired(),
    otherwise: (value) => value.required(),
  }),
  antibodies: Yup.object().shape({
    covid_sickness_date: Yup.string().test(
      "covid_sickness_date",
      function (value) {
        let hadTest;
        let hadCovid;
        this.from?.map((item) => {
          hadTest = item.value.had_antibody_test;
          hadCovid = item.value.had_covid;
        });

        if (hadCovid === "no" || hadCovid === "I have now") {
          return true;
        }

        if (hadTest === "true") {
          return true;
        }

        if (value !== undefined) {
          return true;
        }

        return false;
      }
    ),
    test_date: Yup.string().notRequired(),
    number: Yup.number().notRequired(),
  }),
});

export const VaccineValidationSchema = Yup.object({
  had_vaccine: Yup.string().required(),
  vaccination_stage: Yup.string().when("had_vaccine", {
    is: "true",
    then: (value) => value.required(),
    otherwise: (value) => value.notRequired(),
  }),
  what_are_you_waiting_for: Yup.string().when("had_vaccine", {
    is: "false",
    then: (value) => value.required(),
    otherwise: (value) => value.notRequired(),
  }),
});

export const AdvicesValidationSchema = Yup.object({
  non_formal_meetings: Yup.string().required(),
  number_of_days_from_office: Yup.number().required(),
});
