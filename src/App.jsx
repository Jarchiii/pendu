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
    window.addEventListener("keyup", (e) =>{
      if (e.keyCode == 13) {
        this.initGame()

          }
      }
  )

    this.initGame()
  }

  clickLetter = (letter) => {
    console.log("=>" +letter)

    if (this.state.usedLetter.indexOf(letter)===-1){
      let attempt = this.state.attempt+1
      const usedLetter = [letter, ...this.state.usedLetter]

      if (this.state.currentWord.indexOf(letter)===-1){
        const attempt = this.state.attempt+1
      } 

      let win = 1
      for( let i=0; i<this.state.currentWord.length; i++){
        if (usedLetter.indexOf(this.state.currentWord[i]) == -1){
          win = 0
        }
      }

      if (attempt === 9 && win === 0){
        win = -1
      }



      this.setState({usedLetter, attempt, win})

    
    }

    // nombre de tentative : décrémenter


    // si la lettre fait partie du mot 
    // -> affichage lettre
    // -> changement d'état
    //    -> gagner ou pas gagner




  } 

  initGame = () => {
    console.log("jeu relancé")
    this.setState({currentWord:"licorne", usedLetter:[], win:0, attempt : 0})
  }


    render() {
        return (
          <div id="game">
            <h1>Pendu</h1>
            win = {this.state.win} <br/>
            attempt = {this.state.attempt}

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
