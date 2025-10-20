export default function HomeImg() {
  const homeImgStyle = {
    backgroundImage: "url('/assets/images/carrossel_consultorio/exterior.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
  };

  return <div style={homeImgStyle}></div>;
}
