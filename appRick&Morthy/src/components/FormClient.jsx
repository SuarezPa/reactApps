import '../styles/FormClient.css';

function FormClient() {
  return (
    <div className="form_data_client">
      <h2>Danos tu opinion !!!</h2>
      <p>
        Ayudanos a entenderte, queremos saber que tal nos va con lo que hemos hecho y que opiniones
        tienes sobre mejorar el flujo actual, puedes indicar en el formulario tu nombre completo,
        correo electroncio y mensaje asociado a tu comentario, mejora o critica.
      </p>
      <form className="data_client" action="/procesar-formulario" method="POST">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />
        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea name="mensaje" id="mensaje" rows="{8}" cols="{50}"></textarea>
        <input className="butom" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default FormClient;
