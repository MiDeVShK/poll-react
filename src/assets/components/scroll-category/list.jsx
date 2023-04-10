import ButtonList from "../button-list/buttonList";
import "./list.css"

const List = (props) => {

  return (
    <ul ref={props.refToPut} id={`${props.id}`} className="category-name text-5xl flex gap-3 overflow-hidden cursor-pointer z-6 mb-4" style={{ whiteSpace: 'nowrap' }}>
        <ButtonList text='All' />
        <ButtonList text='Art' />
        <ButtonList text='Cars' />
        <ButtonList text='Cinema' />
        <ButtonList text='Daily Life' />
        <ButtonList text='Ecology' />
        <ButtonList text='Game' />
        <ButtonList text='Gastronomy' />
        <ButtonList text='Geography' />
        <ButtonList text='All' />
        <ButtonList text='Art' />
        <ButtonList text='Cars' />
        <ButtonList text='Cinema' />
        <ButtonList text='Daily Life' />
        <ButtonList text='Ecology' />
        <ButtonList text='Game' />
        <ButtonList text='Gastronomy' />
        <ButtonList text='Geography' />
        <ButtonList text='All' />
        <ButtonList text='Art' />
        <ButtonList text='Cars' />
        <ButtonList text='Cinema' />
        <ButtonList text='Daily Life' />
        <ButtonList text='Ecology' />
        <ButtonList text='Game' />
        <ButtonList text='Gastronomy' />
        <ButtonList text='Geography' />
        <ButtonList text='All' />
        <ButtonList text='Art' />
        <ButtonList text='Cars' />
        <ButtonList text='Cinema' />
        <ButtonList text='Daily Life' />
        <ButtonList text='Ecology' />
        <ButtonList text='Game' />
        <ButtonList text='Gastronomy' />
        <ButtonList text='Geography' />
    </ul>
        
  );
};

export default List;
