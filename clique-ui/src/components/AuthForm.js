import React from "react";
import { css } from "emotion";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../core/Button";
import InputWithLabel from "../core/InputWithLabel";

export default function AuthForm({ type = "LOGIN" }) {
  let initialValues = {
    email: "",
    password: ""
  };

  let validationSignupSchema = {};

  if (type === "SIGNUP") {
    initialValues = {
      email: "",
      password: "",
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
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
      }) => (
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
            {type === "SIGNUP" ? "Create Account" : "Log In"}
          </Button>
        </form>
      )}
    </Formik>
  );
}
