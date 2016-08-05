import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      err: ''
    }
    this.update = this.update.bind(this);
  }
  update(e){
    let code = e.target.value;
    try {
      this.setState({
        output: babel.transform(code, {
          stage: 0,
          loose: 'all'
        }).code,
        err: ''
      })
    }
    catch(err){
      this.setState({err: err.message})
    }
  }
  render(){
    return(
      <div>
        {this.state.err.length > 1 ? <header className="err">{this.state.err}</header> : <header className="noErr">No Errors, Go you!</header>}
        <div className="container">
        <textarea
          onChange={this.update}
          defaultValue={this.state.input}>
        </textarea>
        <pre>
          {this.state.output}
        </pre>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
