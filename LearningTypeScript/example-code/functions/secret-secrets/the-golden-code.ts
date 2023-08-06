export type CodeCracker = {
  attempts: number;
  makeGuess: (text: string, attempt: number) => string;
  validateGuess: (guess: string) => boolean;
};

export function createCodeCracker(codeCracker: CodeCracker) {
  return (text: string) => {
    for (let i = 0; i < codeCracker.attempts; i++) {
      const guess = codeCracker.makeGuess(text, i);

      if (codeCracker.validateGuess(guess)) {
        return guess;
      }
    }

    return undefined;
  };
}
