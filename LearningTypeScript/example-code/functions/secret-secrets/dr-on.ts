export type Cipher = (char: string) => string;

export function createAdvancedCipher(
  onVowel: Cipher,
  onConsonant: Cipher,
  onPunctuation: Cipher
) {
  return (text: string) => {
    let result = "";

    for (const char of text) {
      if (/[aeiou]/i.test(char)) {
        result += onVowel(char);
      } else if (/[bcdfghjklmnpqrstvwxyz]/i.test(char)) {
        result += onConsonant(char);
      } else {
        result += onPunctuation(char);
      }
    }

    // for (const character of text) {
    // 	const cipher = /[aeiou]/i.test(character)
    // 		? onVowel
    // 		: /[bcdfghjklmnpqrstvwxyz]/i.test(character)
    // 		? onConsonant
    // 		: onPunctuation;

    // 	result += cipher(character);
    // }

    return result;
  };
}
