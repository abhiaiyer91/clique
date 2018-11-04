import React, { useEffect } from "react";
import withRouter from "react-router-dom/withRouter";
import { graphql, compose } from "react-apollo";
import { css } from "emotion";
import { Formik } from "formik";
import gql from "graphql-tag";
import useAuthToken from "../hooks/useAuthToken";

import queries from "@cliquelabs/types/lib/queries";
import * as Yup from "yup";
import Button from "../core/Button";
import InputWithLabel from "../core/InputWithLabel";

const { login, signup } = queries;

function AuthForm({ type = "LOGIN", login, signup, history }) {
  const [value, setItem] = useAuthToken();

  useEffect(
    () => {
      if (!!value) {
        history.replace("/home");
      }
    },
    []
  );

  let initialValues = {
    email: "abhi@lol.com",
    password: "abhiabhi"
  };

  let validationSignupSchema = {};

  if (type === "SIGNUP") {
    initialValues = {
      ...initialValues,
      name: ""
    };

    validationSignupSchema = {
      name: Yup.string().required("Name is required")
    };
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    ...validationSignupSchema
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        if (type === "LOGIN") {
          return login({ variables: values })
            .then(result => {
              const token = result.data.login.token;

              setItem(token);
              setSubmitting(false);
              return window.location.assign("/home");
            })
            .catch(e => {
              console.error(e);
              setSubmitting(false);
            });
        } else {
          return signup({ variables: values })
            .then(result => {
              const token = result.data.signup.token;

              setItem(token);
              setSubmitting(false);
              return window.location.assign("/home");
            })
            .catch(e => {
              console.error(e);
              setSubmitting(false);
            });
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => {
        let submitlabel;

        if (isSubmitting) {
          submitlabel = "Loading...";
        } else if (type === "SIGNUP") {
          submitlabel = "Create Account";
        } else {
          submitlabel = "Log In";
        }

        return (
          <form onSubmit={handleSubmit}>
            {type === "SIGNUP" && (
              <InputWithLabel
                name="name"
                type="text"
                label="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                errorMessage={errors.name && touched.name && errors.name}
              />
            )}

            <InputWithLabel
              type="text"
              name="email"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              errorMessage={errors.email && touched.email && errors.email}
            />
            <InputWithLabel
              type="password"
              name="password"
              label="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              errorMessage={
                errors.password && touched.password && errors.password
              }
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className={css({ width: "100%", marginTop: 16 })}
            >
              {submitlabel}
            </Button>
          </form>
        );
      }}
    </Formik>
  );
}

export default compose(
  withRouter,
  graphql(gql(login), {
    name: "login"
  }),
  graphql(gql(signup), {
    name: "signup"
  })
)(AuthForm);
