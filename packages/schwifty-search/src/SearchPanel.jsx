import React, { useState } from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import "./SearchPanel.scss";
import { useCharacters } from "./store";

export default function SearchPanel() {
  const { fetchCharacters } = useCharacters();
  const [character, setCharacter] = useState();
  const [status, setStatus] = useState();
  const [gender, setGender] = useState();

  return (
    <div className="SearchPanel">
      <h1>Howdy from react!⚛️💙</h1>
      <span>Name</span>
      <input
        value={character}
        placeholder="Character's name"
        onChange={(e) => setCharacter(e.target.value)}
      />

      <span>Status</span>
      <input
        value={status}
        placeholder="Alive, dead, unknown"
        onChange={(e) => setStatus(e.target.value)}
      />

      <span>Gender</span>
      <input
        value={gender}
        placeholder="Male, Female, Genderless"
        onChange={(e) => setGender(e.target.value)}
      />

      <button onClick={() => fetchCharacters(character, status, gender)}>
        Search!
      </button>
    </div>
  );
}

const gridLifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: SearchPanel,
});

export const bootstrap = gridLifeCycles.bootstrap;
export const mount = gridLifeCycles.mount;
export const unmount = gridLifeCycles.unmount;
