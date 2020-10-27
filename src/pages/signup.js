import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import Header from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInValid = password === "" || email === "" || firstName === "";

  const handleSignUp = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((error) => {
        setfirstName("");
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <Header>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="Enter your First Name"
              value={firstName}
              onChange={({ target }) => setfirstName(target.value)}
            />

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
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already Have Account?
            <Form.Link to="signin"> Sign In</Form.Link>
          </Form.Text>
        </Form>
      </Header>

      <FooterContainer />
    </>
  );
}
