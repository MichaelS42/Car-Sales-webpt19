export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeFeature = (feature) => dispatch => {
    return (
        dispatch({type: REMOVE_FEATURE, payload: feature})
    )
}

export const addFeature = (feature) => {
    return {
        type: 'ADD_FEATURE', payload: feature
    }
}