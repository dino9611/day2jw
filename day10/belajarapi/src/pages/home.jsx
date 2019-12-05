import React, { Component } from 'react';
import Axios from 'axios'
import { APIURL } from '../support/ApiUrl';
import {connect} from 'react-redux'



class Home extends Component {
    state = {
        dataprovinsi:[],
        datakabupaten:[]
    }

    componentDidMount(){
        Axios.get(`${APIURL}MeP7c5ne${this.props.Token}/m/wilayah/provinsi`)
        .then((res)=>{
            this.setState({dataprovinsi:res.data.data})           
        }).catch((err)=>{
            console.log(err)
        })
        
    }

    onProvinsiChange=(e)=>{
        var idprov=e.target.value
        Axios.get(`${APIURL}MeP7c5ne${this.props.Token}/m/wilayah/kabupaten?idpropinsi=${idprov}`)
        .then((res)=>{
            this.setState({datakabupaten:res.data.data})
        }).catch((err)=>{
            console.log(err)
        })
    }

    renderProvinsi=()=>{
        return this.state.dataprovinsi.map((val,index)=>{
            return(
                <option value={val.id} key={index}>{val.name}</option>
            )
        })
    }

    renderKabupaten=()=>{
        if(this.state.datakabupaten.length===0){
            return <option > pilih provinsi dulu malih</option>
        }
        return this.state.datakabupaten.map((val,index)=>{
            return(
                <option value={val.id} key={index}>{val.name}</option>
            )
        })
    }

    render() {
        if(this.state.dataprovinsi.length===0){
            return <div>Loading...</div>
        } 
        return (
            <div className='mt-3'>
                <select  onChange={this.onProvinsiChange} ref='provinsi'>
                    <option selected hidden>pilih nama provinsi</option>
                    {this.renderProvinsi()}
                </select>
                <select>
                    {this.renderKabupaten()}
                </select>
            </div>
          );
    }
}
const MapstatetoProps=(state)=>{
    return{
        Token:state.Token
    }
}
export default connect(MapstatetoProps)(Home);