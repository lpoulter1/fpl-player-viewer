export default function playerReducer(state, [action, payload]) {
  switch (action) {
    case "LOADING_PLAYERS":
      return {
        ...state,
        error: null,
        loading: true
      };
    case "LOADED_PLAYERS":
      return {
        ...state,
        error: null,
        loading: false,
        players: payload,
        metaStats: setMetaStats(payload)
      };
    case "PLAYER_SELECTED":
      return {
        ...state,
        selectedPlayers: payload.map(option =>
          state.players.find(player => player.id === option.value)
        )
      };
  }
}

function setMetaStats(players) {
  const statKeys = ["total_points", "goals_scored", "assists", "minutes"];

  return {
    ...statKeys.reduce(
      (allStats, key) => ({
        ...allStats,
        [`highest_${key}`]: calculateHighestForKey(players, key)
      }),
      {}
    )
  };
}

function calculateHighestForKey(players, key) {
  return players.reduce((highest, player) => {
    return player[key] > highest ? player[key] : highest;
  }, 0);
}
