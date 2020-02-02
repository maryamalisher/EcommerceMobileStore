import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import  Product from './Components/Product'
import Cart from './Components/Cart/Cart'
import Details from './Components/Details'
import Default from './Components/Default'
import Modal from './Components/Modal'

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="" component={Default}/>
        </Switch>
        <Modal/>
      </React.Fragment>
    )
  }
}


export default App;
