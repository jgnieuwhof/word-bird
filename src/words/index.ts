import { parse } from "papaparse";

import theHerald from "./the_herald.csv";

const sources = [theHerald];

export interface Word {
  word: string;
  definition: string;
}

export const words: Word[] = sources
  .map(x => parse(x, { header: true, skipEmptyLines: true, trimHeaders: true })) // parse the csv
  .map(x => x.data) // get the data
  .flatMap(x => x.slice(1)) // remove the header row
  .map(x => ({ word: x.word.trim(), definition: x.definition.trim() })); // trim that bud
