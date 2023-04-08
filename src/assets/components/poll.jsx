import React, { useEffect } from "react";
import Share from "./share/share";


const Poll = (props) => {

    useEffect(() => {
    
        function randomizeBorder(a, b, c) {
            const result = Math.floor(Math.random() * (a - b + c)) + b;
            return result;
        }
        const articles = document.querySelectorAll("#poll");
    
        articles.forEach((article) => {
          article.style.borderTopLeftRadius = `${randomizeBorder(
            255,
            155,
            1
          )}px ${randomizeBorder(50, 10, 1)}px`;
          article.style.borderTopRightRadius = `${randomizeBorder(
            50,
            10,
            1
          )}px ${randomizeBorder(255, 155, 1)}px`;
          article.style.borderBottomLeftRadius = `${randomizeBorder(
            255,
            155,
            1
          )}px ${randomizeBorder(50, 10, 1)}px`;
          article.style.borderBottomRightRadius = `${randomizeBorder(
            50,
            10,
            1
          )}px ${randomizeBorder(255, 155, 1)}px`;
        });
      }, []);
   
    return (
        <article id="poll" className=" flex-1 p-4 border-solid border-4 border-grayPoll bg-white w-96 h-fit mx-3 max-w-lg" style={{minWidth: 40 + "%"}}
        >
            <div id="poll-header" className="flex justify-between">
                <p className="text-3xl">{props.category}</p>
                <p className="text-xl">{props.author}</p>
            </div>
            <h1 className="text-4xl">{props.question}</h1>
            <div>
             
              <div className="flex items-center mb-2">
              <input type="radio" name="" />
              <div className="w-full bg-gray-200 rounded-full mx-2">
                <div className="bg-redPoll text-s font-medium  text-center p-1.5 leading-none rounded-full" style={{width: 45 + "%", border: "3px solid #e17055"}}>  <p >{props.answerA}</p></div>
              </div>
              <span>55%</span>
            </div>
            </div>
            <div>
            <div className="flex items-center mb-2">
              <input type="radio" name="" />
              <div className="w-full bg-gray-200 rounded-full mx-2">
                <div className="bg-greenPoll text-s font-medium  text-center p-1.5 leading-none rounded-full" style={{width: 55 + "%", border: "3px solid #00b894"}}> <p >{props.answerB}</p></div>
              </div>
                <span>55%</span>
              </div>
            </div>
            <div id="poll-footer" className="flex items-center justify-between">
              <Share />
              <p>147 votes</p>
            </div>
        </article>
    )
}

export default Poll;