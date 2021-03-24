class App extends React.Component {
  render(){
    return (
      <div>
        <Hello 
          to="Ringo"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));