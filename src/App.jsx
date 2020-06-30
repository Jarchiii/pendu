import React, { Component } from "react";
import Keyboard from './Keyboard'
import CurrentWord from './CurrentWord'
import "./App.css";

class App extends Component {

  state = {
    wordCollection:["Wordpress", "gare", "train", "licorne"],
    currentWord:null,
    alphabet : "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split(""),
    usedLetter:[],
    win:0, // 0 :neutral  -1 Lost 1 Win
    attempt:0
  }

  componentDidMount(){
    this.initGame()
  }

  clickLetter = (letter) => {
    console.log("=>" +letter)

    if (this.state.usedLetter.indexOf(letter)===-1){
      const usedLetter = [letter, ...this.state.usedLetter]

      if (this.state.currentWord.indexOf(letter)===-1){
        const attempt = this.state.attempt+1
        this.setState({attempt})
      }


      this.setState({usedLetter})
    } else {
      console.log("la lettre est déja traité")
    }

    // nombre de tentative : décrémenter


    // si la lettre fait partie du mot 
    // -> affichage lettre
    // -> changement d'état
    //    -> gagner ou pas gagner




  } 

  initGame = () => {
    this.setState({currentWord:"licorne", usedLetter:[]})
  }


    render() {
        return (
          <div id="game">
            <h1>Pendu</h1>
            {this.state.attempt}

            {
              (this.state.currentWord !== null) && 
                    <CurrentWord 
                        currentWord={this.state.currentWord}
                        usedLetter={this.state.usedLetter}
                        />
            }
            <Keyboard 
              alphabet={this.state.alphabet}
              action={this.clickLetter}
              usedLetter={this.state.usedLetter}
            
            />
            </div>
        )
        ;
      }
}

export default App;
