import { useState, useContext } from "react";
import { PrepareListContext } from "../State/PrepareList/context";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Checkbox } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export const Prepare = () => {
  const { listItems, setListItems } = useContext(PrepareListContext);
  const [inputText, setInputText] = useState("");
  //const [listItems, setListItems] = useState(["Test item"]);

  function addListItem() {
    setListItems([...listItems, { text: inputText, isChecked: false }]);
    setInputText("");
  }

  function deleteListItem(deletedItem) {
    setListItems(listItems.filter((item) => item.text !== deletedItem));
  }

  function handleChange(itemToCheck) {
    const updatedItems = listItems.map((item) => {
      if (item.text === itemToCheck) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });

    setListItems(updatedItems);
  }

  return (
    <div id="inputDiv">
      <h1>Prepare For Your Trip!</h1>

      <p>
        Below you'll find a helpful list of activities you might want to take
        care of before you go. Make sure to add your own and personalize the
        experience!
      </p>
      <TextField
        id="outlined-basic"
        label="Remember to..."
        variant="outlined"
        onChange={(event) => setInputText(event.target.value)}
      />
      <br />
      <br />
      <Button variant="contained" onClick={addListItem} size="large">
        Add
      </Button>

      {listItems.map((item) => (
        <PrepareListItem
          text={item.text}
          isChecked={item.isChecked}
          handleChange={handleChange}
          deleteItem={deleteListItem}
        />
      ))}
    </div>
  );
};

const PrepareListItem = (props) => {
  const label = { inputProps: { "aria-label": "" } };

  return (
    <Grid container spacing={0} className="grid">
      <Grid item xs={0}>
        <Checkbox
          {...label}
          checked={props.isChecked}
          color="secondary"
          name="text"
          value=""
          onChange={() => props.handleChange(props.text)}
        />
      </Grid>
      <Grid item xs={1}>
        {props.text}
      </Grid>
      <Grid item xs={1}>
        <Button onClick={() => props.deleteItem(props.text)}>
          {" "}
          <ClearIcon />{" "}
        </Button>
      </Grid>
    </Grid>
  );
};
