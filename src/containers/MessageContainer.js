import React, { Component } from 'react';

class MessageContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      messages: [
        {
          name: 'Hello World',
          author: 'Test'
        },
        {
          name: 'New Message has been posted',
          author: 'Admin'
        },
        {
          name: 'Message board is online!',
          author: 'Tony'
        }
      ];
    }
  }



  render () {
    return (

    );
  }
}

export default MessageContainer;
