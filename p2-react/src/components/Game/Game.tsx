import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import CountDownTimer, {ICountdown} from "./CountDownTimer"
import { getRandomString, getWord } from "../../actions/GameActions"
import { WordDisplay } from "./WordDisplay"
import { updateUser } from "../../actions/UserActions"

import "./Game.css"

export const Game: React.FC<any> = (props) => {

    const appState = useSelector<any, any>((state) => state);
    const uScore = useSelector<any, any>((state) => state.user.score);

    const dispatch = useDispatch();

    let [word, setWord] = useState('')
    let [score, setScore] = useState(0)

    const getRS = async () => {

        await dispatch(
            getRandomString(appState.user) as any
        )

    }


    const handleChange = (e:any) => {
        if(e.target.name === "answerInput"){

            setWord(e.target.value)
            console.log(word)
            setScore(e.target.value.length)
            console.log(score)
        }

    }

    const loadWord = async () => {
        await dispatch(
            getWord(word) as any
        )
    }

    const showScore = async () => {


        await dispatch(
            updateUser(appState.user, score) as any
        )
        console.log(appState.user)
    }

    useEffect(()=>{
        if(appState.word.isValid === true){

            showScore();
        }

    },[appState.word.word])

    let string: string = appState.ml.mixedLetters
    console.log(appState.ml)
    console.log("This is our current appstate ^")



    return(
        <div className="border-around-game" >
            <div className="container">
                <h3 className="header">TIME REMAINING</h3>
                <CountDownTimer minutes={1} seconds={60}  />
            </div>
            <div className="container">
                <h3 onLoad={handleChange}>YOUR RANDOM STRING</h3>
                <div >{string}</div>


            </div>
            <div className="container">
                <h3>GUESS HERE!</h3>
                <input type="text" name="answerInput" className="answerInput" onChange={handleChange}/>
                <button className="wordButton" onClick={loadWord}>SUBMIT</button>
            </div>
            <div className="table-div">
                <table>
                    <tbody>
                    <tr>
                        <th>Its a word</th>
                    </tr>
                    <tr>
                        <td>
                            {appState.word.word}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                    <tr>
                        <th>Not a word</th>
                    </tr>
                    <tr>
                        <td>
                            {appState.word.Notword}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h3>SCORE</h3>
                <h3>{appState.user.score}</h3>
            </div>
        </div>



    );

}