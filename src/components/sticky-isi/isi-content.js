import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ISIContent = (props) => (
  <div className="isi-content">
    <div className="inner-container">
      {/* {!props.isiExpanded && (
        <AnchorLink
          href="#isi_jump"
          offset="65"
          className="isi-see-more hide-in-desktop"
        >
          <span className="link-see-more">See More</span>
          <span className="arrow-see-more">▾</span>
        </AnchorLink>
      )} */}
      <a name="ISI_ANCHOR" />
      <p className="isi_head brand-orange">INDICATION</p>
      <p className="full_isi_text">
        XIAFLEX<sup className="reg_mark">&reg;</sup> is indicated for the
        treatment of adult patients with Dupuytren’s contracture with a palpable
        cord.
      </p>
      <p className="isi_head brand-orange">
        Important Safety Information{" "}
        <nobr>
          for XIAFLEX<sup className="reg_mark">&reg;</sup>
        </nobr>
        <span className="hidden-xs hidden-sm">&nbsp;</span>
      </p>
      <ul>
        <li>
          XIAFLEX<sup className="reg_mark">&reg;</sup> is contraindicated in
          patients with a history of hypersensitivity to XIAFLEX
          <sup className="reg_mark">&reg;</sup> or to collagenase used in any
          other therapeutic application or application method
        </li>
        <li>
          In the controlled and uncontrolled portions of clinical trials in
          Dupuytren’s contracture, flexor tendon ruptures occurred after XIAFLEX
          <sup className="reg_mark">&reg;</sup> injection. Injection of XIAFLEX
          <sup className="reg_mark">&reg;</sup> into collagen-containing
          structures such as tendons or ligaments of the hand may result in
          damage to those structures and possible permanent injury such as
          tendon rupture or ligament damage. Therefore, XIAFLEX
          <sup className="reg_mark">&reg;</sup> should be injected only into the
          collagen cord with a MP or PIP joint contracture, and care should be
          taken to avoid injecting into tendons, nerves, blood vessels, or other
          collagen-containing structures of the hand. When injecting a cord
          affecting a PIP joint of the fifth finger, the needle insertion should
          not be more than 2 to 3 mm in depth and avoid injecting more than 4 mm
          distal to the palmar digital crease
        </li>
        <li>
          Other XIAFLEX<sup className="reg_mark">&reg;</sup>-associated serious
          local adverse reactions in the controlled and uncontrolled portions of
          the studies included pulley rupture, ligament injury, complex regional
          pain syndrome (CRPS), sensory abnormality of the hand, and skin
          laceration (tear). In a historically controlled post-marketing trial,
          the incidence of skin laceration (22%) was higher for subjects treated
          with two concurrent injections of XIAFLEX
          <sup className="reg_mark">&reg;</sup> compared with subjects treated
          with up to three single injections in the placebo-controlled
          premarketing trials (9%). Cases of skin laceration requiring skin
          graft after finger extension procedures have been reported
          post-­marketing. Signs or symptoms that may reflect serious injury to
          the injected finger/hand should be promptly evaluated because surgical
          intervention may be required
        </li>
        <li>
          In the controlled portions of the clinical trials in Dupuytren’s
          contracture, a greater proportion of XIAFLEX
          <sup className="reg_mark">&reg;</sup>-treated patients (15%) compared
          to placebo-treated patients (1%) had mild allergic reactions
          (pruritus) after up to 3 injections. The incidence of XIAFLEX
          <sup className="reg_mark">&reg;</sup>-associated pruritus increased
          after more XIAFLEX
          <sup className="reg_mark">&reg;</sup> injections in patients with
          Dupuytren’s contracture
        </li>
        <li>
          Because XIAFLEX<sup className="reg_mark">&reg;</sup> contains foreign
          proteins, severe allergic reactions to XIAFLEX
          <sup className="reg_mark">&reg;</sup> can occur. Anaphylaxis was
          reported in a post-marketing clinical study in one patient who had
          previous exposure to XIAFLEX<sup className="reg_mark">&reg;</sup> for
          the treatment of Dupuytren’s contracture. Healthcare providers should
          be prepared to address severe allergic reactions following XIAFLEX
          <sup className="reg_mark">&reg;</sup> injections
        </li>
        <li>
          In the XIAFLEX<sup className="reg_mark">&reg;</sup> trials in
          Dupuytren’s contracture, 70% and 38% of XIAFLEX
          <sup className="reg_mark">&reg;</sup>-treated patients developed an
          ecchymosis/contusion or an injection site hemorrhage, respectively.
          Patients with abnormal coagulation (except for patients taking
          low-dose aspirin, eg, up to 150 mg per day) were excluded from
          participating in these studies. Therefore, the efficacy and safety of
          XIAFLEX<sup className="reg_mark">&reg;</sup> in patients receiving
          anticoagulant medications (other than low-dose aspirin, eg, up to 150
          mg per day) within 7 days prior to XIAFLEX
          <sup className="reg_mark">&reg;</sup> administration is not known. In
          addition, it is recommended to avoid use of XIAFLEX
          <sup className="reg_mark">&reg;</sup> in patients with coagulation
          disorders, including patients receiving concomitant anticoagulants
          (except for low-dose aspirin)
        </li>
        <li>
          In the XIAFLEX<sup className="reg_mark">&reg;</sup> clinical trials
          for Dupuytren’s contracture, the most common adverse reactions
          reported in ≥25% of patients treated with XIAFLEX
          <sup className="reg_mark">&reg;</sup> and at an incidence greater than
          placebo were edema peripheral (eg, swelling of the injected hand),
          contusion, injection site hemorrhage, injection site reaction, and
          pain in the injected extremity
        </li>
      </ul>
      <p className="strong full_isi_text">
        Please see the full{" "}
        <a
          class="isi-text-link brand-orange"
          href="https://endodocuments.com/xiaflex/pi"
          target="_blank"
        >
          Prescribing Information
        </a>
        , including{" "}
        <a
          target="_blank"
          class="isi-text-link brand-orange"
          href="https://endodocuments.com/xiaflex/mg"
        >
          Medication Guide
        </a>
        .
      </p>
    </div>
  </div>
);

export default ISIContent;
