export function fetchGuitars(action){
    return (dispatch) => {
        fetch("https://guitar-store-backend.herokuapp.com/guitars")
        .then(resp => resp.json())
        .then(data => dispatch({
            
            type: 'FETCH_GUITARS',
            payload: data

        }))
    }
}