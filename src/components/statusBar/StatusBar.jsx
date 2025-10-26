import styles from '../../styles/statusBar.module.css';

export default function StatusBar() {
  return (
    <section className={styles.statusBar}>
      <ul>
        <li>
          <h2>33</h2>
          <span>Anos Atendendo</span>
        </li>
        <li>
          <h2>+500</h2>
          <span>Pacientes</span>
        </li>
        <li>
          <h2>+8k</h2>
          <span>Restaurações Feitas</span>
        </li>
        <li>
          <h2>+30k</h2>
          <span>Consultas Feitas</span>
        </li>
        <li>
          <h2>+15</h2>
          <span>Certificações</span>
        </li>
      </ul>
    </section>
  );
}
