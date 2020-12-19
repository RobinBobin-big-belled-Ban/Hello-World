import React from 'react'


export class MemGenerator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			topText: "",
			bottomText: "",
			randomImg: "http://i.imgflip.com/1bij.jpg",
			memesArr: [], 
		}
		this.onChangeHandler = this.onChangeHandler.bind(this)
		this.onClickHandler = this.onClickHandler.bind(this)
	}
	componentDidMount() {
		fetch('https://api.imgflip.com/get_memes') 
			.then(response => response.json())
			.then(response => {
				let memes = response.data.memes
				this.setState({memesArr: memes}) 
				console.log(this.state.memesArr[0].url)
			})
	}
	onChangeHandler(event) {
		const {name, value} = event.target
		this.setState({
			[name]: value,
		})
	}

	onClickHandler(event) {
		event.preventDefault()
		const randNum = Math.floor(Math.random() *
			this.state.memesArr.length)
		const randomMem = this.state.memesArr[randNum].url;
		this.setState({
			randomImg: randomMem,
			topText: "",
			bottomText: "",
		})
	}

	render() {
		const {topText, bottomText, randomImg} = this.state
		return(
			<div>
				<form className="meme-form" onSubmit={this.onClickHandler}>
					<input type="text" 
						name="topText"
						value={topText}
						onChange={this.onChangeHandler}
						placeholder="Top Text"
					/>
					<input type="text" 
						name="bottomText"
						value={bottomText}
						onChange={this.onChangeHandler}
						placeholder="Bottom Text"
					/>
					<button>Generate</button>
				</form>
				<div className="meme">
					<img src={randomImg} alt="" />
					<h2 className="top">{topText}</h2>
					<h2 className="bottom">{bottomText}</h2>
				</div>
			</div>
		)
	}
}