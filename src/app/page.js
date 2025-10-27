import Header from '@/components/header/Header';
import HomeImg from '@/components/homeImg/HomeImg';
import Especialidades from '@/components/especialidades/Especialidades';
import Sobre from '@/components/sobre/Sobre';
import StatusBar from '@/components/statusBar/StatusBar';
import Depoimentos from '@/components/depoimentos/Depoimentos';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'Consultório Odontológico',
};

export default function Home() {
  return (
    <div>
      <Header />
      <HomeImg />
      <Especialidades />
      <Sobre />
      <StatusBar />
      <Depoimentos />
      <Footer />
    </div>
  );
}
