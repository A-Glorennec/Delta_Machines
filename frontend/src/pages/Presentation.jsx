/* eslint-disable jsx-a11y/anchor-is-valid */
import greenCar from "../assets/green-car.png";
import facebook from "../assets/icons/facebook.svg";
import insta from "../assets/icons/instagram.svg";
import discord from "../assets/icons/discord.svg";
import flag from "../assets/french_flag.jpg";

export default function Presentation() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${greenCar})` }}
    >
      <div className="pl-28 pr-56 text-white font-eurostile">
        <div className="flex items-baseline gap-6">
          <h1 className=" text-6xl font-bold  pt-28">L'Equipe</h1>
          <img src={flag} alt="drapeau Français" className="h-16 w-16" />
        </div>
        <p className="text-3xl pt-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          repellat voluptates pariatur molestias ut quisquam distinctio
          voluptatem dicta nobis commodi! Dolorem quos facere, iusto velit
          voluptates praesentium officiis cupiditate dignissimos.
        </p>
        <h2 className=" text-5xl font-bold pt-20">Rejoignez nos réseaux</h2>
        <div className="flex gap-10 pt-10">
          <a href="#">
            <img
              src={facebook}
              alt="Lien vers Facebook"
              className="w-24 h-24"
            />
          </a>
          <a href="#">
            <img src={insta} alt="Lien vers Instagram" className="w-28 h-28" />
          </a>
          <a href="#">
            <img
              src={discord}
              alt="Lien vers Instagram"
              className="w-28 h-28"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
