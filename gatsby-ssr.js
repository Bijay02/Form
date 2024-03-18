/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <>
    <script type="text/javascript" src="https://deerfieldagency.formstack.com/forms/js.php/xdc_hcp_enrollment_form"></script>
    <noscript><a href="https://deerfieldagency.formstack.com/forms/xdc_hcp_enrollment_form" title="Online Form">Online Form - XDC HCP Enrollment Form</a></noscript>
    </>,
  ]);
};
