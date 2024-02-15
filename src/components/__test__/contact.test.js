import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//instead of "test" you can write "it" also, alias name
test("Should load contact us component", ()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});


describe("Contact us page's form testing", ()=>{
    it("Should load button inside contact component", ()=>{
        render(<Contact/>);
    
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    });
    
    
    test("Should have placeholder for name", ()=>{
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("name");
    
        expect(inputName).toBeInTheDocument();
    });
    
    
    test("Should load 2 input boxes on the contact component", ()=>{
        render(<Contact/>);
    
        //Querying 
        const inputBoxes = screen.getAllByRole("textbox");
        //input box is an array
        //when you console.log input box , it gives react virtual dom ( also known as react fibre node, jsx, )
    
        expect(inputBoxes.length).toBe(2);
    });
    
    
});


