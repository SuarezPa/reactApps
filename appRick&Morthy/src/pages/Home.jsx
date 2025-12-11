import '../styles/InitialMessage.css';

function Home() {
  return (
    <>
      <section className="title_class">
        <h1>¿Qué puedes ver ahora?</h1>
      </section>
      <section className="message_class">
        <p>
          Apartado de capitulos, puedes escoger el capitulo que mas te llame la atencion y ver un
          detalle amplio sobre los personajes, duracion y un breve resumen de cada capitulo.
        </p>
        <p>
          Apartado de personajes, puedes explorar un amplio detalle sobre los personajes asociados a
          toda la serie del capitulo asociado con la participaicion de cada personaje.
        </p>
      </section>
    </>
  );
}

export default Home;
