import React, { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../components/dfa-theme/layout";
import "./index.scss";

const McqPage = () => {
  const [formFound, setFormFound] = useState(false);

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
      <section id='form-container'></section>
    </Layout>
  );
};

export default McqPage;
