import "./list.css"

const List = (props) => {

  return (
    <ul ref={props.refToPut} id={`${props.id}`} className="category-name text-5xl flex gap-3 overflow-hidden cursor-pointer z-6 mb-4" style={{ whiteSpace: 'nowrap' }}>
        <li>All</li>
        <li>Art</li>
        <li>Cars</li>
        <li>Cinema</li>
        <li>Daily Life</li>
        <li>Ecology</li>
        <li>Game</li>
        <li>Gastronomy</li>
        <li>Geography</li>
        <li>All</li>
        <li>Art</li>
        <li>Cars</li>
        <li>Cinema</li>
        <li>Culture</li>
        <li>Daily Life</li>
        <li>Ecology</li>
        <li>Game</li>
        <li>Gastronomy</li>
        <li>Geography</li>
    </ul>
        
  );
};

export default List;
