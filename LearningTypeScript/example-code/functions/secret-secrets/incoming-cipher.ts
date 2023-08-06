export type Cipher = (char: string) => string;

export function createCipher(cipher: Cipher) {
  return (text: string) => {
    let result = "";

    for (const char of text) {
      result += cipher(char);
    }

    return result;
  };
}
