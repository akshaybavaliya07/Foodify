import { useState } from "react";

const User = ({name}) => {

    const [count, setCount] = useState(0);

    const incCount = () => {
        setCount(count + 1);
    }

    return (
        <div className="user-card">
            <button onClick={incCount} className="userIncCount">{count}</button>
            <h6>Name: {name}</h6>
            <h6>Location: Botad</h6>
            <h6>Contact : @akshay_bavaliya_07</h6>
        </div>
    )
}

export default User;