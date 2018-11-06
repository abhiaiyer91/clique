import React, { useEffect } from "react";
import { graphql, compose } from "react-apollo";
import { css } from "emotion";
import { Formik } from "formik";
import gql from "graphql-tag";
import queries from "@cliquelabs/types/lib/queries";
import * as Yup from "yup";
import Button from "../core/Button";
import Divider from "../core/Divider";
import InputWithLabel from "../core/InputWithLabel";

function InviteForm() {
  let initialValues = {};

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Email is required"),
    name: Yup.string().required("Name is required")
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {}}
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

        return (
          <form onSubmit={handleSubmit}>
            <InputWithLabel
              type="text"
              name="name"
              label="Name"
              placeholder="Enter your friend's name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              errorMessage={errors.name && touched.name && errors.name}
            />
            <InputWithLabel
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your friend's email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              errorMessage={errors.email && touched.email && errors.email}
            />

            <section className={css({ textAlign: "right" })}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className={css({
                  marginTop: 16,
                  padding: "16px 45px",
                  height: "auto"
                })}
              >
                Send
              </Button>
            </section>
          </form>
        );
      }}
    </Formik>
  );
}

export default function InviteFriendsPanel() {
  return (
    <section className={css({ maxWidth: 480, margin: "0 auto" })}>
      <h2 className={css({ margin: "16px 0" })}>Invite a friend</h2>
      <Divider type="thin" />

      <InviteForm />
    </section>
  );
}
