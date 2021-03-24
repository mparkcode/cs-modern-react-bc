class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Your friends:</h1>
        <Friends 
          name="Elton"
          hobbies={['Piano', 'Singing', 'Daning']}  
        />

        <Friends 
          name="Frieda"
          hobbies={['Smoking', 'Drinking', 'Fighting']}  
        />
        

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));