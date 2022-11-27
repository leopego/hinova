import axios from "axios";

export const API = axios.create({
  baseURL: "http://app.hinovamobile.com.br/ProvaConhecimentoWebApi",
});
