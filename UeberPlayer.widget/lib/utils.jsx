import * as Uebersicht from "uebersicht";

const WIDTH = 20;
const DURATION = 320;

export const clickEffect = (e) => {
  const { body } = document;
  const { clientX, clientY } = e;
  const cursor = Object.assign(document.createElement("div"), {
    id: "simple-bar-click-effect",
  });
  Object.assign(cursor.style, {
    top: `${clientY - WIDTH / 2}px`,
    left: `${clientX - WIDTH / 2}px`,
    width: `${WIDTH}px`,
    height: `${WIDTH}px`,
    transition: `transform ${DURATION} ease`,
  });
  if (cursor && "animate" in cursor) {
    body.appendChild(cursor);
    cursor.animate(
      [
        { opacity: 0, transform: "scale(0)" },
        { opacity: 1, transform: "scale(2)" },
        { opacity: 0, transform: "scale(1.6)" },
      ],
      { duration: DURATION }
    );
  }
  setTimeout(() => cursor && body.removeChild(cursor), DURATION);
};

