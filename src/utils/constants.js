export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BACKGND_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg";
export const MOVIE_API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDIxMTNlODUyYTU2YmFiMGRhMTNkNzBjOWQ2NzM1YiIsInN1YiI6IjY1YjBiZWNlMjc5MGJmMDE5MzU2MjRiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SFVSqyx2paOeWtQT1qb8o96TgKY9NNcryyOizUkq6So'
    }
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";
export const BACKDROP_CDN_URL = "https://image.tmdb.org/t/p/original";
export const backgroundImageStyle = {
    height: '100vh',
    margin: 0,
    background: `url(${BACKGND_IMAGE}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  };

export const supportedLang = [
    {"key":"en", name:"English"},
    {"key":"hindi", name:"Hindi"},
    {"key":"jpn", name:"Japenese"},
    {"key":"itl", name:"Italian"},   
];