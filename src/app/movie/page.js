import styles from "@/app/styles/common.module.css";
import MovieCard from "../components/MovieCard";

const Movie = async () => {

  await new Promise(resolve => setTimeout(resolve, 2000))

  const url = process.env.RAPID_URL
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Movies & Series</h1>
        <div className={styles.card_section}>
          {
            main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Movie