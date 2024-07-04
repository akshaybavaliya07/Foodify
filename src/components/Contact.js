import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {

    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="text-center">
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form className="">
                <input type="text" className="border border-black p-2 m-2 rounded-md" placeholder="name"/>
                <input type="text" className="border border-black p-2 m-2 rounded-md" placeholder="message"/>
                <button className="border border-black p-2 m-2 bg-gray-300 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;