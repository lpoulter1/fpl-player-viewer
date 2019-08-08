import React from "react";
import Select from "react-select";

export default function PlayerSelect({ players, onChange, selectedPlayers }) {
  function playerToOption({ id, web_name }) {
    return {
      value: id,
      label: web_name
    };
  }

  const options = players.map(playerToOption);
  const value = selectedPlayers.map(playerToOption);

  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      placeholder="Select Player"
      isMulti
    />
  );
}
