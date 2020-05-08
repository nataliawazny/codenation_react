import React from 'react';
import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {}

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({})
    }, 3000)
  }

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts />
       </React.Fragment>
    )
  }
}

export default App;
