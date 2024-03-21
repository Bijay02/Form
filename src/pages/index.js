import React, { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../components/dfa-theme/layout";
import "./index.scss";

const McqPage = () => {

  return (
    <Layout>
      <section id="form-container">
        <iframe src="https://deerfieldagency.formstack.com/forms/xdc_hcp_enrollment_form" title="Formstack Form" style={{width:''}}></iframe>
      </section>
    </Layout>
  );
};

export default McqPage;
