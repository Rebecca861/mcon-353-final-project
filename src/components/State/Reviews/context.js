import React, {useState, useReducer} from 'react';
import {reviewReducer } from './reducer';


export const ReviewContext = React.createContext();


export const ReviewProvider = (props) => {
    const [reviewState, reviewDispatch] = useReducer(reviewReducer, {
        reviews: {
            "America": ["Had a great time!"],
        },
    });
    return (
    <ReviewContext.Provider value = {{reviews: reviewState.reviews, reviewDispatch}}>
        {props.children}
    </ReviewContext.Provider>
    );
  }


