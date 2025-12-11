import '../styles/Partners.css';

function Partners(props) {
  const partners = ['AWS', 'Slack', 'Dropbox', 'Shopify'];

  return (
    <section className="partners">
      <h2 className="partners__title">
        <strong>Our Supported Partners</strong>
      </h2>

      <div className="partners__list">
        {partners.map((p) => (
          <div key={p} className="partners__item" aria-label={p}>
            <div className="partners__logo" aria-hidden="true">
              {p[0]}
            </div>
            <div className="partners__name">{p}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;
