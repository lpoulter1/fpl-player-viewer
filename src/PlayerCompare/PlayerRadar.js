import React from "react";
import { ResponsiveRadar } from "@nivo/radar";
import { playersToRadarData, extractRadarSkillKeys } from "./radarDataHelpers";

export default function PlayerRadar({ metaStats, selectedPlayers }) {
  const {
    highest_total_points,
    highest_minutes,
    highest_assists,
    highest_goals_scored
  } = metaStats;

  const radarData = playersToRadarData(selectedPlayers, {
    highest_total_points,
    highest_minutes,
    highest_assists,
    highest_goals_scored
  });

  const indexBy = "label";

  const keys = extractRadarSkillKeys(radarData, indexBy);

  return (
    <ResponsiveRadar
      data={radarData}
      keys={keys}
      indexBy={indexBy}
      curve="catmullRomClosed"
      dotSize={20}
      dotLabelYOffset={3}
      gridLabelOffset={36}
      maxValue={100}
      enableDotLabel={true}
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000"
              }
            }
          ]
        }
      ]}
    />
  );
}
