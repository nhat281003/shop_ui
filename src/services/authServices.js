import baseApiService from "../base_api/api_service";

export const authService = () => {
  const useApi = baseApiService;
  return {
    login: async (data) => {
      return await useApi.post("/user/login", data);
    },


    signup : async (data) => {
      return await useApi.post("/user/register", data);
    },
  };
};
