export type AlignmentOptions = {
  align?: "left" | "middle" | "right";
  width: number;
};

export function alignTexts(texts: string[], options: AlignmentOptions) {
  const result: string[][] = [];

  for (const text of texts) {
    const lines = splitLines(text, options.width);
    const aligned = alignLines(lines, options);

    result.push(aligned);
  }

  return result;
}

function splitLines(text: string, width: number) {
  const lines: string[] = [];
  let line = "";

  for (const word of text.split(" ")) {
    if (line === "") {
      line += word;
    } else if (line.length + word.length < width) {
      line += ` ${word}`;
    } else {
      lines.push(line);
      line = word;
    }
  }

  lines.push(line);

  return lines;
}

function alignLines(
  lines: string[],
  { align = "left", width }: AlignmentOptions
) {
  const aligned: string[] = [];

  for (let line of lines) {
    const remainingSpaces = width - line.length;

    if (remainingSpaces) {
      switch (align) {
        case "left":
          line = line.padEnd(width, " ");
          break;
        case "middle":
          line =
            " ".repeat(Math.floor(remainingSpaces / 2)) +
            line +
            " ".repeat(Math.ceil(remainingSpaces / 2));
          break;
        case "right":
          line = line.padStart(width, " ");
          break;
      }
    }

    aligned.push(line);
  }

  return aligned;
}
