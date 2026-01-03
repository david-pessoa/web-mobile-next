import Header from '@/components/header/Header';
import HomeImg from '@/components/homeImg/HomeImg';
import Footer from '@/components/footer/Footer';
import Description from '@/components/description/Description';
import data from '@/app/api/dados.json';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return data.especialidades.map((_, index) => ({
    id: String(index + 1),
  }));
}

export default async function EspecialidadePage({ params }) {
  const { id } = await params; // 👈 AQUI está a correção
  const numericId = Number(id);
  const dados = data.especialidades[numericId - 1];

  if (!dados) {
    notFound();
  }

  const titleStyle = { marginTop: '5vh', marginBottom: '5vh' };

  return (
    <div>
      <Header />
      <h1 style={titleStyle}>{dados.nome}</h1>
      <HomeImg imagem={`/assets/images/especialidade_page/${dados.imagem}`} />
      <Description texto={dados.descricao} />
      <Footer />
    </div>
  );
}
