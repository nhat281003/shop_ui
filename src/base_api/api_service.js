import axios from "axios";



const apiService = axios.create({
    baseURL: "http://localhost:3000",
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});


apiService.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
}
);



apiService.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    if(error.response){
        console.log('API Error:', error.response.status, error.response.data);
    }else {
        console.log('NetWork Error:', error.message);

    }
    return Promise.reject(error);
});


const baseApiService = {
    get: (url, params, config = {}) => apiService.get(url, { params, ...config }),
  
    post: (url, body, config = {}) => apiService.post(url, body, { ...config }),
  
    put: (url, body, config = {}) => apiService.put(url, body, { ...config }),
  
    delete: (url, config = {}) => apiService.delete(url, { ...config }),
  };

export default baseApiService;
