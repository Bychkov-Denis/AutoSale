import { $authHost, $host } from "./index";

export const createType = async type => {
  const { data } = await $authHost.post("api/type", type);
  return data;
}

export const getTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
}

export const createBrand = async brand => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
}

export const getBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
}

export const createAnnouncement = async (announcement) => {
  const { data } = await $authHost.post("api/announcement", announcement);
  return data;
}

export const getAnnouncements = async (typeId, brandId) => {
  const { data } = await $host.get("api/announcement",{params: {
    typeId, brandId
  }})
  return data;
}

export const getOneAnnouncement = async id => {
  const { data } = await $host.get("api/announcement/" + id);
  return data;
}