import { words, Word } from "../words";
import { useLocalStorageWithExpiry } from "./useLocalStorage";

interface UseWordsConfig {
  number: number;
}

const getRandomElement = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];

const generateWords = ({ number }: UseWordsConfig) => (): Word[] =>
  Array(number)
    .fill(1)
    .map(() => getRandomElement(words));

export const useWords = (config: UseWordsConfig): Word[] => {
  const [words] = useLocalStorageWithExpiry<Word[]>(
    "words",
    generateWords(config),
    { minutes: 30 }
  );

  return words;
};
