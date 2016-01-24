var Profile = React.createClass({
	render: function() {
		return (
			<div style={divStyleProfile}>
				<h1>Profile</h1>
			</div>
		);
	}
});

var Project = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Project</h1>
			</div>
		);
	}
});

var divStyleProfile = {
	color: 'red',
	WebkitTransition: 'all', // note the capital 'W' here
	msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

ReactDOM.render(
	<Profile />,
	document.getElementById('profile')
);

ReactDOM.render(
	<Project />,
	document.getElementById('projects')
);