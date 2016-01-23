var ProjectBlock = React.createClass({

	loadInfoFromEndPoint: function() {
		console.log(this.props.url);
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadInfoFromEndPoint();
		setInterval(this.loadInfoFromEndPoint, this.props.pollInterval);
	},
	render: function() {
		return (
			<div className="project_block">
			  <h1>Project :</h1>
			  <h2>{this.state.data.project_name}</h2>
			</div>
		);
	}
});

React.render(
	<ProjectBlock url="http://localhost:9000/project_info" pollInterval={2000} />,
	document.getElementById('example')
);