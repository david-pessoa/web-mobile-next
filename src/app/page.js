import Header from '@/components/header/Header';
import HomeImg from '@/components/homeImg/HomeImg';
import Especialidades from '@/components/especialidades/Especialidades';
import Sobre from '@/components/sobre/Sobre';
import StatusBar from '@/components/statusBar/StatusBar';
import Depoimentos from '@/components/depoimentos/Depoimentos';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'Consultório Odontológico | Home',
};

export default function Home() {
  return (
    <div>
      <Header />
      <HomeImg imagem={'/assets/images/carrossel_consultorio/exterior.png'} />
      <Especialidades />
      <Sobre />
      <StatusBar />
      <Depoimentos />
      <Footer />
    </div>
  );
}
