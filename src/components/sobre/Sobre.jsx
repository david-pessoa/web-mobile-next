import styles from '../../styles/sobre.module.css';
import Image from 'next/image';

export default function Sobre() {
  return (
    <section id="sobre" className={`${styles.sobre} blue-background`}>
      <h2>Sobre</h2>
      <article className={styles.sobreContainer}>
        <aside className={styles.sobreColuna}>
          <figure className={styles.sobreFigura}>
            <Image src="/assets/images/dentista.jpg" alt="A dentista" width={2153} height={3390} />
            <figcaption>
              <h6 className="medium">Dra. Alzira Varão Lima</h6>
              <h6>Periodontista formada pela USP</h6>
            </figcaption>
          </figure>
        </aside>

        <div className={styles.sobreColuna}>
        <p>
          A Dra. Alzira é cirurgiã-dentista especialista em Periodontia, formada pela Universidade
          de São Paulo (USP), uma das instituições mais renomadas da América Latina na área da
          saúde. Com sólida formação acadêmica e ampla experiência clínica, dedica-se ao
          diagnóstico, prevenção e tratamento das doenças que afetam a gengiva e os tecidos de
          suporte dos dentes.
        </p>
        <p>
          Seu trabalho é pautado pela excelência técnica, pelo uso de protocolos modernos e por um
          atendimento humanizado, sempre focado no bem-estar e na segurança do paciente. A Dra.
          Alzira acredita que a saúde bucal é parte essencial da saúde geral e atua de forma
          cuidadosa para promover sorrisos saudáveis e duradouros.
        </p>
        <p >
          Atenta às inovações da odontologia, está em constante atualização, oferecendo tratamentos
          eficazes, personalizados e baseados em evidências científicas.
        </p>
        </div>
      </article>
    </section>
  );
}
