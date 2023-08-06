declare global {
  interface String {
    alternating: () => [string, string];
  }

  interface Array<T> {
    unsmoosh: () => string[];
    smoosh: () => string;
  }
}

export function logMessage(): string {
  const encodedMessage =
    "wjheiwcehljearv'assfcarvioprtiptrei?msitt-irvienigssa!";

  const alternating = encodedMessage.alternating();
  const [question, answer] = alternating.unsmoosh();

  console.log(question);
  console.log(` - ${answer}`);

  return [question, answer].smoosh();
}
