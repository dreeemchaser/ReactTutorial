import List from "./List.jsx";
function App() {

    const fruits =
        [{id: 1, name: "apple", calories: 92},
        {id: 2,name: "banana",calories: 45},
        {id: 3,name: "pineapple",calories: 192},
        {id: 4,name: "kiwi",calories: 174},
        {id: 5,name: "coconut",calories: 145}];

    const vegetables =
        [{id: 6, name: "potatoes", calories: 120},
        {id: 7,name: "celery",calories: 22},
        {id: 8,name: "carrots",calories: 143},
        {id: 9,name: "corn",calories: 193},
        {id: 10,name: "broccoli",calories: 101}];

    const snacks =
            [{id: 11,name: "peanuts & raisins", calories: 200},
            {id: 12 ,name: "chocolate peanuts",calories: 49},
            {id: 13 ,name: "bread sticks",calories: 184},
            {id: 14 ,name: "dates",calories: 120},
            {id: 15 ,name: "yoghurt peanuts",calories: 178}];


    return(
        <>
            {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
            {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
            {snacks.length > 0 && <List items={snacks} category="Snacks"/>}
        </>);
}

export default App
