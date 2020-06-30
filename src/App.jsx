import React, { Component } from "react";
import Keyboard from './Keyboard'
import CurrentWord from './CurrentWord'
import Heart from './Heart'
import "./App.css";

class App extends Component {

  state = {
    wordCollection:["Wordpress", "gare", "train", "licorne"],
    currentWord:null,
    alphabet : "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split(""),
    usedLetter:[],
    win:0, // 0 :neutral  -1 Lost 1 Win
    attempt:0,
    maxAttempt:9
  }

  componentDidMount(){
    window.addEventListener("keyup", (e) =>{
      if (e.keyCode === 13) {
        this.initGame()

          }
      }
  )

    // this.initGame()
  }

  clickLetter = (letter) => {
    console.log("=>" +letter)

    if (this.state.usedLetter.indexOf(letter)===-1){
      let attempt = this.state.attempt
      const usedLetter = [letter, ...this.state.usedLetter]

      if (this.state.currentWord.indexOf(letter)===-1){
         attempt = this.state.attempt+1
      } 

      let win = 1
      for( let i=0; i<this.state.currentWord.length; i++){
        if (usedLetter.indexOf(this.state.currentWord[i]) === -1){
          win = 0
        }
      }

      if (attempt >= this.state.maxAttempt && win === 0){
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

  pickNewWord = () => {
    const randomIndex = Math.floor(Math.random() * this.state.wordCollection.length)
    return this.state.wordCollection[randomIndex]
  }

  initGame = () => {
    console.log("jeu relancé")
        this.setState({
                currentWord:this.pickNewWord(),
                usedLetter:[], 
                win:0, 
                attempt : 0
              })
  }


    render() {
        return (
          <div id="game">
            <h1>Pendu</h1>
           

            {
              (this.state.currentWord !== null) && 
                    <CurrentWord 
                        currentWord={this.state.currentWord}
                        usedLetter={this.state.usedLetter}
                        win={this.state.win}
                        />
            }

            {
              (this.state.currentWord !== null) &&
              <Heart 
                  attempt={this.state.attempt}
                  maxAttempt={this.state.maxAttempt}/>
            }

            {
              this.state.win === 0 && this.state.currentWord !== null &&
              <Keyboard 
              alphabet={this.state.alphabet}
              action={this.clickLetter}
              usedLetter={this.state.usedLetter}
            
            />
            }

         {
					//WIN MESSAGE
					this.state.win === 1 && 
						<p id="win_message">WIN !!!</p>
				}

				{
					//LOST MESSAGE
          this.state.win === -1 && 
          <p id="lost_message">LOST !!!</p>
				}
				



            {   (this.state.currentWord === null || this.state.win === 1 || this.state.win === -1) &&
            <button id="play_new_game" onClick={() => this.initGame()}>Nouvelle Partie</button>
            }
            </div>
        )
        ;
      }
}

export default App;
