import MovieCard from './MovieCard'

export default function MovieList({ movies }) {
	if (movies.length === 0) return <p>nessun film trovato.</p>

	return (
		<ul>
			{movies.map((movie, i) => (
				<MovieCard key={i} title={movie.title} genre={movie.genre} />
			))}
		</ul>
	)
}
