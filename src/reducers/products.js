import *as Types from './../constants/ActionTypes';

var innitialState = [];
var findIndex=(products,id)=>{
    var result =-1;
    products.forEach((products,index)=> {
        if(products.id === id){
            result = index;
        }
    });
    return result;
}

const products = (state = innitialState, action) => {
    var index = -1 ;
    var {id} = action;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state,id);
            state.splice(index,1);
            return [...state];
        default: return [...state];
    }
}
export default products;