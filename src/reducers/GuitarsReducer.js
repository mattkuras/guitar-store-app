export default function guitarsReducer(
    state = {
        guitars: [],
        cartTotalPrice: 0,
        cart: []
        },
        action
        ){
           

    switch(action.type){
        case 'FETCH_GUITARS':
            return {
                ...state,
                guitars: action.payload
                
            }
        case 'FETCH_ITEMS':
    
           return { ...state, 
            cart: action.payload
           }
  
        case 'ADD_ITEM':
            const price = action.payload.guitar.price
            return {
                ...state,      
                 cart: [...state.cart, action.payload],
                cartTotalPrice: state.cartTotalPrice + price
          }
          case 'REMOVE_ITEM':
            const removalPrice = action.payload.guitar.price
              return {
                  ...state,
                  
                  cart: state.cart.filter(item => item.id !== action.payload.id),
                  cartTotalPrice: state.cartTotalPrice - removalPrice
              }
        default: 
            return state
    }
}
