import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "gray",
  isLogoTexture: true,
  isFullTexture: false,
  logodecal: "./threejs.png", // FRH
});
export default state;
