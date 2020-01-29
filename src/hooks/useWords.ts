import { add, isAfter, parseISO } from "date-fns";
import { words, Word } from "../words";
import { useLocalStorage } from "./useLocalStorage";

interface UseWordsConfig {
  number: number;
  expiryMinutes?: number;
}

interface WordsWithExpiry {
  words: Word[];
  expires: string;
}

const getRandomElement = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];

const generateWords = ({ number }: UseWordsConfig): Word[] =>
  Array(number)
    .fill(1)
    .map(() => getRandomElement(words));

const generateWordsWithExpiry = ({
  number,
  expiryMinutes = 10
}: UseWordsConfig): WordsWithExpiry => ({
  words: generateWords({ number }),
  expires: add(Date.now(), { minutes: expiryMinutes }).toISOString()
});

export const useWords = (config: UseWordsConfig): Word[] => {
  const [{ expires, words }, setWords] = useLocalStorage<WordsWithExpiry>(
    "words",
    generateWordsWithExpiry(config)
  );

  if (isAfter(Date.now(), parseISO(expires))) {
    setWords(generateWordsWithExpiry(config));
  }

  return words;
};
