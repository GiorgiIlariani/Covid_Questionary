import * as Yup from "yup";

const patterns = {
  name: /^[ა-ჰ]{2,}$/,
  surname: /^[ა-ჰ]{2,}$/,
  email: /^[a-zA-Z\d\.-]+@redberry\.ge$/,
};

export const PersonalValidationSchema = Yup.object().shape({
  first_name: Yup.string()
    .matches(
      patterns.name,
      "სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან"
    )
    .required("მინიმუმ ორი სიმბოლო, ქართული ასოები"),
  last_name: Yup.string()
    .matches(
      patterns.surname,
      "გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან"
    )
    .required("მინიმუმ ორი სიმბოლო, ქართული ასოები"),
  email: Yup.string()
    .matches(patterns.email, "უნდა მთავრდებოდეს @redberry.ge-ით")
    .required("უნდა მთავრდებოდეს @redberry.ge-ით"),
});

export const CovidConditionValidationSchema = Yup.object({
  had_covid: Yup.string().required(),
  had_antibody_test: Yup.string().required(),
  antibodies: Yup.object({
    test_date: Yup.string().required("ეს ველი სავალდებულოა!"),
    number: Yup.string().required("ეს ველი სავალდებულოა!"),
  }),
});

export const VaccineValidationSchema = Yup.object({
  had_vaccine: Yup.string().required(),
  vaccination_stage: Yup.string().required(),
  what_are_you_waiting_for: Yup.string().required(),
});

export const AdvicesValidationSchema = Yup.object({
  non_formal_meetings: Yup.string().required(),
  number_of_days_from_office: Yup.string().required(),
});
