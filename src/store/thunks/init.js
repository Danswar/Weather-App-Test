// init.js
// Dispatch actions for init the app

// Internal dependencies
import { changeCity } from "store/thunks/changeCity";

export default () =>
  changeCity({
    name: "Ciudad Autónoma de Buenos Aires",
    lon: -58.450001,
    lat: -34.599998,
  });
