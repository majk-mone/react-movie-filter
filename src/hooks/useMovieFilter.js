import { useState, useEffect } from 'react'
import { INITIAL_MOVIES } from '../data/movie'

export function useMovieFilter() {
	const [movies, setMovies] = useState(INITIAL_MOVIES)
	const [selectedGenre, setSelectedGenre] = useState('')
	const [searchQuery, setSearchQuery] = useState('')
	const [filteredMovies, setFilteredMovies] = useState(INITIAL_MOVIES)

	useEffect(() => {
		let result = movies

		if (selectedGenre) {
			result = result.filter((m) => m.genre === selectedGenre)
		}
		if (searchQuery.trim()) {
			result = result.filter((m) =>
				m.title.toLowerCase().includes(searchQuery.toLowerCase()),
			)
		}

		setFilteredMovies(result)
	}, [movies, selectedGenre, searchQuery])

	function addMovie(title, genre) {
		if (!title.trim() || !genre) return
		setMovies((prev) => [...prev, { title: title.trim(), genre }])
	}

	const uniqueGenres = [...new Set(movies.map((m) => m.genre))]

	return {
		filteredMovies,
		selectedGenre,
		setSelectedGenre,
		searchQuery,
		setSearchQuery,
		uniqueGenres,
		addMovie,
	}
}
