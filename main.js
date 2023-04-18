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

const getRegEncrypt = () => new RegExp(`${Object.keys(words).join("|")}`, "g");
const desencrypt = (msg) => msg.replace(getRegEncrypt(), desencrypter);
const desencrypter = (...match) => words[match[0]];
const encrypter = (...match) => vowels[match[0]];
const encrypt = (text) => text.replace(/[aeiou]/g, encrypter);

const textArea = document.getElementById("textarea");
const output = document.getElementById("output");
const toggle = document.getElementById("toggle");
const btnClear = document.getElementById("clear");
let toggleLogic = true;
toggle.textContent = toggleLogic ? "Encriptando" : "Desencriptando";
const proxyInputTarget = (target, value) =>
  (document.getElementById(target).value = value);
const clearText = (target) => (document.getElementById(target).value = "");
textArea.addEventListener("input", (e) => {
  if (toggleLogic) return proxyInputTarget("output", encrypt(e.target.value));
  proxyInputTarget("output", desencrypt(e.target.value));
});
btnClear.addEventListener("click", () => {
  clearText("textarea");
  clearText("output");
});
toggle.addEventListener("click", () => {
  toggleLogic = !toggleLogic;
  const tempValue = output.value;
  output.value = textArea.value;
  textArea.value = tempValue;
});
