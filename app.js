// TODO
var groceryItems = ['kale', 'cucumber', 'cookies', 'dried mango', 'falafel'];

var GroceryList = () => (
  <div>
    <h2>Grocery List</h2>
    <List items={makeList(groceryItems)}/> 
  </div>   
);



var List = (props) => (
  <ul>
    {props.items}
  </ul>
);

var Cucumber = () => (
  <li>Cucumber</li>
);

var Cookie = () => (
  <li>Cookie</li>
);

var GroceryListItem = (props) => {
  var onListItemClick = (event) => {
    console.log('clicked yo');
  }
  return (
    <li onClick={onListItemClick}>{props.item}</li>
  );
};


var makeList = (items) => {

  return items.map(function(item) {
    return(<GroceryListItem item={item} />);
  });
};

  ReactDOM.render(<GroceryList />, document.getElementById("app"));
  // ReactDOM.render(<List />, document.getElementById("list"));
