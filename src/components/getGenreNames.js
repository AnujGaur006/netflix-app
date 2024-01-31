import { genreList } from "../utils/constants";

const getGenreNames = (genreIds) => {
    const genreNames = [];

    genreIds.forEach((genreId) => {
        const genre = genreList.find(genre => genre.id === genreId);
        if(genre) { genreNames.push(genre.name)}
    });

    return genreNames;
};

export default getGenreNames;