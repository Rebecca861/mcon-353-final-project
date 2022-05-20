import React, { useState } from "react";

export const PrepareListContext = React.createContext();

export const PrepareListProvider = (props) => {
  const [listItems, setListItems] = useState([
    { text: "Book a flight", isChecked: false },
    { text: "Book hotel", isChecked: false },
    { text: "Find minyanim nearby", isChecked: false },
    { text: "Check for Kosher food nearby", isChecked: false },
    { text: "Pack (feel free to add more items to specify)", isChecked: false },
    {
      text: "Enjoy your stay - and remember to add a review for others!",
      isChecked: false,
    },
  ]);
  return (
    <PrepareListContext.Provider value={{ listItems, setListItems }}>
      {props.children}
    </PrepareListContext.Provider>
  );
};
