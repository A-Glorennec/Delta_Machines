import Footer from "../components/Footer";
import whiteCar from "../assets/white_car.png";
import deltaLogo from "../assets/delta_logo.webp";

export default function Landing() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${whiteCar})` }}
    >
      <div className="flex justify-center">
        <img className="h-[700px]" src={deltaLogo} alt="Logo Delta Machines" />
      </div>
      <h1 className="text-white text-8xl flex justify-center font-eurostile font-bold">
        Bienvenue
      </h1>
      <Footer />
    </div>
  );
}
