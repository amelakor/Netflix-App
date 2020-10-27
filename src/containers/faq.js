import React from "react";
import fasData from "../fixtures/faq.json";
import { Accordion } from "../components";
import OptForm from "../components/opt-form";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {fasData.map((item) => {
        let { id, header, body } = item;
        return (
          <Accordion.Item key={id}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>{body}</Accordion.Body>
          </Accordion.Item>
        );
      })}
      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try it NOW</OptForm.Button>

        <OptForm.Text>
          Ready to watch? Enter your e-mail to create your membership
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
