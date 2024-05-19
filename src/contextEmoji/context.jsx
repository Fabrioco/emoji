import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextEmoji = createContext({});

export default function Context({ children }) {
  const [input, setInput] = useState("");
  const [allEmojis, setAllEmojis] = useState([]);

  const loadEmoji = () => {
    axios
      .get(
        `https://emoji-api.com/emojis?search=${input}&access_key=84251172babcfd497a224632e4f27db2dad0aa24`
      )
      .then((response) => {
        const emojis = response.data;
        setAllEmojis(emojis);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadEmoji();
  }, []);

  const searchEmoji = () => {
    axios
      .get(
        `https://emoji-api.com/emojis?search=${input}&access_key=84251172babcfd497a224632e4f27db2dad0aa24`
      )
      .then((response) => {
        if (input.trim() !== "") {
          const emojis = response.data;
          if (response.data.status != "error") {
            setAllEmojis(emojis);
          } else {
            setInput('emoji não encontrado')
          }
        } else {
          alert("O valor não pode ser vazio");
        }
      })
      .catch((error) => {
        alert("teste");
      });
  };

  return (
    <ContextEmoji.Provider value={{ input, setInput, allEmojis, searchEmoji }}>
      {children}
    </ContextEmoji.Provider>
  );
}
