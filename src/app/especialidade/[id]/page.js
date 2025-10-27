'use client';
import { useRouter, useParams } from 'next/navigation'; // Ou `react-router` para `pages` router
import { useEffect, useState } from 'react';

import Header from '@/components/header/Header';
import HomeImg from '@/components/homeImg/HomeImg';
import Footer from '@/components/footer/Footer';
import Description from '@/components/description/Description';

export default function Home() {
  const params = useParams();
  const { id } = params;
  const [dados, setDados] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/especialidades');
      const lista_especialidades = await res.json();
      const especialidade = lista_especialidades[id - 1];
      console.log(especialidade);

      // Direciona para a página 404 se o id não existir
      if (!especialidade) router.push('/404');

      document.title = `Consultório Odontológico | ${especialidade.nome}`;
      setDados(especialidade);
    }
    fetchData();
  }, [id, router]);

  return (
    <div>
      <Header />
      <h1 style={{ marginBottom: '8vh' }}>{dados.nome}</h1>
      <HomeImg imagem={`/assets/images/especialidade_page/${dados.imagem}`} />
      <Description texto={dados.descricao} />
      <Footer />
    </div>
  );
}
