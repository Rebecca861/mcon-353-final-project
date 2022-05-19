import { useContext, useReducer } from "react";
import { CountryContext } from "../Country/context";
import { countryReducer } from "../Country/reducer";
import cloneDeep from 'lodash/cloneDeep';



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

    /*function addReview(state, action) {
        
    
    
    if (countryName in state.reviews) {
        let newReviewsForCountry = cloneDeep(state.reviews.countryName);
        const newReview = action.review;
        return {...state, reviews: {...state.reviews, countryName: [...state.reviews.countryName, newReview]} };
    }
    
        return action.country;
    }*/
}


function addReview(state, action) {


if (action.countryName in state.reviews) {
    let newReviewsForCountry = cloneDeep(state.reviews.countryName);
    const newReview = action.review;
    return {...state, reviews: {...state.reviews, countryName: [...state.reviews.countryName, newReview]} };
}

    return action.country;
}