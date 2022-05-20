import React, {useState, useReducer} from 'react';
import {reviewReducer } from './reducer';


export const ReviewContext = React.createContext();


export const ReviewProvider = (props) => {
    const [reviewState, reviewDispatch] = useReducer(reviewReducer, {
        reviews: {
            "United States": ["Had a great time!"],
            "Israel": ["Here's a review"],
        },
    });
    return (
    <ReviewContext.Provider value = {{reviewState, reviewDispatch}}>
        {props.children}
    </ReviewContext.Provider>
    );
  }


