import { useEffect, useRef } from "react";
import { useMediaPredicate } from "react-media-hook";
import { motion } from "framer-motion"
import List from "../components/scroll-category/list";
import Select from "../components/select-category/select";
import arrow from "../img/arrow.png";
import arrowRight from "../img/arrowRight.png"

const Category = (props) => {
  const listRef1 = useRef(null);
  const listRef2 = useRef(null);
  const smallerThan1200 = useMediaPredicate("(max-width: 1200px)");
  
  useEffect(() => {
    const horizontalScroll = document.querySelector("#top");
    const secondHorizontalScroll = document.querySelector("#bottom");
    if (listRef2.current) {
      listRef2.current.scrollLeft = 4493;
    }

    function listenAndScrollUp(x) {
      x.addEventListener("wheel", function (event) {
        event.preventDefault();
        x.scrollLeft += event.deltaY;
      });
    }

    function listenAndScrollDown(x, y) {
      x.addEventListener("wheel", function (event) {
        event.preventDefault();
        y.scrollLeft -= event.deltaY;
      });
    }

    listenAndScrollUp(horizontalScroll);
    listenAndScrollUp(secondHorizontalScroll);

    listenAndScrollDown(horizontalScroll, secondHorizontalScroll);
    listenAndScrollDown(secondHorizontalScroll, horizontalScroll);
  }, []);
  
  const moveRight = document.querySelector("#top");
    const moveLeft = document.querySelector("#bottom");

  const handleClickRight = () => {
    moveRight.scrollBy(100, 0);
    moveLeft.scrollBy(-100, 0);
  };

  const handleClickLeft = () => {
    moveRight.scrollBy(-100, 0);
    moveLeft.scrollBy(100, 0);
  };


  if (smallerThan1200) {
    return <Select />;
  }

  return (
    <div className="flex justify-evenly">
      <motion.img
        onClick={handleClickLeft}
        src={arrow}
        alt="Left Arrow"
        className="w-10 h-10 self-center"
        whileTap={{ scale: 0.6 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div style={{width: 1200 + 'px'}}>
        <List refToPut={listRef1} id="top" />
        <List refToPut={listRef2} id="bottom" />
      </motion.div>
      <motion.img
        onClick={handleClickRight}
        src={arrowRight}
        alt="Right arrow"
        className="w-10 h-10 self-center"
        whileTap={{ scale: 0.6 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default Category;
