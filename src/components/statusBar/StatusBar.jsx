import '../../styles/statusBar.module.css';

export default function StatusBar() {
  return (
    <section id="status-bar">
      <ul>
        <li className="estatistica">
          <h2 className="numero">33</h2>
          <span className="texto">Anos Atendendo</span>
        </li>
        <li className="estatistica">
          <h2 className="numero">+500</h2>
          <span className="texto">Pacientes</span>
        </li>
        <li className="estatistica">
          <h2 className="numero">+8k</h2>
          <span className="texto">Restaurações Feitas</span>
        </li>
        <li className="estatistica">
          <h2 className="numero">+30k</h2>
          <span className="texto">Consultas Feitas</span>
        </li>
        <li className="estatistica">
          <h2 className="numero">+15</h2>
          <span className="texto">Certificações</span>
        </li>
      </ul>
    </section>
  );
}
