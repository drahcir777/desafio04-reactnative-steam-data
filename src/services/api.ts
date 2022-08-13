import axios from "axios";

const api = axios.create({
  baseURL: "https://api.twitch.tv/drahci777",
});

export { api };
