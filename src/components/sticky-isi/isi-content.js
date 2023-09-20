import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const ISIContent = (props) => (
	<div className='isi-content'>
		<div className='inner-container'>
			<a name='ISI_ANCHOR' />
			<p className='isi_head brand-orange'>INDICATION</p>
			<p className='full_isi_text'>
				XIAFLEX<sup className='reg_mark'>&reg;</sup> is indicated for the
				treatment of adult patients with Dupuytren's contracture with a palpable
				cord.
			</p>
			<p className='isi_head brand-orange'>
				Important Safety Information <nobr>for XIAFLEX</nobr>
				<span className='hidden-xs hidden-sm'>&nbsp;</span>
			</p>
			<ul>
				<li>
					XIAFLEX is contraindicated in patients with a history of
					hypersensitivity to XIAFLEX or to collagenase used in any other
					therapeutic application or application method
				</li>
				<li>
					In the controlled and uncontrolled portions of clinical trials in
					Dupuytren's contracture, flexor tendon ruptures occurred after XIAFLEX
					injection. Injection of XIAFLEX into collagen-containing structures
					such as tendons or ligaments of the hand may result in damage to those
					structures and possible permanent injury such as tendon rupture or
					ligament damage. Therefore, XIAFLEX should be injected only into the
					collagen cord with a metacarpophalangeal (MP) or proximal
					interphalangeal (PIP) joint contracture, and care should be taken to
					avoid injecting into tendons, nerves, blood vessels, or other
					collagen-containing structures of the hand. When injecting a cord
					affecting a PIP joint of the fifth finger, the needle insertion should
					not be more than 2 to 3 mm in depth and avoid injecting more than 4 mm
					distal to the palmar digital crease
				</li>
				<li>
					Other XIAFLEX-associated serious local adverse reactions in the
					controlled and uncontrolled portions of the clinical studies included
					pulley rupture, ligament injury, complex regional pain syndrome
					(CRPS), sensory abnormality of the hand, and skin laceration (tear).
					In a historically controlled post-marketing trial, the incidence of
					skin laceration (22%) was higher for subjects treated with two
					concurrent injections of XIAFLEX compared with subjects treated with
					up to three single injections in the placebo-controlled premarketing
					trials (9%). Post-marketing cases of skin laceration requiring skin
					graft after finger extension procedures and local skin and soft-tissue
					necrosis, some requiring skin grafting, or other surgical
					interventions including finger amputation have been reported. Signs or
					symptoms that may reflect serious injury to the injected finger/hand
					should be promptly evaluated because surgical intervention may be
					required
				</li>
				<li>
					Cases of syncope and presyncope have been reported in the
					post-marketing period in patients treated with XIAFLEX. In most cases
					in patients with Dupuytren’s contracture, the injection procedure,
					finger extension procedure, or pain following the procedures were
					reported as potential triggers for the events, suggesting a vasovagal
					mechanism. Most, but not all, cases occurred in the immediate
					treatment period (injection or finger extension procedure) or within 1
					to 2 days following the injection or finger extension procedure. If
					presyncopal symptoms occur, patients should remain recumbent until
					symptoms resolve. Syncope may be associated with bodily injuries,
					including concussion, head abrasion, and other accidental injuries
				</li>
				<li>
					In the controlled portions of the clinical trials in Dupuytren's
					contracture, a greater proportion of XIAFLEX-treated patients (15%)
					compared to placebo-treated patients (1%) had mild allergic reactions
					(pruritus) after up to 3 injections. The incidence of
					XIAFLEX-associated pruritus increased after more XIAFLEX injections in
					patients with Dupuytren's contracture
				</li>
				<li>
					Because XIAFLEX contains foreign proteins, severe allergic reactions
					to XIAFLEX can occur. Anaphylaxis was reported in a post-marketing
					clinical trial in one patient who had previous exposure to XIAFLEX for
					the treatment of Dupuytren's contracture. Healthcare providers should
					be prepared to address severe allergic reactions following XIAFLEX
					injections
				</li>
				<li>
					In the XIAFLEX trials in Dupuytren's contracture, 70% and 38% of
					XIAFLEX-treated patients developed an ecchymosis/contusion or an
					injection site hemorrhage, respectively. Patients with abnormal
					coagulation (except for patients taking low-dose aspirin, eg, up to
					150 mg per day) were excluded from participating in these studies.
					Therefore, the efficacy and safety of XIAFLEX in patients receiving
					anticoagulant medications (other than low-dose aspirin, eg, up to 150
					mg per day) within 7 days prior to XIAFLEX administration is not
					known. In addition, it is recommended to avoid use of XIAFLEX in
					patients with coagulation disorders, including patients receiving
					concomitant anticoagulants (except for low-dose aspirin)
				</li>
				<li>
					In the XIAFLEX clinical trials for Dupuytren’s contracture, the most
					common adverse reactions reported in ≥25% of patients treated with
					XIAFLEX and at an incidence greater than placebo were edema peripheral
					(eg, swelling of the injected hand), contusion, injection site
					hemorrhage, injection site reaction, and pain in the injected
					extremity
				</li>
				<li>
					<u>Post-marketing experience</u> – Syncope and presyncope have been
					reported in patients treated with XIAFLEX. Most, but not all, cases
					occurred in the immediate treatment period or within 1 to 2 days
					following injection. Bodily injuries associated with the syncopal
					events have been reported
				</li>
			</ul>

			<p className='strong full_isi_text'>
				Click for full{' '}
				<a
					className='isi-text-link brand-orange'
					href='https://endodocuments.com/xiaflex/pi'
					target='_blank'
				>
					Prescribing Information
				</a>{' '}
				and{' '}
				<a
					target='_blank'
					className='isi-text-link brand-orange'
					href='https://www.endodocuments.com/XIAFLEX_DC/MG'
				>
					Medication Guide
				</a>
				.
			</p>
            <section className="reference">
                    <p className="full_isi_text"><span className="strong">References:</span><br/>
                   XIAFLEX<sup>&reg;</sup> [package insert]. Malvern, PA: Endo Pharmaceuticals Inc.</p>
                   <p className="full_isi_text">
                    Feldman G, Rozen N, Rubin G. Dupuytren’s contracture: current treatment methods. <em>IMAJ</em>. 2017;19.</p>
            </section>
		</div>
	</div>
);

export default ISIContent;
