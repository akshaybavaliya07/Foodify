import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState( {
            userInfo: json,
        })
    }
    
    render() {

        const {name, location, twitter_username, avatar_url} = this.state.userInfo;
        const {count} = this.state;

        const incCount = () => {
            this.setState({
                count: this.state.count + 1,
            })
        }

        return (
            <div className="user-card">
                <button className="userIncCount" onClick={incCount}>{count}</button>
                <h6>Name: {name}</h6>
                <h6>Location: {location}</h6>
                <h6>Twitter : {twitter_username}</h6>
                <img src={avatar_url} alt="pic"/>
            </div>
        )
    }
}

export default UserClass;