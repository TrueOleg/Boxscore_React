module.exports = {
  get: () => {
    return Promise.resolve({
      data: {
        away_period_scores: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        home_period_scores: [9, 8, 7, 6, 5, 4, 3, 2, 1],
        away_team: {
          abbreviation: "SEA"
        },
        home_team: {
          abbreviation: "LAA"
        }
      }
    })
  }
};