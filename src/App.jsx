import React from "react";
import emojipedia from "./emojipedia";
import Heading from "./components/Heading";
import Card from "./components/Card";

function createCard(content) {
  return (
    <Card
      key={content.id}
      emoji={content.emoji}
      name={content.name}
      meaning={content.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Heading></Heading>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
