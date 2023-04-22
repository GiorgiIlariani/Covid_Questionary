// header props
export interface HeaderProps {
  page: string;
}

// //formik control
export interface FormikControlProps {
  control?: string;
  name: string;
  label?: string;
  placeholder?: string;
  array?: {
    value: string | boolean | number;
    label: string;
    id: number;
  }[];
  // value?: string | boolean;
  setFieldValue?: (field: string, value: any) => void;
}
// had covid?
export interface radioArrProps {
  id: number;
  value: string | boolean | number;
  label: string;
}

// covid condition value props
export interface CovidConditionValueProps {
  had_covid: string;
  had_antibody_test: string;
  antibodies: {
    test_date: string;
    number: string;
  };
}