export const CountryActions = Object.freeze({
    SET: 'SET', 
    ADD_REVIEW: 'ADD_REVIEW',
});



export function countryReducer(state, action) {
    console.log(action.type);
    switch (action.type) {
        case CountryActions.SET:
            return setCountry(state, action);
        case CountryActions.ADD_REVIEW:
            return addReview(state, action);
        default:
            throw new Error(`Country Reducer does not recognize ${action.type}`);
    }
}


function setCountry(state, action) {
    if (action.country.name in action.allReviews) {
        let theseReviews = action.allReviews[action.country.name];
        return {...state, country: {...action.country, reviews: theseReviews}};
    }
    else {
        let theseReviews = [];
        return {...state, country: {...action.country, reviews: theseReviews}};
    }
}

function addReview(state, action) {
    return {...state, country: {...state.country, reviews: [...state.country.reviews, action.review]}};
}