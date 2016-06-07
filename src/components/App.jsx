/**
 * /src/components/App.jsx
 */

const React = require('react');

const App = React.createClass({
  render() {
    console.log('Where am i...?'); // add a log statement

    const superStyles = {
      backgroundColor: 'yellow'
    };

    return (
      <div style={superStyles}>
        <h1>My Amazing React App!</h1>
      </div>
    );
  }
});

module.exports = App;
