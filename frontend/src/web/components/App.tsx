import React from 'react';

interface IAppProps {
  text: string;
}

export const App: React.SFC<IAppProps> = ({ text }) => (
  <div>Hello and welcome to my new microservices app: {text}</div>
);
