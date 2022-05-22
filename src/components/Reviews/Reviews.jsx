import { useContext, useState } from "react";
import { CountryContext } from "../State/Country/context";
import { ReviewContext } from "../State/Reviews/context";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled as styled1 } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { ReviewActions } from "../State/Reviews/reducer";

export const Reviews = () => {
  const { reviewState, reviewDispatch } = useContext(ReviewContext);
  const { statefulCountry, countryDispatch } = useContext(CountryContext);

  let reviews = [];
  if ([statefulCountry.name] in reviewState.reviews) {
    reviews = reviewState.reviews[statefulCountry.name];
  }

  const [reviewText, setReviewText] = useState("");

  function addReview() {
    reviewDispatch({
      type: ReviewActions.ADD,
      review: reviewText,
      countryName: statefulCountry.name,
    });
  }

  return (
    <div
      sx={{
        justifyContent: "center",
      }}
    >
      <br />

      <h1>Been to {statefulCountry.name}?</h1>

      <h3>Leave a Review!</h3>

      <br />
      <div
        sx={{
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            margin: "auto",
          }}
        >
          <TextField
            id="standard-textarea"
            label="Add a review..."
            placeholder="Review"
            multiline
            variant="standard"
            onChange={(event) => setReviewText(event.target.value)}
          />
          <Fab
            color="primary"
            aria-label="add"
            size="small"
            onClick={addReview}
          >
            <AddIcon />
          </Fab>
        </Box>
      </div>

      <Divider></Divider>
      <br />

      <h1>What people are saying about {statefulCountry.name}...</h1>

      <div>
        {reviews.map((review) => (
          <ReviewItem text={review} />
        ))}
      </div>
    </div>
  );
};

const ReviewItem = (props) => {
  const Item = styled1(Paper)(({ theme }) => ({
    backgroundColor: "#c5ceed",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  }));

  return (
    <Stack spacing={2} className="grid" direction="column">
      <Item>{props.text}</Item>
      <br />
    </Stack>
  );
};
