import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../utils/Api'

const CountryPicker = () => {
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
            <NativeSelect>
                <option value="global">Global</option>
                {countryList.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker