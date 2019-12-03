const INITIAL_STATE={
    jumlahkata:0
}


export default(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case 'HITUNG':
            return  {...state,jumlahkata:action.payload}
        default:
            return state
    }
}