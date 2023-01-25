import axios from 'axios';

export const getAllLocals = async () => {
    try {
        const response = await axios.get("https://atufg44mm2.execute-api.eu-west-3.amazonaws.com/testes/locais");
        console.log(JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.log('error: ' + error);
    }
}

export const getAllHospitals = async () => {
    try {
        const response = await axios.get("https://atufg44mm2.execute-api.eu-west-3.amazonaws.com/testes/hospitaisporto");
        console.log(JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.log('error: ' + error);
    }
}


export const getAllDistricts = async () => {
    try {
        const response = await axios.get("https://atufg44mm2.execute-api.eu-west-3.amazonaws.com/testes/distritos");
        console.log(JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.log('error: ' + error);
    }
}
export const getAllDistritos = async () => {
    try {
        const response = await axios.get("https://atufg44mm2.execute-api.eu-west-3.amazonaws.com/testes/distritos");
        console.log(JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.log('error: ' + error);
    }
}


export const getRoutes = async (params) => {
    try {
        const response = await axios.get("https://atufg44mm2.execute-api.eu-west-3.amazonaws.com/testes/trajeto");
        console.log(params);
        console.log(JSON.stringify(response.data));
        const result = response.data.find(item => { return (item.from == params.start || item.to == params.start) && (item.from == params.finish || item.to == params.finish) });
        return result;
    } catch (error) {
        console.log('error: ' + error);
    }
}
