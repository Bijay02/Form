import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

//For more customizations
//https://github.com/springload/react-accessible-accordion
const AccordianExample = () => (
    <Accordion>
        <AccordionItem>
            <AccordionItemTitle>
                <h3 className="u-position-relative">
                    Simple title
                    <div className="accordion__arrow" role="presentation" />
                </h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>
                    Body content
                </p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3  className="u-position-relative">
                    Complex title
                    <div className="accordion__arrow" role="presentation" />
                </h3>
                <div>With a bit of description</div>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Body content</p>
            </AccordionItemBody>
        </AccordionItem>
    </Accordion>
);

export default AccordianExample;