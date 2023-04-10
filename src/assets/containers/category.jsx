import List from "../components/list/list";
import { useEffect, useRef } from "react";
import arrow from "../img/arrow.png"

const Category = (props) => {
  const listRef1 = useRef(null);
  const listRef2 = useRef(null);

  useEffect(() => {
    if (listRef2.current) {
      listRef2.current.scrollLeft = 4493;
    }

    const horizontalScroll       = document.querySelector("#top");
    const secondHorizontalScroll = document.querySelector("#bottom");

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
        })
    }

    listenAndScrollUp(horizontalScroll);
    listenAndScrollUp(secondHorizontalScroll);

    listenAndScrollDown(horizontalScroll, secondHorizontalScroll);
    listenAndScrollDown(secondHorizontalScroll, horizontalScroll);

  }, []);

  return (
    <div className="flex justify-evenly">
    <img src={arrow} alt="" className="w-10 h-10 self-center"/>
    <div className="w-3/4">
        <List refToPut={listRef1} id="top" />
        <List refToPut={listRef2} id="bottom" />
    </div>
    <img src={arrow} alt="" className="w-10 h-10 rotate-180 self-center"/>
</div>
  );
};

export default Category;
