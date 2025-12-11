import '../styles/ChapterCards.css';

function Chapter(props) {
  const { title, dateCreate } = props;
  return (
    <article className="chatper_card">
      <p className="chapter_card_title">Title: {title}</p>
      <p className="chapter_card_date">Date Create: {dateCreate}</p>
    </article>
  );
}

function ChapterList(props) {
  return (
    <div class="frame">
      <img src="tu-imagen.jpg" alt="Contenido"></img>
    </div>
  );
}

export default ChapterList;
