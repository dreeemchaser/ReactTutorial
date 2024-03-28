
function List(){

    const fruits = [ {name: "apple",calories: 92},
                                                {name: "banana",calories: 108},
                                                {name: "pineapple",calories: 192},
                                                {name: "kiwi",calories: 174}]
    fruits.sort(); //Doesn't work with numbers.
    // eslint-disable-next-line react/jsx-key
    const listItems = fruits.map(fruit => <li key={fruit.name}> {fruit.name} </li>);
    return(
      <ol>
          {listItems}
      </ol>
    );

}
export default List