import React, {useReducer} from 'react';
import {reviewReducer } from './reducer';


export const ReviewContext = React.createContext();


export const ReviewProvider = (props) => {
    const [reviewState, reviewDispatch] = useReducer(reviewReducer, {
        reviews: {
            "United States": ["Had a great time!", "Don't waste your time or money.  We're trying Guam next."],
            "Israel": ["There's no place like it!!!  Definitely coming back soon.", "Not sure if everyone heard but no more COVID tests needed - make your tickets now!!!!"],
        },
    });
    return (
    <ReviewContext.Provider value = {{reviewState, reviewDispatch}}>
        {props.children}
    </ReviewContext.Provider>
    );
  }


