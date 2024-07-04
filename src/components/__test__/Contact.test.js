import Contact from "../Contact";
import {render, screen} from '@testing-library/react'
import "@testing-library/jest-dom"

describe("Contact page test cases", () => {
    test("should load contact us component", ()=> {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    test("should Button loaded in contact us component", ()=> {
        render(<Contact/>);
    
        const btn = screen.getByRole("button");
    
        expect(btn).toBeInTheDocument();
    });
    
    it("should Button loaded in contact us component", ()=> {
        render(<Contact/>);
    
        const btnText = screen.getByText("Submit");
    
        expect(btnText).toBeInTheDocument();
    });
    
    it("should PlaceHolder text loaded in contact us component", ()=> {
        render(<Contact/>);
    
        const intputPlaceHolder = screen.getByPlaceholderText("name");
    
        expect(intputPlaceHolder).toBeInTheDocument();
    });
    
    it("should all Input Boxes loaded in contact us component", ()=> {
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
        // console.log(inputBoxes);
    
        // expect(inputBoxes.length).toBe(2);
        // // or else
        expect(inputBoxes.length).not.toBe(3);
    
    });
});