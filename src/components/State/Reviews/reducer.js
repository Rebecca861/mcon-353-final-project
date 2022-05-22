export const ReviewActions = Object.freeze({
    ADD: 'ADD', 
});




export function reviewReducer(state, action) {

    

    console.log(action.type);
    switch (action.type) {
        case ReviewActions.ADD:
            return addReview(state, action);
        default:
            throw new Error(`Review Reducer does not recognize ${action.type}`);
    }
}



function addReview(state, action) {

    const newReview = action.review;

if (action.countryName in state.reviews) {
    let cName = action.countryName;
    return {...state, reviews: {...state.reviews, [cName]: [...state.reviews[action.countryName], newReview]} };
}

    return {...state, reviews: {...state.reviews, [action.countryName]: [newReview]}};
}