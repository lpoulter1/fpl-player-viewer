import { playersToRadarData } from "./radarDataHelpers";

const selectedPlayers = [
  {
    minutes: 3030,
    web_name: "Moutinho",
    total_points: 25,
    goals_scored: 0,
    assists: 7
  },
  {
    minutes: 2501,
    web_name: "Salah",
    total_points: 250,
    goals_scored: 23,
    assists: 5
  }
];

const metaStats = {
  highest_total_points: 250,
  highest_minutes: 3030,
  highest_assists: 21,
  highest_goals_scored: 23
};

describe("playersToRadarData", () => {
  describe("When one player is selected", () => {
    let selectedPlayer;

    beforeEach(() => {
      selectedPlayer = selectedPlayers.slice(0, 1);
    });

    test("returns an array of 4 skill objects", () => {
      expect(playersToRadarData(selectedPlayer, metaStats).length).toBe(4);
    });

    test("each skill object has the selected player as a key", () => {
      const radarData = playersToRadarData(selectedPlayer, metaStats);

      const hasPlayerKey = (skill, playerName) =>
        Object.keys(skill).some(key => key === playerName);

      const everySkillHasPlayerKey = radarData.every(skill => {
        return hasPlayerKey(skill, selectedPlayer[0].web_name);
      });

      expect(everySkillHasPlayerKey).toBe(true);
    });

    test("calculates the players 'Goal' skill as a % of the meta value ", () => {
      const radarData = playersToRadarData(selectedPlayer, metaStats);

      const expectedGoals = { Moutinho: 0, label: "Goals" };
      const goalsData = radarData.find(skill => skill.label === "Goals");

      expect(goalsData).toStrictEqual(expectedGoals);
    });

    test("calculates the players 'Minutes' skill as a % of the meta value ", () => {
      const radarData = playersToRadarData(selectedPlayer, metaStats);

      const expectedGoals = { Moutinho: 100, label: "Minutes" };
      const goalsData = radarData.find(skill => skill.label === "Minutes");

      expect(goalsData).toStrictEqual(expectedGoals);
    });

    test("calculates the players 'Assists' skill as a % of the meta value ", () => {
      const radarData = playersToRadarData(selectedPlayer, metaStats);

      const expectedGoals = { Moutinho: 33, label: "Assists" };
      const goalsData = radarData.find(skill => skill.label === "Assists");

      expect(goalsData).toStrictEqual(expectedGoals);
    });

    test("calculates the players 'Points' skill as a % of the meta value ", () => {
      const radarData = playersToRadarData(selectedPlayer, metaStats);

      const expectedGoals = { Moutinho: 10, label: "Points" };
      const goalsData = radarData.find(skill => skill.label === "Points");

      expect(goalsData).toStrictEqual(expectedGoals);
    });

    describe("When two players are selected", () => {
      beforeEach(() => {
        selectedPlayer = selectedPlayers.slice(0, 2);
      });

      test("each skill object has both selected players as a key", () => {
        const radarData = playersToRadarData(selectedPlayer, metaStats);

        const hasPlayerKey = (skill, playerName) =>
          Object.keys(skill).some(key => key === playerName);

        const everySkillHasPlayerKey = radarData.every(skill => {
          return (
            hasPlayerKey(skill, selectedPlayer[0].web_name) &&
            hasPlayerKey(skill, selectedPlayer[1].web_name)
          );
        });

        expect(everySkillHasPlayerKey).toBe(true);
      });
    });
  });
});
