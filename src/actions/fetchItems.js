export function fetchItems(action){
    return (dispatch) => {
        fetch("https://guitar-store-backend.herokuapp.com/items")
        .then(resp => resp.json())
        .then(data => dispatch({
            
            type: 'FETCH_ITEMS',
            payload: data

        }))
    }
}