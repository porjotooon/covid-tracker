import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

// async func returning the call from the api
export const fetchData = async () => {
    try {
        // destructure the data
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
}

//async func for getting countries
export const fetchCountries = async () => {
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`)
        return countries.map(country => country.name)
    } catch(error){
        console.log(error)
    }
}
