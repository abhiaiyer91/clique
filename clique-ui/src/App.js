import React, { Fragment } from "react";
import { ApolloProvider } from "react-apollo";
import Router from "react-router-dom/BrowserRouter";
import Route from "react-router-dom/Route";
import { css } from "emotion";
import useAuthToken from "./hooks/useAuthToken";
import createClient from "./client";

import MaxWidth from "./core/MaxWidth";
import { FlexColumn } from "./core/Flex";
import SiteNavbar from "./components/Navbar";
import Home from "./features/home";
import Event from "./features/event";
import { Login, Signup } from "./features/authentication";

export default function App() {
  const [value] = useAuthToken();
  return (
    <ApolloProvider client={createClient(value)}>
      <SiteNavbar />

      <section className={css({ padding: "84px 0" })}>
        <FlexColumn justify="center" height="100%">
          <MaxWidth maxWidth="1024" margin="0 auto">
            <Router>
              <Fragment>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/new/event" component={Event} />
              </Fragment>
            </Router>
          </MaxWidth>
        </FlexColumn>
      </section>
    </ApolloProvider>
  );
}
