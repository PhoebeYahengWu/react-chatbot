import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';


class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! Have you messaged Phoebe today?',
            trigger: 'message',
          },
          {
            id: 'message',
            options: [
              { value: 'yes', label: 'Yes', trigger: '5' },
              { value: 'no', label: 'No', trigger: '6' },
            ],
          },
          {
            id: '5',
            message: 'Did you say you loves her?',
            trigger: 'like',
          },
          {
            id: 'like',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'charm' },
              { value: 'no', label: 'No', trigger: '6' },
            ],
          }, 
          {
            id: 'charm',
            message: 'You are so charming! Hope you have a great day!',
            end: true,
          },
          {
            id: '6',
            message: "Bad boy! I don't want to talk with you! Go message her. Bye!",
            end: true,
          }
        ]}
      />
    );
  }
}

export default SimpleForm;