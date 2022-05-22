import React, {useReducer} from 'react';
import { countryReducer } from './reducer';


export const CountryContext = React.createContext();


export const CountryProvider = (props) => {
    const [countryState, countryDispatch] = useReducer(countryReducer, {
        country: {
            name: "United States", 
            url: "https://travelbriefing.org/United_States?format=json",
        },
    });
    return (
    <CountryContext.Provider value = {{statefulCountry: countryState.country, countryDispatch}}>
        {props.children}
    </CountryContext.Provider>
    );
  }


