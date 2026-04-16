import { useState } from 'react'
import { GENRES } from '../data/movie'

export default function AddMovieForm({ onAdd }) {
	const [title, setTitle] = useState('')
	const [genre, setGenre] = useState('')

	function handleSubmit() {
		// ← anche il typo su Submit
		onAdd(title, genre)
		setTitle('')
		setGenre('')
	}

	return (
		<div>
			<input
				type="text"
				placeholder="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<select value={genre} onChange={(e) => setGenre(e.target.value)}>
				{/*           ^^^^               ^^^^^^^^                     */}
				<option value="">Select genre</option>
				{GENRES.map((g) => (
					<option key={g} value={g}>
						{g}
					</option> // ← {g} dentro l'option
				))}
			</select>
			<button onClick={handleSubmit}>Add</button>
		</div>
	)
}
