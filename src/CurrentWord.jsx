import React from 'react'

function CurrentWord({currentWord , usedLetter}) {

    return (
        <div>
           {
           currentWord.split('').map(
               (letter, key) => {
                   let status = "finded"

                   if (usedLetter.indexOf(letter) === -1) {
                       status= "notfinded"
                   }


                   return <span key={"letter"+key} className={status}>
                         {status === "finded" ? letter : "?"}
                   </span>
               }
           )
           }
        </div>
    )
}

export default CurrentWord