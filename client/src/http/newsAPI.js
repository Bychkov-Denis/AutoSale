import { $authHost, $host } from "./index";

export const createNews = async news => {
  const { data } = $authHost.post("api/news", news);
  return data;
}

export const getNews = async () => {
  const { data } = await $host.get("api/news");
  return data;
}

export const getOneNews = async id => {
  const { data } = await $host.get("api/news/" + id);
  return data;
}