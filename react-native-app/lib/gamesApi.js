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
      slug: game_url, // hier als URL zum Spiel
      score: null, // FreeToGame liefert keine Bewertung
    };
  });
}

export async function getGameDetails(slug) {
  // Da FreeToGame keine Detail-API mit Slug hat, nutzen wir die URL direkt
  return {
    img: null,
    title: "Details nicht verfügbar",
    slug,
    description: "Die FreeToGame API bietet keine Detailinformationen über einzelne Spiele per Slug.",
    score: null,
    reviews: [],
  };
}
