import React from 'react'; 
import Cards from './components/Cards'
import Chart from './components/Chart'
import CountryPicker from './components/CountryPicker'
import styled from 'styled-components'
import './App.css'
import { fetchData } from './utils/Api'


const Wrap = styled.div`
display:flex;
align-items:center;
justify-content:center;
`

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render(){
    const { data } = this.state; //destructured object here
  return (
    <Wrap>
      <Cards data={data}/>
      <CountryPicker/>
      <Chart/>
    </Wrap>
    );    
  }
}

export default App;
