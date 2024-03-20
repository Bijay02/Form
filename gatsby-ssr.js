import React from "react";
export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  setHeadComponents([
    <>
    <script  type="text/javascript" src="https://deerfieldagency.formstack.com/forms/js.php/xdc_hcp_enrollment_form"></script>
    <noscript><a href="https://deerfieldagency.formstack.com/forms/xdc_hcp_enrollment_form" title="Online Form">Online Form - XDC HCP Enrollment Form</a></noscript>
    </>,
  ])
}

