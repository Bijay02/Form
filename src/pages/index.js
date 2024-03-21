import React, { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../components/dfa-theme/layout";
import "./index.scss";
// import { Col, Row } from "react-flexbox-grid";

const McqPage = () => {
  const [formFound, setFormFound] = useState(false);
  console.log('deploy test')
  useEffect(() => {
    let interval;
    console.log('rendering')
    if (!formFound) {
      interval = setInterval(() => {
        const formStackForm = document.querySelector("#fsform-container");
        const formContainer = document.querySelector("#form-container");

        if (formStackForm && formContainer) {
          setFormFound(true);
          formContainer.appendChild(formStackForm);
          clearInterval(interval);
        }
      }, 200);
    }

    return () => {
      clearInterval(interval);
    };
  }, [formFound]);

  return (
    <Layout>
      <section id="form-container">
        {/* <div className="form-block">
          <iframe
            src="https://deerfieldagency.formstack.com/forms/xdc_hcp_enrollment_form"
            title="Formstack Form"
            width="100%"
          ></iframe>
        </div> */}
      </section>
    </Layout>
  );
};

export default McqPage;
