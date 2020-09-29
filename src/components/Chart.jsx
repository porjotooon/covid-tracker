import React, { useState, useEffect } from 'react'
import styles from './Chart.module.css'
import { fetchDailyData } from '../utils/Api'
import { Bar } from 'react-chartjs-2'

const Chart = () => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        console.log(dailyData);
        fetchAPI();
    }, [dailyData])

    return (
        <div className={styles.container}>

        </div>
    )
}

export default Chart