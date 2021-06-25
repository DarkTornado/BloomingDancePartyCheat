const TARGET_ELEMENT_ID = "key_input";
const SPECIAL_KEYS = {
  ENTER: "Enter",
  SPACE: "Space",
};
const ARROW_KEYS = ["ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown"];
const ARROW_STRING = {
  ArrowUp: "↑",
  ArrowLeft: "←",
  ArrowRight: "→",
  ArrowDown: "↓",
};

const element = document.getElementById(TARGET_ELEMENT_ID);

const isEnter = (code) => code === SPECIAL_KEYS.ENTER;
const isSpace = (code) => code === SPECIAL_KEYS.SPACE;
const isArrow = (code) => ARROW_KEYS.includes(code);

const handleEnterDown = () => (element.innerText = "");
const handleArrowDown = (code) =>
  (element.innerText += " " + ARROW_STRING[code]);
const handleSpaceDown = (() => {
  let doubleClick = false;
  return () => {
    if (doubleClick) {
      doubleClick = false;
      element.innerText = "";
      return;
    }

    const text = element.innerText;
    const arrows = text.trim().split("");

    doubleClick = true;
    element.innerText = arrows.slice(0, arrows.length - 1).join(" ") + " ";

    setTimeout(() => (doubleClick = false), 200);
  };
})();

document.addEventListener("keydown", ({ code }) => {
  if (isArrow(code)) {
    return handleArrowDown(code);
  }
  if (isEnter(code)) {
    return handleEnterDown();
  }
  if (isSpace(code)) {
    return handleSpaceDown();
  }
});
