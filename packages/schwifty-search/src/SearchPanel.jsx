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
      <div className="SearchPanel__Input">
        <p>Name</p>
        <input
          value={character}
          placeholder="Character's name"
          onChange={(e) => setCharacter(e.target.value)}
        />
      </div>

      <div className="SearchPanel__Input">
        <p>Status</p>
        <input
          value={status}
          placeholder="Alive, dead, unknown"
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>

      <div className="SearchPanel__Input">
        <p>Gender</p>
        <input
          value={gender}
          placeholder="Male, Female, Genderless"
          onChange={(e) => setGender(e.target.value)}
        />
      </div>

      <button
      className='SearchPanel__Search'
      onClick={() => fetchCharacters(character, status, gender)}>
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
