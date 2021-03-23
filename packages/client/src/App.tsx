import React, { FC } from "react";
import { Layout } from "./components/Layout";
import { Words } from "./components/Words";

export const App: FC = () => (
  <Layout>
    <Words />
  </Layout>
);
