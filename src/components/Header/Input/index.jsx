import { useContext } from "react";
import { ContextEmoji } from "../../../contextEmoji/context.jsx";

export const Input = () => {
  const { input, setInput } = useContext(ContextEmoji);

  return (
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};
