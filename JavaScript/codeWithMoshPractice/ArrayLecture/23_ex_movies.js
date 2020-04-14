const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

/**
 * all the moives in 2018 with rating > 4
 * sort them by their rating
 * descending order
 * pick their title
 * result: 'b' 'a'
 */

console.log(
  movies
    .filter(
      (movie) => movie.year === 2018 && movie.rating >= 4
    )
    .sort((a, b) => b.rating - a.rating)
    .map((movie) => movie.title)
);

//mosh ver.

const titles = movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(titles);

/**
 * NOTE:
 * sort의 기준점은 없는데
 * 데이터의 순서를 바꾸고 싶을 때
 * reverse
 */
