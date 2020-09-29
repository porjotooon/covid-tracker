import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../utils/Api'

const CountryPicker = ({ handleCountry }) => {
    const [countryList, setCountryList] = useState([])

    useEffect(()=>{
        const fetchAPI = async () => {
            setCountryList(await fetchCountries())
        }

        fetchAPI()
    },[setCountryList])

    console.log(countryList)

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={ e => handleCountry(e.target.value)}>
                <option value="global">Global</option>
                {countryList.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
    // the state of the country is going to be kept
    // in the parent component, i.e. App.js file
}

export default CountryPicker