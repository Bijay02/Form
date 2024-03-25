import React, { useEffect, useRef } from "react";
import Layout from "../components/dfa-theme/layout";
import "./index.scss";

const McqPage = () => {
  const formContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://deerfieldagency.formstack.com/forms/js.php/xdc_hcp_enrollment_form";
    script.async = true;

    if (formContainerRef.current) {
      formContainerRef.current.appendChild(script);
    }

    return () => {
      if (formContainerRef.current) {
        formContainerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <Layout>
      <section id="form-container" ref={formContainerRef}>
        <noscript>
          <a href="https://deerfieldagency.formstack.com/forms/xdc_hcp_enrollment_form" title="Online Form">
            Online Form - XDC HCP Enrollment Form
          </a>
        </noscript>
      </section>
    </Layout>
  );
};

export default McqPage;