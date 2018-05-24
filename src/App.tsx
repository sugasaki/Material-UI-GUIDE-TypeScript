import * as React from 'react';
import './App.css';
import DecoratedUnionProps from './components/DecoratedUnionProps';



class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <DecoratedUnionProps category={'book'} author={'this is a book!'} />
        <DecoratedUnionProps category={'painting'} artist={'I am a big artist!'} />
      </div>
    );
  }
}

export default App;
