import React from "react";

// react router
import { Routes, Route } from "react-router-dom";

//pages
import HomePage from "./pages/thanks/Home/Index";
import PersonalInfo from "./pages/personalInfo/Index";
import CovidCondition from "./pages/covidCondition/Index";
import Vaccine from "./pages/vaccine/Index";
import Advices from "./pages/advices/Index";
import Thanks from "./pages/thanks/Index";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/covid-condition" element={<CovidCondition />} />
        <Route path="/vaccine" element={<Vaccine />} />
        <Route path="/advices" element={<Advices />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
