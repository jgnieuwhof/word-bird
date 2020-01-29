import React, { FC } from "react";
import styled from "@emotion/styled";
import { Box } from "rebass";

import { useWords } from "../hooks/useWords";

const WordsContainer = styled(Box)`
  align-self: center;
  margin: 0 auto;
`;

const WordContainer = styled(Box)`
  text-align: center;
  margin: 1rem 0;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid black;
`;

const Word = styled(Box)`
  word-break: break-word;
  font-weight: bold;
  font-size: 1.2rem;
`;

const Definition = styled(Box)`
  word-break: break-word;
`;

export const Words: FC = () => {
  const words = useWords({ number: 3 });

  return (
    <WordsContainer>
      {words.map(({ word, definition }) => (
        <WordContainer key={word}>
          <Word>{word}</Word>
          <Definition>{definition}</Definition>
        </WordContainer>
      ))}
    </WordsContainer>
  );
};
