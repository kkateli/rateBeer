"use strict";
const state = {
  beer1: "",
  beer2: "",
  beer3: "",
  beer4: "",
  beer5: "",
  beer6: "",
  beer7: "",
  beer8: "",
  beer9: "",
  beer10: "",
  beer11: "",
  beer12: "",
  beer13: "",
  beer14: "",
  beer15: "",
  beer16: "",
  beer17: "",
  beer18: "",
  ifRated: [],
  ip: ""
};

//get user broswer info

function init() {
  if (window.requestIdleCallback) {
    requestIdleCallback(function() {
      Fingerprint2.get(function(components) {
        async function compareIp() {
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
        );
      });
    });
  } else {
    setTimeout(function() {
      Fingerprint2.get(function(components) {
        async function compareIp() {
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
        );
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

const beerFourRating = four => {
  state.beer4 = four.value;
};

const beerFiveRating = five => {
  state.beer5 = five.value;
};

const beerSixRating = six => {
  state.beer6 = six.value;
};

const beerSevenRating = seven => {
  state.beer7 = seven.value;
};

const beerEightRating = eight => {
  state.beer8 = eight.value;
};

const beerNineRating = nine => {
  state.beer9 = nine.value;
};

const beerTenRating = ten => {
  state.beer10 = ten.value;
};

const beerElevenRating = eleven => {
  state.beer11 = eleven.value;
};

const beerTwelveRating = twelve => {
  state.beer12 = twelve.value;
};

const beerThirteenRating = thirteen => {
  state.beer13 = thirteen.value;
};

const beerFourteenRating = fourteen => {
  state.beer14 = fourteen.value;
};

const beerFifteenRating = fifteen => {
  state.beer15 = fifteen.value;
};

const beerSixteenRating = sixteen => {
  state.beer16 = sixteen.value;
};

const beerSeventeenRating = seventeen => {
  state.beer17 = seventeen.value;
};

const beerEighteenRating = eighteen => {
  state.beer18 = eighteen.value;
};

const changeDivAfterClick=()=>{
  document.getElementById("selections").innerHTML = "<div class='thankyou-wrap'><strong><p class='thankyou'>Thank you!</p></strong></div>";
}

const calculator = () => {
  if (state.ifRated.length === 0) {
    if (
      state.beer1 !== "" ||
      state.beer2 !== "" ||
      state.beer3 !== "" ||
      state.beer4 !== "" ||
      state.beer5 !== "" ||
      state.beer6 !== "" ||
      state.beer7 !== "" ||
      state.beer8 !== "" ||
      state.beer9 !== "" ||
      state.beer10 !== "" ||
      state.beer11 !== "" ||
      state.beer12 !== "" ||
      state.beer13 !== "" ||
      state.beer14 !== "" ||
      state.beer15 !== "" ||
      state.beer16 !== "" ||
      state.beer17 !== "" ||
      state.beer18 !== ""
    ) {
      axios
        .post("https://beer-rating-cc5ce.firebaseio.com/.json", {
          beerOne: state.beer1,
          beerTwo: state.beer2,
          beerThree: state.beer3,
          beerFour: state.beer4,
          beerFive: state.beer5,
          beerSix: state.beer6,
          beerSeven: state.beer7,
          beerEight: state.beer8,
          beerNine: state.beer9,
          beerTen: state.beer10,
          beerEleven: state.beer11,
          beerTwelve: state.beer12,
          beerThirteen: state.beer13,
          beerFourteen: state.beer14,
          beerFifteen: state.beer15,
          beerSixteen: state.beer16,
          beerSeventeen: state.beer17,
          beerEighteen: state.beer18,
          ip: state.ip
        })
        .then(response => {
          console.log(response);
          changeDivAfterClick();
        })
        .catch(error => {
          console.log(error);
          alert("Oops, something wrong happened. Please double check. ");
        });
    } else {
      alert("Please vote for your beers");
    }
  } else {
    alert("You only can vote once. Thank you ");
  }
};
