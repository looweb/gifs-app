import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifsGrid = ({ category, index, onClickDelete }) => {
	const { data: images, loading } = useFetchGifs(category);

	return (
		<div className="GifsGrid">
			<h2>
				{category} <button onClick={() => onClickDelete(index)}>X</button>
			</h2>
			{loading && <h3>Cargando...</h3>}
			<div className="GifsGridList">
				{images.map((gif) => (
					<GifItem key={gif.id} {...gif} />
				))}
			</div>
		</div>
	);
};

export default GifsGrid;
