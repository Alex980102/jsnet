import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import open from 'open';

var responses: any;

const jsonData = async() => {
    const config: AxiosRequestConfig = {
        method: 'get',
        url: 'http://162.240.4.128:3000/',
        headers: {}
    }
    await axios(config)
        .then((response: AxiosResponse) => {
            responses = response.data;
        })
        .catch((error) => {
            return error;
        })
    return responses;
}

export const rutas = async() => {
    let axiosRoutes = await jsonData();
    let counter = 1;
    for (const key in axiosRoutes) {
        if (Object.prototype.hasOwnProperty.call(axiosRoutes, key)) {
            const element = axiosRoutes[key];
            console.log(`Preciona ${counter} para ${key}`);
            counter ++;
        }
    }
}

export const openNav = async (number: any) => {
    let count = 0;
    let jsonDatas = await jsonData();
    for (let i in jsonDatas) {
        count++;
        if (count === number) {
            open(`${jsonDatas[i]}`);
        }
    }
}
