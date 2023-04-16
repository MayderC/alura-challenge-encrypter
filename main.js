const vowels = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const words = Object.entries(vowels).reduce(
  (ac, acc) => ({ ...ac, [acc[1]]: acc[0] }),
  {}
);

const getRegEncryptedWords = () => {
  const regx = new RegExp(
    `${Object.keys(words)
      .map((x) => `(${x})`)
      .join("|")}`,
    "g"
  );
  return regx;
};

const desencrypter = (...match) => words[match[0]];
const encrypter = (...match) => vowels[match[0]];
const desencrypt = (msg) => msg.replace(getRegEncryptedWords(), desencrypter);
const encrypt = (text) => text.replace(/[aeiou]/g, encrypter);
