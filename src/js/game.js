import Character from "./domain";

const gameClass = class Game {
  start() {
    console.log("game started");
  }
};
export default gameClass;

export class GameSavingData {}

export function readGameSaving() {}

export function writeGameSaving() {}
