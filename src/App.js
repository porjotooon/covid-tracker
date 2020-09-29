import React from 'react'; 
import Cards from './components/Cards'
import Chart from './components/Chart'
import CountryPicker from './components/CountryPicker'
import styled from 'styled-components'
import styles from './App.module.css'
import { fetchData } from './utils/Api'


const Wrap = styled.div`
display:flex;
align-items:center;
justify-content:center;
`

class App extends React.Component {

  // created state to bring out data from the scope
  // of componentDidMount
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    console.log(fetchedData);
  }

  handleCountry = async (country) => {
    const fetchedData = await fetchData(country)

    this.setState({ data: fetchedData, country: country})
    // fetch data
    // set state
  }

  render(){
    const { data, country } = this.state; //destructured object here
  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <CountryPicker handleCountry={this.handleCountry}/>
      <Chart data={data} country={country}/>
    </div>
    );    
  }
}

export default App;
