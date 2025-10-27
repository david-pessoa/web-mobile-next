import style from "../../styles/description.module.css"

export default function Description({ texto }) {
  return (
    <section className={`${style.description} blue-background`}>
      <p>{texto}</p>
    </section>
  );
}
