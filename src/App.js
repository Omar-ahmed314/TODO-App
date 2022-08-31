import React, { Component } from 'react'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ItemsList from './components/ItemsList';
import { Navbar, NavbarBrand } from 'reactstrap'
import { idGenerator } from './shared/idGenerator'
import NewListBtn from './img/icons/plus-wt.png'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemlists: []
    };
    this.gen = idGenerator;
  }

  addItemList = () => {
    this.setState({
      itemlists: [...this.state.itemlists, <ItemsList id={this.gen().next().value} />]
    })
  }

  render () {
    return (
      <div className='entire-container'>
        <Navbar className="my-2"
                color="secondary"
                dark>
          <NavbarBrand href="/">
            My todo list
          </NavbarBrand>
        </Navbar>
        <div className='itemLists-container'>
          {this.state.itemlists}
        </div>
        <div onClick={this.addItemList} className='add-list-btn'>
          <img src={NewListBtn} />
          <span>New list</span>
        </div>
      </div>
    );
  }
}

export default App;
