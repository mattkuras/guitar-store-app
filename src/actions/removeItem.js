export const removeItem = (data) => {
  

    return(dispatch) => {
        fetch(`https://guitar-store-backend.herokuapp.com/items/${data}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(item =>dispatch({type: 'REMOVE_ITEM', payload: item}))

    }
}

