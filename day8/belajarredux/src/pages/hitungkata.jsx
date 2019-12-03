import React, { Component } from 'react';
import {Input} from 'reactstrap'
import {HitungActions} from './../redux/actions'
import {connect} from 'react-redux'

class Hitungkata extends Component {
    state = {
        jumlahkata:0 
    }

    onKataChange=()=>{
        // console.log(this.refs.inputkata.refs.inputkata1.value)
        var jumlahkata=this.refs.inputkata.refs.inputkata1.value.split(' ').filter((val)=>val!=='').length
        this.props.HitungActions(jumlahkata)
   
    }

    render() { 
        return (
            <div>
                <center>
                    <button disabled className='btn btn-outline-primary'>{this.props.Hitungkata}</button>
                    <br/><br/>
                    <Input onChange={this.onKataChange} type='textarea' ref='inputkata' innerRef='inputkata1'/>
                </center>
            </div>
          );
    }
}
const MapStateToProps=({hitungkata})=>{
    return{
        Hitungkata:hitungkata.jumlahkata
    }
  }

export default connect(MapStateToProps,{HitungActions})(Hitungkata);