import baseApiService from "../base_api/api_service"

export const authService  = () => {
    const useApi = baseApiService;
    return {
        login(data) {
            useApi.post('/user/login', data);
        },
    }
}