export const increment = (data) => {
    return {
        type: 'INCREMENT',
        payload:data
    }
};

export const decrement=()=>{
    return{
        type:'DECREMENT'
    }
}

export const sign_in=()=>{
    return{
        type:'SIGN_IN'
    }
}