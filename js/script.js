"use strict";
const state = {
  beer1: "",
  beer2: "",
  beer3: ""
};

const beerOneRating = one => {
  state.beer1 = one.value;
};
const beerTwoRating = two => {
  state.beer2 = two.value;
};

const beerThreeRating = three => {
  state.beer3 = three.value;
};

const calculator = () => {
  const beerOne = {
    poor: 0,
    fair: 0,
    ok: 0,
    good: 0,
    must: 0
  };
  const beerTwo = {
    poor: 0,
    fair: 0,
    ok: 0,
    good: 0,
    must: 0
  };
  const beerThree = {
    poor: 0,
    fair: 0,
    ok: 0,
    good: 0,
    must: 0
  };

  switch (state.beer1) {
    case "beer1-one":
      beerOne.poor++;
      break;
    case "beer1-two":
      beerOne.fair++;
      break;
    case "beer1-three":
      beerOne.ok++;
      break;
    case "beer1-four":
      beerOne.good++;
      break;
    default:
      beerOne.must++;
  }
  console.log(beerOne);

  switch (state.beer2) {
    case "beer2-one":
      beerTwo.poor++;
      break;
    case "beer2-two":
      beerTwo.fair++;
      break;
    case "beer2-three":
      beerTwo.ok++;
      break;
    case "beer2-four":
      beerTwo.good++;
      break;
    default:
      beerTwo.must++;
  }
  console.log(beerTwo);

  switch (state.beer3) {
    case "beer3-one":
      beerThree.poor++;
      break;
    case "beer3-two":
      beerThree.fair++;
      break;
    case "beer3-three":
      beerThree.ok++;
      break;
    case "beer3-four":
      beerThree.good++;
      break;
    default:
      beerThree.must++;
  }
  console.log(beerThree);
  if (state.beer1 !== "" && state.beer2 !== "" && state.beer3 !== "") {
    axios
      .post("https://beer-rating-cc5ce.firebaseio.com/.json", {
        beerOne: beerOne,
        beerTwo: beerTwo,
        beerThree: beerThree
      })
      .then(response => {
        console.log(response);
        alert("Thank you for rating. Happy beering :)");
      })
      .catch(error => {
        console.log(error);
        alert("Oops, something wrong happened. Please double check. ");
      });
  }
};
