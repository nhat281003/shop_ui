import baseApiService from "../base_api/api_service";

export const cartService = () => {
  const useApi = baseApiService;
  return {
    getList: async () => {
      return await useApi.get("/cart");
    },
    add: async (data) => {
      return await useApi.post("/cart/add", data);
    },
    remove: async (id) => {
      return await useApi.delete(`/cart/delete/${id}`);
    },
    purchase: async (data) => {
      return await useApi.post("/cart/purchase", data);
    },
  };
};
