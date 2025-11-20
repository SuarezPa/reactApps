import './Card.css';

function Card(props) {
  const { title, price, imagen, description } = props;
  return (
    <article className="card">
      <h3 className="card__title">{title}</h3>
      <img className="card__image" src={imagen} alt={title}></img>
      <p className="card__description">{description}</p>
      <p className="card__price">{price}</p>
    </article>
  );
}

export default Card;
