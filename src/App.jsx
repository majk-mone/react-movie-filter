import { useMovieFilter } from './hooks/useMovieFilter'
import FilterControls from './components/FilterControls'
import MovieList from './components/MovieList'
import AddMovieForm from './components/AddMovieForm'

function App() {
	const {
		filteredMovies,
		selectedGenre,
		setSelectedGenre,
		searchQuery,
		setSearchQuery,
		uniqueGenres,
		addMovie,
	} = useMovieFilter()

	return (
		<div>
			<h1> Movie FIlter</h1>

			<FilterControls
				searchQuery={searchQuery}
				onSearch={setSearchQuery}
				selectedGenre={selectedGenre}
				onGenreChange={setSelectedGenre}
				genres={uniqueGenres}
			/>

			<MovieList movies={filteredMovies} />

			<AddMovieForm onAdd={addMovie} />
		</div>
	)
}

export default App
