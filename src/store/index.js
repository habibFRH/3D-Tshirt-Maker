import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "orange",
  isLogoTexture: true,
  isFullTexture: false,
  logodecal: "./frh-logo.png", // FRH
  fullDecal: './frh-logo.png',
});
export default state;
