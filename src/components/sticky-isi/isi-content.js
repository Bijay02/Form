import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ISIContent = (props) => (
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
      <p className="isi_head brand-orange">INDICATION</p>
      <p>
        XIAFLEX<sup className="reg_mark">&#174;</sup> is indicated for the
        treatment of adult patients with Dupuytren’s contracture with a palpable
        cord.
      </p>
      <p className="isi_head brand-orange">
        Important Safety Information{" "}
        <nobr>
          for XIAFLEX<sup className="reg_mark">&#174;</sup>
        </nobr>
        <span className="hidden-xs hidden-sm">&nbsp;</span>
      </p>
      <span className="strong">
        Do not receive XIAFLEX<sup className="reg_mark">®</sup> if you:
      </span>
      <ul>
        <li>
          have been told by your healthcare provider that the Peyronie's plaque
          to be treated involves the "tube" that your urine passes through
          (urethra)
        </li>
        <li>
          are allergic to collagenase clostridium histolyticum or any of the
          ingredients in XIAFLEX<sup className="reg_mark">®</sup>, or to any
          other collagenase product. See the end of the Medication Guide for a
          complete list of ingredients in XIAFLEX
          <sup className="reg_mark">®</sup>
        </li>
      </ul>
      <p className="strong top-margin-only">
        XIAFLEX<sup className="reg_mark">®</sup> can cause serious side effects,
        including:
      </p>
      <ol>
        <li className="bold-number">
          <span className="strong">
            Penile fracture (corporal rupture) or other serious injury to the
            penis.
          </span>{" "}
          <span className="normal">
            Receiving an injection of XIAFLEX<sup className="reg_mark">®</sup>{" "}
            may cause damage to the tubes in your penis called the corpora.
            After treatment with XIAFLEX<sup className="reg_mark">®</sup>, one
            of these tubes may break during an erection. This is called a
            corporal rupture or penile fracture. This could require surgery to
            fix the damaged area. Damage to your penis might not get better
            after a corporal rupture.
          </span>
          <ul>
            <li>
              <span className="normal">
                After treatment with XIAFLEX<sup className="reg_mark">®</sup>,
                blood vessels in your penis may also break, causing blood to
                collect under the skin (hematoma). This could require a
                procedure to drain the blood from under the skin
              </span>
            </li>
          </ul>
          <p className="no-margin">
            Symptoms of corporal rupture or other serious injury to your penis
            may include:
          </p>
          <ul>
            <li>a popping sound or sensation in an erect penis</li>
            <li>sudden loss of the ability to maintain an erection</li>
            <li>pain in your penis</li>
            <li>purple bruising and swelling of your penis</li>
            <li>difficulty urinating or blood in the urine</li>
          </ul>
          <p className="strong">
            Call your healthcare provider right away if you have any of the
            symptoms of corporal rupture or serious injury to the penis listed
            above.
          </p>
          <p className="strong">
            Do not have sex or any other sexual activity between the first and
            second injections of a treatment cycle.
          </p>
          <p>
            <span className="strong">
              Do not have sex or have any other sexual activity for at least 4
              weeks after the second injection
            </span>{" "}
            of a treatment cycle with XIAFLEX<sup className="reg_mark">®</sup>{" "}
            and after any pain and swelling have gone away.
          </p>
          <p>
            XIAFLEX<sup className="reg_mark">®</sup> for the treatment of
            Peyronie's disease is only available through a restricted program
            called the XIAFLEX<sup className="reg_mark">®</sup> Risk Evaluation
            and Mitigation Strategy (REMS) Program. For more information about
            the XIAFLEX<sup className="reg_mark">®</sup> REMS Program, go to{" "}
            <a
              className="rems-link external_link"
              href="http://www.xiaflexrems.com"
              target="_blank"
              data-ga-category="exit"
              data-ga-action="https://dupuytrens-contracture.xiaflex.com/patient"
              data-ga-label="rems training"
            >
              www.XIAFLEXREMS.com
            </a>{" "}
            or call 1-877-313-1235.
          </p>
        </li>
        <li className="bold-number">
          <span className="strong">
            Hypersensitivity reactions, including anaphylaxis.
          </span>{" "}
          <span className="normal">
            Severe allergic reactions can happen in people who receive XIAFLEX
            <sup className="reg_mark">®</sup>, because it contains foreign
            proteins.
          </span>
          <p className="strong no-margin">
            Call your healthcare provider right away if you have any of these
            symptoms of an allergic reaction after an injection of XIAFLEX
            <sup className="reg_mark">®</sup>:
          </p>
          <ul>
            <li>hives</li>
            <li>swollen face</li>
            <li>breathing trouble</li>
            <li>chest pain</li>
            <li>low blood pressure</li>
            <li>dizziness or fainting</li>
          </ul>
        </li>
      </ol>
      <p>
        Before receiving XIAFLEX<sup className="reg_mark">®</sup>, tell your
        healthcare provider if you have had an allergic reaction to a previous
        XIAFLEX<sup className="reg_mark">®</sup> injection, or have a bleeding
        problem or any other medical conditions. Tell your healthcare provider
        about all the medicines you take, including prescription and
        non‑prescription medicines, vitamins, and herbal supplements. Using
        XIAFLEX<sup className="reg_mark">®</sup> with certain other medicines
        can cause serious side effects. Especially tell your healthcare provider
        if you take medicines to thin your blood (anticoagulants). If you are
        told to stop taking a blood thinner before your XIAFLEX
        <sup className="reg_mark">®</sup> injection, your healthcare provider
        should tell you when to restart the blood thinner. Ask your healthcare
        provider or pharmacist for a list of these medicines if you are unsure.
      </p>
      <p>
        <span className="strong">
          What should I avoid while receiving XIAFLEX
          <sup className="reg_mark">®</sup>?
        </span>
        <br />
        Avoid situations that may cause you to strain your stomach (abdominal)
        muscles, such as straining during bowel movements.
      </p>
      <p>
        <span className="strong">
          Do not use a vacuum erection device during your treatment with XIAFLEX
          <sup className="reg_mark">®</sup>.
        </span>
      </p>
      <p className="top-margin-only">
        <span className="strong">
          XIAFLEX<sup className="reg_mark">®</sup> can cause serious side
          effects, including increased chance of bleeding.
        </span>{" "}
        Bleeding or bruising at the injection site can happen in people who
        receive XIAFLEX<sup className="reg_mark">®</sup>. Talk to your
        healthcare provider if you have a problem with your blood clotting.
        XIAFLEX<sup className="reg_mark">®</sup> may not be right for you.{" "}
      </p>
      <p className="no-margin">
        The most common side effects with XIAFLEX
        <sup className="reg_mark">®</sup> for the treatment of Peyronie's
        disease include:
      </p>
      <ul>
        <li>
          a small collection of blood under the skin at the injection site
          (hematoma)
        </li>
        <li>swelling at the injection site or along your penis</li>
        <li>
          pain or tenderness at the injection site, along your penis and above
          your penis
        </li>
        <li>penis bruising</li>
        <li>itching of your penis or scrotum (genitals)</li>
        <li>painful erection</li>
        <li>erection problems (erectile dysfunction)</li>
        <li>changes in the color of the skin of your penis</li>
        <li>blisters at the injection site</li>
        <li>pain with sex</li>
        <li>a lump at the injection site (nodule)</li>
      </ul>
      <p>
        Tell your healthcare provider if you have any side effect that bothers
        you or does not go away.
      </p>
      <p>
        These are not all of the possible side effects with XIAFLEX
        <sup className="reg_mark">®</sup>. For more information, ask your
        healthcare provider or pharmacist.
      </p>
      <p className="isi_head pad_top">
        What is XIAFLEX<sup className="reg_mark">®</sup>?
      </p>
      <p>
        XIAFLEX<sup className="reg_mark">®</sup> is a prescription medicine used
        to treat adult men with Peyronie's disease who have a "plaque" that can
        be felt and a curve in their penis greater than 30 degrees when
        treatment is started.
      </p>
      <p>
        It is not known if XIAFLEX<sup className="reg_mark">®</sup> is safe and
        effective in children under the age of 18.
      </p>
      <p className="strong full_isi_text">
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

export default ISIContent;
