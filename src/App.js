//Dependency imports
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/Card";
import Footer from "./components/Footer";
import donut from "./donuts.json";
import "./App.css";

//Set initial state
class App extends Component {
  state = {
    donut,
    clickedDonuts: [],
    score: 0
  };

  //Remove a donut from the array
  imageClick = event => {
    const currentDonut = event.target.alt;
    const donutAlreadyClicked =
      this.state.clickedDonuts.indexOf(currentDonut) > -1;

    //Click on an already clicked donut - game restarts
    if (donutAlreadyClicked) {
      this.setState({
        donut: this.state.donut.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedDonuts: [],
        score: 0
      });
      alert("That one was already chosen - try again!");

      //Click on an unclicked card - score increments and cards are mixed
    } else {
      this.setState(
        {
          donut: this.state.donut.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedDonuts: this.state.clickedDonuts.concat(
            currentDonut
          ),
          score: this.state.score + 1
        },
        //When the last unclicked card is chosen, game has been won and the user is alerted.        
        () => {
          if (this.state.score === 12) {
            alert("Well done!");
            this.setState({
              donut: this.state.donut.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedDonuts: [],
              score: 0
            });
          }
        }
      );
    }
  };

  //Render the components
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.donut.map(donut => (
            <FriendCard
              imageClick={this.imageClick}
              id={donut.id}
              key={donut.id}
              image={donut.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;