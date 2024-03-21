import React, { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../components/dfa-theme/layout";
import "./index.scss";
// import { Col, Row } from "react-flexbox-grid";

const McqPage = () => {
  console.log('deploy test');
  return (
    <Layout>
      <section id="form-container">
        <div className="form-block">
          <iframe
            src="https://deerfieldagency.formstack.com/forms/xdc_hcp_enrollment_form"
            title="Formstack Form"
            width="100%"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
};

export default McqPage;
