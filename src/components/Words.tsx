import React, { FC } from "react";
import styled from "@emotion/styled";
import { Box, Button } from "rebass";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { useWords } from "../hooks/useWords";

const WordsContainer = styled(Box)`
  align-self: center;
  margin: 0 auto;
  text-align: center;
`;

const WordContainer = styled(Box)`
  text-align: center;
  margin: 1rem 0;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
`;

const ClickableWordContainer = styled(WordContainer)`
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const Content = styled(Box)`
  margin: 0.5rem auto;
`;

const Word = styled(Content)`
  word-break: break-word;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Definition = styled(Content)`
  word-break: break-word;
`;

const ResetButton = styled(Button)`
  cursor: pointer;
  color: black;
  background-color: #c4c4ff;
  border-radius: 0.5rem;
`;

interface CurrentWord {
  word: string;
  definition: string;
}

export const Words: FC = () => {
  const [currentWord, setCurrentWord] = useLocalStorage<
    CurrentWord | undefined
  >("word", undefined);
  const words = useWords({ number: 3 });

  return (
    <WordsContainer>
      {currentWord ? (
        <>
          <WordContainer>
            <Word>{currentWord.word}</Word>
            <Definition>{currentWord.definition}</Definition>
          </WordContainer>
          <ResetButton onClick={() => setCurrentWord(undefined)}>
            Reset
          </ResetButton>
        </>
      ) : (
        words.map(({ word, definition }) => (
          <ClickableWordContainer
            key={word}
            onClick={() => setCurrentWord({ word, definition })}
          >
            <Word>{word}</Word>
            <Definition>{definition}</Definition>
          </ClickableWordContainer>
        ))
      )}
    </WordsContainer>
  );
};
