import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HCPISIContent = (props) => (
  <div className="isi-content">
    <div className="inner-container">
      {!props.isiExpanded && (
        <AnchorLink
          href="#isi_jump"
          offset="65"
          className="isi-see-more hide-in-desktop"
        >
          <span className="link-see-more">See More</span>
          <span className="arrow-see-more">▾</span>
        </AnchorLink>
      )}
      <a name="ISI_ANCHOR" />
      <p className="isi_head">
        Important Safety{" "}
        <nobr>
          Information for XIAFLEX<sup className="reg_mark">®</sup>
        </nobr>
      </p>
      <div className="strong isi_warning_block">
        <p className="text-capitalize">
          WARNING: CORPORAL RUPTURE (PENILE FRACTURE) OR OTHER SERIOUS PENILE
          INJURY IN THE TREATMENT OF PEYRONIE'S DISEASE
        </p>
        <p>
          Corporal rupture (penile fracture) was reported as an adverse reaction
          in 5 of 1044 (0.5%) XIAFLEX<sup className="reg_mark">®</sup>‑treated
          patients in clinical studies. In other XIAFLEX
          <sup className="reg_mark">®</sup>‑treated patients (9 of 1044; 0.9%),
          a combination of penile ecchymoses or hematoma, sudden penile
          detumescence, and/or a penile "popping" sound or sensation was
          reported, and in these cases, a diagnosis of corporal rupture cannot
          be excluded. Severe penile hematoma was also reported as an adverse
          reaction in 39 of 1044 (3.7%) XIAFLEX<sup className="reg_mark">®</sup>
          ‑treated patients.
        </p>
        <p>
          Signs or symptoms that may reflect serious penile injury should be
          promptly evaluated to assess for corporal rupture or severe penile
          hematoma which may require surgical intervention.
        </p>
        <p>
          Because of the risks of corporal rupture or other serious penile
          injury, XIAFLEX<sup className="reg_mark">®</sup> is available for the
          treatment of Peyronie's disease only through a restricted program
          under a Risk Evaluation and Mitigation Strategy (REMS) called the
          XIAFLEX<sup className="reg_mark">®</sup> REMS Program.
        </p>
      </div>
      <ul>
        <li>
          XIAFLEX<sup className="reg_mark">®</sup> is contraindicated in the
          treatment of Peyronie's plaques that involve the penile urethra due to
          potential risk to this structure and in patients with a history of
          hypersensitivity to XIAFLEX<sup className="reg_mark">®</sup> or to
          collagenase used in any other therapeutic application or application
          method
        </li>
        <li>
          Injection of XIAFLEX<sup className="reg_mark">®</sup> into
          collagen‑containing structures such as the corpora cavernosa of the
          penis may result in damage to those structures and possible injury
          such as corporal rupture (penile fracture). Therefore, XIAFLEX
          <sup className="reg_mark">®</sup> should be injected only into the
          Peyronie's plaque and care should be taken to avoid injecting into the
          urethra, nerves, blood vessels, corpora cavernosa or other
          collagen‑containing structures of the penis
        </li>
        <li>
          In the double‑blind, placebo‑controlled portions of the clinical
          trials in Peyronie's disease, a greater proportion of XIAFLEX
          <sup className="reg_mark">®</sup>‑treated patients (4%) compared to
          placebo‑treated patients (1%) had localized pruritus after up to 4
          treatment cycles (involving up to 8 XIAFLEX
          <sup className="reg_mark">®</sup> injection procedures). The incidence
          of XIAFLEX<sup className="reg_mark">®</sup>‑associated pruritus was
          similar after each injection regardless of the number of injections
          administered
        </li>
        <li>
          Because XIAFLEX<sup className="reg_mark">®</sup> contains foreign
          proteins, severe allergic reactions to XIAFLEX
          <sup className="reg_mark">®</sup> can occur. Anaphylaxis was reported
          in a post‑marketing clinical trial in one patient who had previous
          exposure to XIAFLEX<sup className="reg_mark">®</sup> for the treatment
          of Dupuytren's contracture. Healthcare providers should be prepared to
          address severe allergic reactions following XIAFLEX
          <sup className="reg_mark">®</sup> injections. The safety of more than
          one treatment course of XIAFLEX<sup className="reg_mark">®</sup> is
          not known
        </li>
        <li>
          In the XIAFLEX<sup className="reg_mark">®</sup> controlled trials in
          Peyronie’s disease, 65.5% of XIAFLEX<sup className="reg_mark">®</sup>
          ‑treated patients developed penile hematoma, and 14.5% developed
          penile ecchymosis. Patients with abnormal coagulation (except for
          patients taking low‑dose aspirin, eg, up to 150 mg per day) were
          excluded from participating in these studies. Therefore, the efficacy
          and safety of XIAFLEX<sup className="reg_mark">®</sup> in patients
          receiving anticoagulant medications (other than low‑dose aspirin, eg,
          up to 150 mg per day) within 7 days prior to XIAFLEX
          <sup className="reg_mark">®</sup> administration is not known. In
          addition, it is recommended to avoid use of XIAFLEX
          <sup className="reg_mark">®</sup> in patients with coagulation
          disorders, including patients receiving concomitant anticoagulants
          (except for low‑dose aspirin)
        </li>
        <li>
          In the XIAFLEX<sup className="reg_mark">®</sup> clinical trials for
          Peyronie's disease, the most frequently reported adverse drug
          reactions (≥25%) and at an incidence greater than placebo included:
          penile hematoma, penile swelling, and penile pain
        </li>
      </ul>
      <br />
      <p className="isi_head">INDICATION</p>
      <p>
        XIAFLEX<sup className="reg_mark">®</sup> is indicated for the treatment
        of adult men with Peyronie's disease with a palpable plaque and
        curvature deformity of at least 30 degrees at the start of therapy.
      </p>
      <p className="full_isi_text">
        Please see the{" "}
        <a
          href="http://www.endo.com/File%20Library/Products/Prescribing%20Information/Xiaflex_prescribing_information.html"
          target="_blank"
          onclick='globalObject.trackEvent("exit", "click", "FULL PRESCRIBING INFORMATION");'
        >
          full Prescribing Information
        </a>
        , including Boxed Warning and{" "}
        <a
          href="http://www.endo.com/File%20Library/Products/Prescribing%20Information/Xiaflex_prescribing_information.html#endoanchor-MG"
          target="_blank"
          onclick='globalObject.trackEvent("exit", "click", "Medication Guide");'
        >
          Medication Guide
        </a>
        .
      </p>
    </div>
  </div>
);

export default HCPISIContent;
