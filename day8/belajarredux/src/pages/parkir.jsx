import React, { Component } from 'react';
import {connect} from 'react-redux'
import {BayarParkir} from './../redux/actions/bayarparkiractions'


class Parkir extends Component {
    state = {
        selecteditems:1,
        hargabayar:0,
    }

    onbayarMotorClick=()=>{
        var hargaparkir= this.refs.durasimotor.value*1000
        this.refs.durasimotor.value=''
        this.props.BayarParkir(hargaparkir)
        this.setState({hargabayar:hargaparkir})
    }

    onbayarMobilClick=()=>{
        var hargaparkir= this.refs.durasimobil.value*2000
        this.refs.durasimobil.value=''
        this.props.BayarParkir(hargaparkir)
        this.setState({hargabayar:hargaparkir})
    }

    render() { 
        return (
            <div>
                <center>
                    <button 
                        onClick={()=>{
                            this.setState({selecteditems:0,hargabayar:0})
                            this.props.BayarParkir(0)
                        }} 
                        disabled={this.state.selecteditems===0?true:false} 
                        className='btn btn-primary mr-5'
                    >
                        Mobil
                    </button>
                    <button 
                        onClick={()=>{
                            this.setState({selecteditems:1,hargabayar:0})
                            this.props.BayarParkir(0)
                        }}  
                        disabled={this.state.selecteditems===0?false:true} 
                        className='btn btn-warning'
                    >
                        Motor
                    </button>
                    {
                        this.state.selecteditems===1?
                        <div>
                            <h1>Parkir MoToR</h1>
                            <br/>
                            <br/>
                            <br/>
                            <input placeholder='lama parkir' type="number" ref='durasimotor'/><br/> <br/>
                            lama parkir <br/> <br/>
                            <button onClick={this.onbayarMotorClick} className='btn btn-success'>Bayar</button><br/>
                            <h2> Rp.{this.state.hargabayar},00</h2>

                        </div>
                        :
                        <div >
                            <h1>Parkir Mobil</h1>
                            <br/>
                            <br/>
                            <br/>
                            <input placeholder='lama parkir' type="number" ref='durasimobil'/><br/> <br/>
                            lama parkir <br/> <br/>
                            <button onClick={this.onbayarMobilClick} className='btn btn-success'>Bayar</button>
                            <h2>Rp.{this.state.hargabayar},00</h2>
                        </div>

                    }
                </center>
            </div>
          );
    }
}
 
export default connect(null,{BayarParkir})(Parkir);