import React, { useEffect, useReducer } from "react";
import PlayerRadar from "./PlayerRadar";
import PlayerSelect from "./PlayerSelect";
import playerReducer from "./playerReducer";
import doFetch from "../doFetch";

import './PlayerCompare.css';

export default function PlayerCompare() {
  const [state, dispatch] = useReducer(playerReducer, {
    players: [],
    selectedPlayers: [],
    metaStats: {}
  });

  const { players, isLoading, metaStats, selectedPlayers } = state;

  useEffect(() => {
    const fetchData = async () => {
      dispatch(["LOADING_PLAYERS"]);

      const playerData = await doFetch(
        "https://us-central1-fpl-player-api.cloudfunctions.net/bootstrapStatic"
      );

      dispatch(["LOADED_PLAYERS", playerData.elements]);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>LOADING</div>;
  }

  return (
    <div>
      <section className="player-select">
        <PlayerSelect
          players={players}
          selectedPlayers={selectedPlayers}
          onChange={selectedOptions =>
            dispatch(["PLAYER_SELECTED", selectedOptions])
          }
        />
      </section>
      {selectedPlayers.length > 0 && (
        <section className="player-radar">
          <PlayerRadar
            metaStats={metaStats}
            selectedPlayers={selectedPlayers}
          />
        </section>
      )}
    </div>
  );
}

