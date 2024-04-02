//array.sort() Doesn't work with numbers.
function ListFilteringThroughLists() {

//!  Sorting by name:
    //    fruits.sort((a,b) => {a.name.localeCompare(b.name)}); // ALPHABETICAL ORDER
//   fruits.sort((a,b) => {b.name.localeCompare(a.name)}); // REVERSE ALPHABETICAL ORDER
//! Sort by calories:
//    fruits.sort( (a,b) => a.calories - b.calories); //numeric order
//    fruits.sort( (a,b) => b.calories - a.calories); //reverse numeric order

//? filter by a certain CRITERIA:
// Low Calories
//! const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

// High Calories
//    const highCalFruits = fruits.filter(fruit => fruit.calories > 100);
    /*
        const listItems = fruits.map(fruits =>
            <li
                key= {fruits.id} >
                     {fruits.name.toUpperCase()}: &nbsp;
                     {fruits.calories}
            </li>);

        return(
          <ol>{listItems}</ol>
        );

    }
    export default ListFilteringThroughLists
     */
}