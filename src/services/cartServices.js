import baseApiService from "../base_api/api_service";

export const cartService = () => {
  const useApi = baseApiService;
  return {
    add: async (data) => {
      return await useApi.get("/product", data);
    },

  };
};
