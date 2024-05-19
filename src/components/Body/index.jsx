import { useContext } from "react";
import { ContextEmoji } from "../../contextEmoji/context";

export const Body = () => {
  const { allEmojis } = useContext(ContextEmoji);

  return (
    <div className="content__emoji">
      {allEmojis.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        allEmojis.map((emoji, index) => (
          <span key={index}>{emoji.character} {emoji.unicodeName}</span>
        ))
      )}
      {}
    </div>
  );
};
