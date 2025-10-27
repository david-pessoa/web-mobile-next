export default function FigureCaption({ nome, legenda }) {
  return (
    <figcaption>
      <h5>{nome}</h5>
      <p>{legenda}</p>
    </figcaption>
  );
}
