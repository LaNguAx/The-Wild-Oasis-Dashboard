import { useCallback, useState } from "react";

const defaultAlert = "Set a default alert!";

export function useAlert() {
  const [text, setText] = useState("");

  // const triggerAlert = useCallback(() => {
  //   if (!text) return;
  //   alert(text);
  // }, [text]);

  // const setAlert = useCallback((t) => setText(t), []);

  function triggerAlert() {
    if (!text) return;
    alert(text);
  }

  function setAlert(t) {
    setText(t);
  }

  return [setAlert, triggerAlert, setText];
}
