import { useContext } from "react";
import { ContextEmoji } from "../../../contextEmoji/context";

export const Button = () => {
  const { searchEmoji } = useContext(ContextEmoji);

  const handleSearchEmoji = () => {
    searchEmoji();
  };

  return <button onClick={handleSearchEmoji}>Pesquisar</button>;
};
