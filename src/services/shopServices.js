import baseApiService from "../base_api/api_service";

export const shopService = () => {
  const useApi = baseApiService;
  return {
    getList: async (data) => {
      return await useApi.get("/product", data);
    },
    getDetail: async (id) => {
      return await useApi.get(`/product/detail/${id}`);
    },
  };
};
