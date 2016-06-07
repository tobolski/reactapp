const request = require('axios');
const React = require('react');
const ReactDOM = require('react-dom');

const AddChat = React.createClass({
  propTypes: {
    /*

      1. Use proptypes to make sure that
      we require a prop 'url' that should
      be a string

     */
     url: React.PropTypes.string.isRequired
  },

  addChatMessage() {

    /*

      2. Use ReactDOM.findDOMNode to get
      the input field and the value

      3. Use a HTTP request library like
      super-agent, axios, fetch or jQuery.ajax
      to do a POST-request to the url supplied.
      The API accepts data of the form:

      {
        text: 'My new chat message!'
        name: 'Anonymous'
      }

      4. Reset the input field

     */
     let inputField = this.refs.newChatInput;
     request.post(this.props.url, {
               text: inputField.value,
               name: this.refs.newChatName.value
           });
       inputField.value = '';
  },

  handleSubmit(e) {
    /*

      5. Handle when the user presses
      the ENTER key in the input field

     */
     if (!(e.keyCode === 13)) {
      return;
     }

     this.addChatMessage();
  },

  render(){
    return (
      <div className="form-group">

        {/*

          6. Attach an onKeyDown listener
          to the input field that calls
          you handleSubmit function

        */}

        <input
          type="text"
          placeholder="Compose Message"
          ref="newChatInput"
          className="form-control"
          onKeyDown={this.handleSubmit}
        />

        {/*

          7. Add an additional input field
          so that you can supply a nickname/name as well

        */}

        <input
          type="text"
          placeholder="User name"
          ref="newChatName"
          className="form-control"
        />
      </div>
    );
  }
});

module.exports = AddChat;
