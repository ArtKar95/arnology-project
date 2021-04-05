import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Faq.css";
import "react-accessible-accordion/dist/fancy-example.css";
import { Col } from "react-bootstrap";

const Faq = () => {
  return (
    <section id="faq" className="faq">
      <div className="container accordion" data-aos="fade-up">
        <header className="sectionHeader">
          <h2>F.A.Q</h2>
          <p>Frequently Asked Questions</p>
        </header>
        <Accordion allowZeroExpanded className="row accordion">
          <Col>
            <AccordionItem>
              <AccordionItemHeading className="accordion-button collapsed">
                <AccordionItemButton>
                  Non consectetur a erat nam at lectus urna duis?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                magna fringilla urna porttitor rhoncus dolor purus non.
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading className="accordion-button collapsed">
                <AccordionItemButton>
                  Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant
                morbi. Id interdum velit laoreet id donec ultrices. Fringilla
                phasellus faucibus scelerisque eleifend donec pretium. Est
                pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
                cursus turpis massa tincidunt dui.
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading className="accordion-button collapsed">
                <AccordionItemButton>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                pellentesque eu tincidunt. Lectus urna duis convallis convallis
                tellus. Urna molestie at elementum eu facilisis sed odio morbi
                quis
              </AccordionItemPanel>
            </AccordionItem>
          </Col>
          <Col>
            <AccordionItem>
              <AccordionItemHeading className="accordion-button collapsed">
                <AccordionItemButton>
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant
                morbi. Id interdum velit laoreet id donec ultrices. Fringilla
                phasellus faucibus scelerisque eleifend donec pretium. Est
                pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
                cursus turpis massa tincidunt dui.
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading className="accordion-button collapsed">
                <AccordionItemButton>
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Molestie a iaculis at erat pellentesque adipiscing commodo.
                Dignissim suspendisse in est ante in. Nunc vel risus commodo
                viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                bibendum est. Purus gravida quis blandit turpis cursus in
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading className="accordion-button collapsed">
                <AccordionItemButton>
                  Varius vel pharetra vel turpis nunc eget lorem dolor?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed.
                Ut venenatis tellus in metus vulputate eu scelerisque.
                Pellentesque diam volutpat commodo sed egestas egestas fringilla
                phasellus faucibus. Nibh tellus molestie nunc non blandit massa
                enim nec.
              </AccordionItemPanel>
            </AccordionItem>
          </Col>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
