// TODO
var groceryItems = ['kale', 'cucumber', 'cookies', 'dried mango', 'falafel'];


class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <ul>
        {this.props.items} 
      </ul>
    );
  }
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      done: false,
      over: false
    };
  }


  onListItemClick(event) {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover(event) {
    this.setState({
      over: true
    });
  }

  onListItemEndHover(event) {
    this.setState({
      over: false
    });
  }

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.over ? 'bold' : 'normal'
    }

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseEnter={this.onListItemHover.bind(this)} 
      onMouseLeave={this.onListItemEndHover.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryList = () => (
  <div>
    <h2>Grocery List</h2>
    <List items={makeList(groceryItems)}/> 
  </div>   
);



// var List = (props) => (
//   <ul>
//     {props.items} 
//   </ul>
// );

var Cucumber = () => (
  <li>Cucumber</li>
);

var Cookie = () => (
  <li>Cookie</li>
);

// var GroceryListItem = (props) => {
//   var onListItemClick = (event) => {
//     console.log('clicked yo');
//   }
//   return (
//     <li onClick={onListItemClick}>{props.item}</li>
//   );
// };

var makeList = (items) => {
  return items.map(function(item) {
    return(<GroceryListItem item={item} />);
  });
};

  ReactDOM.render(<GroceryList />, document.getElementById("app"));
  // ReactDOM.render(<List />, document.getElementById("list"));
