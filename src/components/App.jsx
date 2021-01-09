import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function emojiCard(emojiType) {
  return (
    <Card
      key={emojiType.id}
      emoji={emojiType.emoji}
      name={emojiType.name}
      meaning={emojiType.meaning}
    />
  );
}

function App() {
  console.log("emojipedia", emojipedia);
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(emojiCard)}</dl>
    </div>
  );
}

export default App;
