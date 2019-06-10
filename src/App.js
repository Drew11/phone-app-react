import React from 'react';
import MyHeader from './components/MyHeader'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import './App.css';

class App extends React.Component{

  constructor(props){
      super(props);

      this.state = {
          counter:0,
          date: setInterval(()=>new Date().toString(),1000),
      };

      this.handleClick = this.handleClick.bind(this);
  }

  handleClick = ()=>{
       this.setState({counter:this.state.counter+1});
  };


 render(){
      let {counter} = this.state;
      console.log(this.state.date);
      return (
          <div>
              <MyHeader greetName={'Evgen'} handleClick={this.handleClick} />
              <h2>{ counter }</h2>
              <span className={'time'}>
                  {setInterval(()=>new Date().toString(),1000)}
              </span>
              <Navigation />
              <main>
                  <p>some content</p>
              </main>
              <Footer />
          </div>
      );
  }
}

//
// function render(){
//     document.querySelector('.time').innerText = new Date().toString()
// }
//  setInterval(()=>render(),1000);
export default App;

