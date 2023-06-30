import React from "react";

class Api extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch(
"https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetched data </h1> {
				items.map((item) => (
				<ol style={{fontWeight:"bold"}} key = { item.id } >
					User_Name: { item.username },
					<br/>
					Full_Name: { item.name },
					<br/>
					User_Email: { item.email }
					<br/>
					</ol>
				))
			}
		</div>
	);
}
}

export default Api;
