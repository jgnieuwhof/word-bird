import { parse } from "papaparse";

import theHerald from "./the_herald_advanced.csv";

const sources = [theHerald];

export interface Word {
  word: string;
  definition: string;
}

export const words: Word[] = sources
  .flatMap((x) =>
    parse<Word>(x, {
      header: true,
      skipEmptyLines: true,
      trimHeaders: true,
    }).data.slice(1)
  )
  .map(({ word, definition }) => ({
    word: word.trim(),
    definition: definition.trim(),
  }));
