import React from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      filterData: [],
    }
  }


  async componentDidMount() {
    const response = await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then(resp => resp.json())
      .then(data => this.setState ({data, filterData: data}))
  }

  handleChange = (event) => {
    const {filterData} = this.state
    let findData = filterData.filter(data => data.name.toLowerCase().includes(event.target.value.toLowerCase()))
    this.setState({data: findData})
  }

  handleClick = (event) => {
    const {data} = this.state
    let orderedData = data.sort((pessoa1,pessoa2) => {
      return pessoa2[event] > pessoa1[event] ? -1 : 1
    })
    this.setState({data: orderedData})
  }


  render() {
    const {data} = this.state
    return (
      <div data-testid="app" className="app">
       <Topbar/>
       <Filters handleChange = {this.handleChange} handleClick = {this.handleClick} handleInput = {this.handleChange}/>
       <Contacts data = {data}/>
      </div>
    )
  }
}

export default App;
