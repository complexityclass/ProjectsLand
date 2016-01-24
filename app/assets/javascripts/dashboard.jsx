var Profile = React.createClass({
	render: function() {
		return (
			<div style={divStyleProfile}>
				<h1>Projects land</h1>
			</div>
		);
	}
});

var Project = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Log in</h3>
			</div>
		);
	}
});

var AuthForm = React.createClass({

	getInitialState: function() {
		return {value: 'enter login'};
	},
	
	handleChange: function(event) {
		this.setState({value: event.target.value});
	},

	handleSubmit: function(event) {

		event.preventDefault();
		var login = React.findDOMNode(this.refs.login).value.trim();
		var pass = React.findDOMNode(this.refs.pass).value.trim();

		if (!login || !pass) {
			return;
		}

		var authURL = "http://localhost:9000/auth?login=" + login + "&pass=" + pass;

		$.ajax({
			url: authURL,
			method: 'POST',
			dataType: 'json',
			cache: false,
			success: function(data) {
				console.log(data)
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(authURL, status, err.toString());
            }.bind(this)
		});

		React.findDOMNode(this.refs.login).value = '';
        React.findDOMNode(this.refs.pass).value = '';
        
        return;
	},


	render: function() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
			<input type="text" placeholder="Your login" ref="login" />
			<input type="text" placeholder="Your password" ref="pass" />
			<input type="submit" value="go" />
			</form>
		);
	}
});

var divStyleProfile = {
	color: 'red',
	WebkitTransition: 'all',
	msTransition: 'all'
};

ReactDOM.render(
	<Profile />,
	document.getElementById('profile')
);

ReactDOM.render(
	<Project />,
	document.getElementById('projects')
);

ReactDOM.render(
	<AuthForm />,
	document.getElementById('loginForm')
);