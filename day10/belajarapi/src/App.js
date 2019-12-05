import React, { Component, } from 'react';
import Header from './components/header'
import Home from './pages/home'
import './App.css';
import Axios from 'axios';
import { APIURL } from './support/ApiUrl';
import { TokenActions } from './redux/actions';
import {connect} from 'react-redux'

class App extends Component {
  state = {
    loading:true
    }
  componentDidMount(){
    Axios.get(`${APIURL}poe`)
    .then((res)=>{
      this.props.TokenActions(res.data.token)
      this.setState({loading:false})
    }).catch((err)=>{
      console.log(err)
    })
  }
  render() {
    if(this.state.loading){
      return <div>loading....</div>
    } 
    return (
      <div>
        <Header/>
        <Home/>
      </div>
      );
  }
}
 
export default connect(null,{TokenActions})(App);
