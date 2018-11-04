import React from "react";
import withRouter from "react-router-dom/withRouter";
import { css } from "emotion";
import Friends from "../../icons/Friends";
import Link from "../../core/Link";
import Button from "../../core/Button";
import Paragraph from "../../core/Paragraph";
import MaxWidth from "../../core/MaxWidth";
import Card from "../../core/Card";
import CardBody from "../../core/CardBody";
import { Flex, FlexItem } from "../../core/Flex";
import InputWithLabel from "../../core/InputWithLabel";
import AuthForm from "../../components/AuthForm";

function Auth({ children, type = "LOGIN" }) {
  return (
    <MaxWidth maxWidth="620" className={css({ width: "100%" })}>
      <Flex>
        <h1
          className={css({
            fontSize: 24,
            lineHeight: "32px",
            margin: "0 0 16px"
          })}
        >
          {type === "LOGIN" ? "Login in to " : "Sign up for "}
          <span className={css({ color: "#405dcf", fontSize: 32 })}>
            clique.
          </span>
        </h1>
      </Flex>

      <Flex>
        <FlexItem>{children}</FlexItem>

        <FlexItem className={css({ paddingLeft: 24 })}>
          <Card>
            <CardBody>
              <Friends />
              <article
                className={css({
                  maxWidth: 280,
                  margin: "24px auto 0"
                })}
              >
                <Paragraph
                  className={css({
                    color: "rgba(0, 0, 0, 0.56)",
                    textAlign: "center"
                  })}
                >
                  Clique helps you plan events with your friends.
                  {type === "LOGIN" ? "Login" : "Sign up"}, create an event, and
                  start planning get togethers easily.
                </Paragraph>
              </article>
            </CardBody>
          </Card>
        </FlexItem>
      </Flex>
    </MaxWidth>
  );
}

export const Login = withRouter(function Login({ history }) {
  return (
    <Auth>
      <AuthForm type="LOGIN" />
      <Paragraph
        className={css({
          margin: "16px 0"
        })}
      >
        <Link href="/accounts/reset-password">Having trouble logging in?</Link>
      </Paragraph>
      <Button
        onClick={() => {
          return history.push("/signup");
        }}
        color="secondary"
        className={css({ width: "100%" })}
      >
        Need to create a new account?
      </Button>
    </Auth>
  );
});

export const Signup = withRouter(function Signup({ history }) {
  return (
    <Auth type="SIGNUP">
      <AuthForm type="SIGNUP" />
      <Paragraph
        className={css({
          margin: "16px 0"
        })}
      >
        By continuing using any of the actions above you acknowledge that you
        have read and agreed to clique's Terms of Service and Privacy Policy.
      </Paragraph>
      <Button
        onClick={() => {
          return history.push("/login");
        }}
        color="secondary"
        className={css({ width: "100%" })}
      >
        Already have an account?
      </Button>
    </Auth>
  );
});
