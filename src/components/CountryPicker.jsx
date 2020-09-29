import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'

const CountryPicker = () => {
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="Global">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker