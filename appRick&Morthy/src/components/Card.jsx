import './Card.css';

function Card(props) {
  const { title, price, imagen, description } = props;
  return (
    <article className="card">
      <h3 className="card__title">{title}</h3>
      <img className="card__image" src={imagen} alt={title}></img>
    </article>
  );
}

export default Card;
