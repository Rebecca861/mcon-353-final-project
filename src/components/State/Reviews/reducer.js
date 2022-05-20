import { useContext, useReducer, useState } from "react";
import { CountryContext } from "../Country/context";
import { countryReducer } from "../Country/reducer";
import cloneDeep from 'lodash/cloneDeep';



export const ReviewActions = Object.freeze({
    ADD: 'ADD', 
    SEND_COUNTRIES: 'SEND_COUNTRIES',
});




export function reviewReducer(state, action) {

    

    console.log(action.type);
    switch (action.type) {
        case ReviewActions.ADD:
            return addReview(state, action);
        // case ReviewActions.SEND_COUNTRIES:
        //     return receiveCountries(state, action);
        default:
            throw new Error(`Review Reducer does not recognize ${action.type}`);
    }
}

/*function receiveCountries(state, action) {
    let reviewsToReturn = {};
    (action.countries).forEach(country => {
        reviewsToReturn = addCountryToReviewsObject(state, action);
    });
}

function addCountryToReviewsObject(state, action) {
    return 
}*/


function addReview(state, action) {

    const newReview = action.review;

if (action.countryName in state.reviews) {
    let cName = action.countryName;
    return {...state, reviews: {...state.reviews, [cName]: [...state.reviews[action.countryName], newReview]} };
}

    return {...state, reviews: {...state.reviews, [action.countryName]: [newReview]}};
}