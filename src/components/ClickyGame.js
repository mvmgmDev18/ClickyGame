import React, { Component } from 'react';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';
import Banner from './Banner';
import images from '../images';

class ClickyGame extends Component {
    state = {
        score: 0,
        highScore: 0,

        //class value stored to assign to navMessage
        navMsgColor: '',

        //Messages for intro, success, and failures.
        navMessage: 'Click an image to start!',

        //array of image urls
        allCharacters: this.shuffleArray(),

        //track clicked element.
        wasClicked: [],

        //container shakes if guess is incorrect.
        shake: false
    };


    clickEvent = this.checkClicked.bind(this);

    //Shuffle the array of images when DOM loads and an image is clicked.
    shuffleArray() {
        //copies the current array of characters to modify it by value and not by reference.
        const newArr = images.slice();

        //stores the shuffled array.
        const shuffleArr = [];

        //Random generator for the array
        while (newArr.length > 0) {
            shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
        }

        return shuffleArr;
    }

    checkClicked(clickedElem) {
        //Creates a copy of the wasClicked array to modify it by value, and not by reference. wasClicked stores all previous clicked images.
        const prevState = this.state.wasClicked.slice();

        //Shuffles the images.
        const shuffled = this.shuffleArray();

        //Score tracking.
        let score = this.state.score;
        let highScore = this.state.highScore;

        //If clicked item is not in wasClicked, then it hasn't been clicked and the score increments.
        if (!this.state.wasClicked.includes(clickedElem)) {
            //If current score = highScore, then new highScore value.
            if (score === highScore) {
                score++;
                highScore++;

                //if score != highScore, then score value increases.
            } else {
                score++;
            }

            // adds the clicked item to wasClicked to track that it has been clicked
            prevState.push(clickedElem);
        }

        //current score resets if element has been clicked 2x.
        if (this.state.wasClicked.includes(clickedElem)) {
            let score = 0;
            return this.setState({
                score: score,
                highScore: highScore,
                navMsgColor: 'incorrect',
                navMessage: 'Incorrect guess!',
                allCharacters: shuffled,
                wasClicked: [],
                shake: true
            });
        }

        // if this runs, then the same element has not been clicked twice and the score is increased
        this.setState({
            score: score,
            highScore: highScore,
            navMsgColor: 'correct',
            navMessage: 'You Guessed Correctly!',
            allCharacters: shuffled,
            wasClicked: prevState,
            shake: false
        });

        //Removes the green correct indicator on a successful click after .5s to re-render the class on each success.
        return setTimeout(() => this.setState({ navMsgColor: '' }), 500);
    }

    //Renders score to the navbar.
    //Passes tje randomized state.allCharacters array to Container to create a Character component for each image.
    //Passes the this.checkClicked down to container to pass to each Character component to be used for the click event.
    render() {
        const state = this.state;
        return (
            <div>
                <Navbar
                    score={state.score}
                    highScore={state.highScore}
                    navMessage={state.navMessage}
                    navMsgColor={state.navMsgColor}
                />
                <Banner />
                <Container
                    shake={state.shake}
                    characters={state.allCharacters}
                    clickEvent={this.clickEvent}
                />
                <Footer />
            </div>
        );
    }
}

export default ClickyGame;