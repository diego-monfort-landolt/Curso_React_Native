export async function getLatestGames() {
  const LATEST_GAMES = "https://www.freetogame.com/api/games";
  const rawData = await fetch(LATEST_GAMES);
  const items = await rawData.json();

  return items.map((item) => {
    const { title, release_date, thumbnail, short_description, game_url } = item;

    return {
      title,
      releaseDate: release_date,
      description: short_description,
      image: thumbnail,
      slug: game_url,
      score: null,
    };
  });
}