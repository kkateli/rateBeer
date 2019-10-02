"use strict";
const state = {
  beer1: "",
  beer2: "",
  beer3: "",
  ifRated: [],
  ip: ""
};

//get user broswer info

function init() {
  if (window.requestIdleCallback) {
    requestIdleCallback(function() {
      Fingerprint2.get(function(components) {
        async function compareIp(){
          state.ip = components[0].value;
        }
        compareIp().then(
          axios
          .get("https://beer-rating-cc5ce.firebaseio.com/.json")
          .then(response => {
            // handle success
            let ids = Object.keys(response.data);
            for (let i of ids) {
              if (response.data[i].ip === state.ip) {
                state.ifRated.push("Rated");
              }
            }
            console.log(state.ip);
            console.log(state.ifRated);
          })
          .catch(error => {
            // handle error
            console.log(error);
          })
        )
      });
    });
  } else {
    setTimeout(function() {
      Fingerprint2.get(function(components) {
        async function compareIp(){
          state.ip = components[0].value;
        }
        compareIp().then(
          axios
          .get("https://beer-rating-cc5ce.firebaseio.com/.json")
          .then(response => {
            // handle success
            let ids = Object.keys(response.data);
            for (let i of ids) {
              if (response.data[i].ip === state.ip) {
                state.ifRated.push("Rated");
              }
            }
            console.log(state.ip);
            console.log(state.ifRated);
          })
          .catch(error => {
            // handle error
            console.log(error);
          })
        )
      });
    }, 500);
  }
}
init();

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

  if (state.beer1 !== "" && state.beer2 !== "" && state.beer3 !== "" && state.ifRated.length===0) {
    axios
      .post("https://beer-rating-cc5ce.firebaseio.com/.json", {
        beerOne: beerOne,
        beerTwo: beerTwo,
        beerThree: beerThree,
        ip: state.ip
      })
      .then(response => {
        console.log(response);
        alert("Thank you for rating. Happy beering :)");
      })
      .catch(error => {
        console.log(error);
        alert("Oops, something wrong happened. Please double check. ");
      });
  } else {
    alert("Oops, something wrong happened. Please double check. ");
  }
};
