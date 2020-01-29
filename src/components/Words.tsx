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
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid black;
`;

const ClickableWordContainer = styled(WordContainer)`
  cursor: pointer;
`;

const Word = styled(Box)`
  word-break: break-word;
  font-weight: bold;
  font-size: 1.2rem;
`;

const Definition = styled(Box)`
  word-break: break-word;
`;

const ResetButton = styled(Button)`
  cursor: pointer;
  color: black;
  border: 2px solid black;
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
