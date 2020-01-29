import React, { FC } from "react";
import { Layout } from "./components/Layout";
import { useWords } from "./hooks/useWords";

export const App: FC = () => {
  const words = useWords({ number: 3 });

  return (
    <Layout>
      <pre>{JSON.stringify(words, null, 2)}</pre>
    </Layout>
  );
};
