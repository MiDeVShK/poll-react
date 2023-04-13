import React, { useEffect } from "react";
import FormPoll from "./form-poll/formPoll";

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
    <article
      id="poll"
      className=" flex-1 p-4 border-solid border-4 border-grayPoll bg-white w-96 h-fit mx-3 max-w-lg"
      style={{ minWidth: 40 + "%" }}
    >
      <div id="poll-header" className="flex justify-between">
        <p className="text-3xl">{props.category}</p>
        <p className="text-xl">{props.author}</p>
      </div>
      <h1 className="text-4xl">{props.question}</h1>
      <FormPoll 
      answerA={props.answerA} 
      answerB={props.answerB} 
      resultTotal={props.resultTotal}/>
    </article>
  );
};

export default Poll;
