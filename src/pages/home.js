import React from "react";
import Header from "../containers/header";
import { FaqsContainer } from "../containers/faq";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import { OptForm, Feature } from "../components";

export default function Home() {
  return (
    <>
      <Header>
        <Feature>
          <Feature.Title>Unlimited films, TV programms and more.</Feature.Title>
          <Feature.Title>Whatch anywhere, cancel anytime.</Feature.Title>
        </Feature>
        <OptForm>
          <OptForm.Input placeholder="Email Address" />
          <OptForm.Button>Try it Now</OptForm.Button>
        </OptForm>
        <OptForm.Text>
          Ready to watch? Enter your e-mail to create your membership
        </OptForm.Text>
      </Header>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
