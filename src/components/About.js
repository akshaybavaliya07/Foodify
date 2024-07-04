// import User from "./User";
import UserClass from "./UserClass";
import React from 'react';
import UserContext from "../utils/UserContext";

class About extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1><strong>{loggedInUser}</strong> from UserContext</h1>}
                    </UserContext.Consumer>
                </div>
                <h1 className="abtH1">This is User Class component...</h1>
                <UserClass name="First" location="Botad"/>
            </div> 
        )
    }
}

export default About;