export function playersToRadarData(
  players,
  {
    highest_total_points,
    highest_minutes,
    highest_assists,
    highest_goals_scored
  }
) {
  const skills = [
    {
      label: "Goals",
      metaValue: highest_goals_scored,
      playerKey: "goals_scored"
    },
    {
      label: "Minutes",
      metaValue: highest_minutes,
      playerKey: "minutes"
    },
    {
      label: "Assists",
      metaValue: highest_assists,
      playerKey: "assists"
    },
    {
      label: "Points",
      metaValue: highest_total_points,
      playerKey: "total_points"
    }
  ];

  return skills.map(({ label, metaValue, playerKey }) => {
    return {
      label,
      ...players.reduce(
        (players, player) => ({
          ...players,
          [`${player.web_name}`]: getPercentage(player[playerKey], metaValue)
        }),
        {}
      )
    };
  });
}

export function extractRadarSkillKeys(radarData, indexBy) {
  return Object.keys(radarData[0]).filter(key => key !== indexBy);
}

function getPercentage(part, whole) {
  return Math.round((part / whole) * 100);
}
