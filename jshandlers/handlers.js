import { dyLimit } from "./elementList.js";

const setUserTheme = () => {
  const themeDark = !!window.localStorage.getItem("theme");
  if (themeDark) document.documentElement.classList.add("dark");
};

setUserTheme();

const switchTheme = () => {
  const themeDark = !!window.localStorage.getItem("theme");

  const circle = document.createElement("div");
  circle.classList.add("theme-transition");
  document.body.appendChild(circle);

  anime({
    targets: circle,
    scale: [0, 30],
    opacity: [1, ".7"],
    easing: "easeOutQuad",
    duration: 250,
    complete: () => {
      document.documentElement.classList.toggle("dark");
      document.body.removeChild(circle);
    },
  });

  if (themeDark) window.localStorage.removeItem("theme");
  else window.localStorage.setItem("theme", "dark");
};

const setTotalCharacters = (text, el, options, pattern) => {
  if (!options.space) {
    el.textContent = text?.length || "00";
    return;
  }
  el.textContent = text?.match(pattern)?.length || "00";
};

const setCountsOfWord = (text, el, pattern) => {
  el.textContent = text.match(pattern)?.length || "00";
  return;
};

const setCountsOfSentence = (text, el, pattern) => {
  el.textContent = text.match(pattern)?.length || "00";
  return;
};

export const setAreaError = (num, areaEl, limitFlag) => {
  const isError = areaEl.classList.contains("isError");

  if (num <= areaEl.value.length && !isError) areaEl.classList.add("isError");
  if (num > areaEl.value.length && isError) areaEl.classList.remove("isError");
  if (limitFlag) areaEl.classList.remove("isError");
};

const controlSpaceLimit = (str, textarea, limit, options) => {
  if (
    options.limit &&
    str !== null &&
    options.space &&
    textarea.getAttribute("maxlength")
  ) {
    textarea.setAttribute("maxlength", +limit + str.match(/\s/g)?.length || +limit);
  }

  if (options.limit && textarea.getAttribute("maxlength"))
    setAreaError(+textarea.getAttribute("maxlength"), textarea);
};

const setCharacterLimit = (e, areaEl) => {
  const num = e.target.value;

  if (num > 0) {
    areaEl.setAttribute("maxlength", num);
    dyLimit.textContent = num;
  }
  if (!num && areaEl.getAttribute("maxlength")) {
    areaEl.removeAttribute("maxlength");
    setAreaError(num, areaEl, true);
  } else {
    setAreaError(num, areaEl);
  }
};

const setReadingTime = (numCharacters, outerEl) => {
  if (!!numCharacters) {
    const readingTime = numCharacters / 800;
    const showedTime = Math.round(readingTime) || 1;
    const floatValue = +readingTime.toFixed(1).at(-1);
    const indexSymbol = floatValue >= 5 ? ">" : readingTime === 1 ? " " : "<";
    const lastLetter = showedTime > 1 ? "minutes" : "minute";

    outerEl.textContent = `${indexSymbol}${showedTime} ${lastLetter}`;
    return;
  }
  outerEl.textContent = "0 minute";
};

const changeButtonData = (e) => {
  const el = e.target;

  if (el.dataset.show === "false") {
    el.dataset.show = "true";
    el.textContent = "See less";
    return;
  }

  el.dataset.show = "false";
  el.textContent = "See more";
  return;
};

export {
  setUserTheme,
  switchTheme,
  setTotalCharacters,
  setCountsOfWord,
  setCountsOfSentence,
  controlSpaceLimit,
  setCharacterLimit,
  changeButtonData,
  setReadingTime,
};
