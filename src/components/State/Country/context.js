import React, {useState, useReducer} from 'react';
import { countryReducer } from './reducer';


export const CountryContext = React.createContext();


export const CountryProvider = (props) => {
    const [countryState, countryDispatch] = useReducer(countryReducer, {
        country: {name: "America", url: "ddd"},
    });
    return (
    <CountryContext.Provider value = {{countryState, countryDispatch}}>
        {props.children}
    </CountryContext.Provider>
    );
  }


