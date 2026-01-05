import style from '../../styles/description.module.css';

export default function Description({ texto }) {
  return (
    <section className={`${style.description} blue-background`}>
      <aside>
        {texto?.split('\n').map((texto, i) => (
          <p key={i}>{texto}</p>
        ))}
      </aside>
    </section>
  );
}
