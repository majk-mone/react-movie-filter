export default function FilterControls({
	searchQuery,
	onSearch,
	selectedGenre,
	onGenreChange,
	genres = [],
}) {
	return (
		<div className="controls">
			<input
				type="text"
				placeholder="Find by title..."
				value={searchQuery}
				onChange={(e) => onSearch(e.target.value)}
			/>
			<select
				value={selectedGenre}
				onChange={(e) => onGenreChange(e.target.value)}
			>
				<option value="">All genres</option>
				{genres.map((genre) => (
					<option key={genre} value={genre}>
						{genre}
					</option>
				))}
			</select>
		</div>
	)
}
