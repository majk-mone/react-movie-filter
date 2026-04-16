export default function MovieCard({ title, genre }) {
	return (
		<li>
			<strong>{title}</strong> - {genre}
		</li>
	)
}
