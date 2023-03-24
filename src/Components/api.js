// API keys  = 32c41aa3a02b4e72bb7957660c131703

// Api Keys
const api_key = "32c41aa3a02b4e72bb7957660c131703";

// Base URL
const base_url = "https://api.rawg.io/api/";

// Getting Current Dates
const getMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) return `0${month}`;
  else return month;
};
const getDay = () => {
  const day = new Date().getDate();
  if (day < 10) return `0${day}`;
  else return day;
};
const currentYear = new Date().getFullYear();
const currentMonth = getMonth();
const currentDay = getDay();

// Current Date
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

// Last Year
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;

// Next Year
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// Upcoming Games
const upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

// New Games
const new_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

// Game Details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${api_key}`;


  // Game ScreenShots 
  export const GameScreenshotsURL = (game_id) =>
    `${base_url}games/${game_id}/screenshots?key=${api_key}`;
