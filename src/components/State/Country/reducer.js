export const CountryActions = Object.freeze({
    SET: 'SET', 
});



export function countryReducer(state, action) {
    console.log(action.type);
    switch (action.type) {
        case CountryActions.SET:
            return setCountry(state, action);
        default:
            throw new Error(`Country Reducer does not recognize ${action.type}`);
    }
}


function setCountry(state, action) {
    console.log("in setCountry, state is ");
    console.log(state);
    console.log(state.country);
    console.log(action.country);
    return {...state, country: action.country};
}