class Hello extends React.Component {
  static defaultProps = {
    from: 'Me',
    bangs: 10
  }
  render(){
    let bangs =  "!".repeat(this.props.bangs);
    return <p>Hi {this.props.to}, this is {this.props.from}{bangs}</p>
  }
}