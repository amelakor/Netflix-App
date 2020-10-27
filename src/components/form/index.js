import React from "react";
import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Form.Error = function FormaError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};
Form.Base = function FormaBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};
Form.Title = function FormaTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Form.Text = function FormaText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Form.TextSmall = function FormaError({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};
Form.Link = function FormaLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Form.Input = function FormaInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormaSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
