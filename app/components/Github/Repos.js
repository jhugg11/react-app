var React = require('react');

var Repos = React.createClass({
  render: function() {
    return (
      <div> REPOS
        <p>{this.props.repos}</p>
      </div>

    )
  }
});

module.exports = Repos;

