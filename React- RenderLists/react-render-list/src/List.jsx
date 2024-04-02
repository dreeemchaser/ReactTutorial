import PropTypes from "prop-types";
function List(props){

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(itemList => <li
                                            key= {itemList.id} >
                                                 {itemList.name.toUpperCase()}: &nbsp;
                                                 {itemList.calories}
                                                              </li>);

    return (
        <>
            <h3 className={"list-category"}> {category} </h3>
            <ol  className={"list-items"}> {listItems}</ol>
        </>);
}

List.defaultProps = {
    category: "Category",
    items: []
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number
    })),
}

export default List;