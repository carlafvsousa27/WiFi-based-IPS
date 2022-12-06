import axios from 'axios';

export const getAllLocals = async () => {
    try {
        const response = await axios.get("http://localhost:3000/locals");
        console.log(JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.log('error: ' + error);
    }
}

export const getAllHospitals = async () => {
    try {
        const response = await axios.get("http://localhost:3000/hospitals");
        console.log(JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.log('error: ' + error);
    }
}


export const getAllDistricts = async () => {
    try {
        const response = await axios.get("http://localhost:3000/districts");
        console.log(JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.log('error: ' + error);
    }
}


export const getRoutes = async (params) => {
    try {
        const response = await axios.get("http://localhost:3000/routes");
        console.log(params);
        console.log(JSON.stringify(response.data));
        const result = response.data.find(item => { return (item.from == params.start || item.to == params.start) && (item.from == params.finish || item.to == params.finish) });
        console.log(result.icon);
        return result;
    } catch (error) {
        console.log('error: ' + error);
    }
}
