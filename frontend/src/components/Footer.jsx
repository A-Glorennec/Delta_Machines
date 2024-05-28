/* eslint-disable jsx-a11y/anchor-is-valid */
import asphaltLogo from "../assets/asphalt_logo_resize.png";
import deltaLogoResize from "../assets/delta_logo2.webp";
import facebook from "../assets/icons/facebook.svg";
import insta from "../assets/icons/instagram.svg";
import discord from "../assets/icons/discord.svg";

export default function Footer() {
  return (
    <div className="bg-black fixed w-full bottom-0 flex justify-between items-center">
      <div className="flex-grow flex justify-center ml-[36rem]">
        <img src={asphaltLogo} alt="Logo Asphalt Legends 9" />
      </div>
      <div className="flex items-center gap-10">
        <a href="#">
          <img src={facebook} alt="Facebook" className="w-16 h-16" />
        </a>
        <a href="#">
          <img src={insta} alt="Facebook" className="w-20 h-20" />
        </a>
        <a href="#">
          <img src={discord} alt="Facebook" className="w-20 h-20" />
        </a>
        <img src={deltaLogoResize} alt="Delta" />
      </div>
    </div>
  );
}
