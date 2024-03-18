import React, { useLayoutEffect } from "react";
import Layout from "../components/dfa-theme/layout";
import "./index.scss";

const McqPage = () => {
  useLayoutEffect(() => {
    const formStackForm = document.querySelector("#fsform-container");
    const container = document.querySelector("#form-container");
    if (formStackForm && container) {
      container.appendChild(formStackForm);
    }
  }, []);

  return (
    <Layout>
      <section id='form-container'></section>
    </Layout>
  );
};

export default McqPage;
