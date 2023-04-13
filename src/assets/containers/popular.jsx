import { useEffect, useState } from "react";
import Button from "../components/buttons/button";
import Poll from "../components/poll";
import Title from "../components/title-category/title";
import { useLocation } from "react-router-dom";
import api from "../api";

const Popular = (props) => {
  const [polls, setPolls] = useState([]);
  const location = useLocation();

  const handleButton = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    api.getPolls().then((data) => {
      setPolls(data);
    });
  }, []);

  let content;

  if (location.pathname === "/") {
    content = <Title text="Most Popular" />;
  } else if (location.pathname === "/category") {
    content = <Title text="Une category" />;
  }

  function PollsContainer({ polls }) {
    const [currentPage, setCurrentPage] = useState(1);
    const pollsPerPage = 4;

    function showPolls(pageNumber) {
      setCurrentPage(pageNumber);
    }

    const pageCount = Math.ceil(polls.length / pollsPerPage);
    const startIndex = (currentPage - 1) * pollsPerPage;
    const endIndex = startIndex + pollsPerPage;
    const pollsToShow = polls.slice(startIndex, endIndex);

    function createPaginationButtons() {
      const buttons = [];

      for (let i = 1; i <= pageCount; i++) {
        buttons.push(
          <div key={i} onClick={() => showPolls(i)}>
            <span  className="px-3 py-2 leading-tight text-gray-500 ">
              {i}
            </span>
          </div>
        );
      }

      return buttons;
    }

    return (
      <>
        <section className="mb-4 relative z-5 flex flex-col items-center">
          <template className="flex justify-between mx-10 w-3/4">
            {content}
            <Button text="Create Poll" />
          </template>
          <template className="poll-container flex justify-center gap-6 flex-wrap mt-4">
            {pollsToShow.map((poll) => (
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
          <div id="pagination-container" className="mt-5 flex cursor-pointer">
            {createPaginationButtons()}
          </div>
        </section>
      </>
    );
  }

  return <PollsContainer polls={polls} />;
};

export default Popular;
