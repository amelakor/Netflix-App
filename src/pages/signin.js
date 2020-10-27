import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import Header from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  const isInValid = password === "" || email === "";

  ///check validity
  return (
    <>
      <Header>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSubmit} method="POST">
            <Form.Input
              placeholder="Enter your Email Address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />

            <Form.Input
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              type="password"
            />
            <Form.Submit disabled={isInValid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New To Netflix?
            <Form.Link to="/signup"> Sign Up</Form.Link>
          </Form.Text>
        </Form>
      </Header>

      <FooterContainer />
    </>
  );
}
