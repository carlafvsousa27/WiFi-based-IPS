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


