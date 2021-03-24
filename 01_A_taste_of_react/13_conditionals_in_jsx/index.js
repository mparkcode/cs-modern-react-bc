const getNum = () => {
	return Math.floor(Math.random() * 10) + 1;
}



class NumPicker extends React.Component{
	render(){
		const num = getNum()
		return (
			<div>
				<h2>Your number is.... {num}</h2>
				<p>{num == 7 ? 'Congrats' : 'Try again'}</p>
			</div>
		)
	};
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));