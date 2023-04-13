import { useEffect, useState } from "react";
import Button from "../components/buttons/button";
import Poll from "../components/poll";
import Title from "../components/title-category/title";
import { useLocation } from "react-router-dom";
import api from "../api";

const Popular = (props) => {

  const location = useLocation();
  let content;
  if (location.pathname === "/") {
    content = <Title text="Most Popular" />;
  } else if (location.pathname === "/category") {
    content = <Title text="Une category" />;
  }

  const [polls, setPolls] = useState([]);

  useEffect(() => {
    api.getPolls().then((data) => {
      setPolls(data);
    });
  }, []);

  return (
    <section className="mb-4 relative z-5">
      <template className="flex justify-between mx-10">
        {content}
        <Button text="Create Poll" />
      </template>
      <template className="flex justify-center gap-6 flex-wrap mt-4">
        {polls.map((poll) => (
          <Poll
            key={poll.id}
            category={poll.category.name}
            author={poll.author.pseudo}
            question={poll.question}
            answerA={poll.choice_a}
            answerB={poll.choice_b}
            answerAPourcent={poll.result_a}
            answerBPourcent={poll.result_b}
            resultTotal={poll.resultTotal}
          />
        ))}
      </template>
    </section>
  );
};


export default Popular;
