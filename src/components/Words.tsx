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
  margin-top: 1rem;
`;

const Word = styled(Box)`
  font-weight: bold;
`;

export const Words: FC = () => {
  const words = useWords({ number: 3 });

  return (
    <WordsContainer>
      {words.map(({ word, definition }) => (
        <WordContainer key={word}>
          <Word>{word}</Word>
          <Box>{definition}</Box>
        </WordContainer>
      ))}
    </WordsContainer>
  );
};
