import { words, Word } from "../words";

interface UseWordsConfig {
  number: number;
}

const getRandomElement = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];

export const useWords = ({ number }: UseWordsConfig): Word[] =>
  Array(number)
    .fill(1)
    .map(() => getRandomElement(words));
