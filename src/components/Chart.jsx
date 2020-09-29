import React, { useState, useEffect } from 'react'
import styles from './Chart.module.css'
import { fetchDailyData } from '../utils/Api'
import { Line, Bar } from 'react-chartjs-2'

const Chart = () => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        console.log(dailyData);
        fetchAPI();
    }, [dailyData])

    {/*if first dailyData is available, fill in line*/}
    const lineChart = (
        dailyData[0] ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => date),
              datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },
              ],
            }}
          />
        ) : null
      );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart