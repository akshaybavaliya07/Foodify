import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from '../../utils/appStore';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should render Header component with a login button", ()=> {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", { name : "Login"});
    // const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
});

it("should render Header component with a 'cart itemes - 0' ", ()=> {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart- (0 items)");

    expect(cartItems).toBeInTheDocument();
});

it("should render Header component with a cart", ()=> {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cart = screen.getByText(/Cart/);  //Ajax

    expect(cart).toBeInTheDocument();
});

it("should change Login to Logout on click", ()=> {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name:"Login"});
    
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"Logout"})

    expect(logoutButton).toBeInTheDocument();
});