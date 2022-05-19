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
    return action.country;
}