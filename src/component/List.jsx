var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1,"text":"ham"},{"id":2,"text":"cheese"},{"id":3,"text":"potatoes"}];

var List = React.createClass({
      render: function () {
          var listItems = ingredients.map((item)=> {
            return(
              <div>
                <ListItem key={item.id} ingredient={item.text} />
              </div>
            )
          });
      return(<ul>{listItems}</ul>);
  }

});

module.exports = List;
