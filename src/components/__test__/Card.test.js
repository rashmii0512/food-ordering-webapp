import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Card4 , {FastCard} from "../Card";
import MOCK_DATA from "../mocks/CardMock.json";
import {Link} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

it("Should render Restauran Card componet with props data", ()=>{
    render(
        < BrowserRouter >
            <Card4 resData={MOCK_DATA} display={""} />
        </BrowserRouter>
        
    );

    const name = screen.getByText("Baskin Robbins - Ice Cream Desserts");
    expect(name).toBeInTheDocument();
});


//doesnt work as card gets loaded and fast delivery doesnt show up
//need to use this in body to see if it works
it("Should render restaurant card component", ()=>{
    const FastCardComponent = FastCard(Card4);
    render(
        < BrowserRouter >
            
            <FastCardComponent resData={MOCK_DATA} display={""} />
        </BrowserRouter>
        
    );

    const fastDelivery = screen.getByText("Fast Delivery");
    expect(fastDelivery).toBeInTheDocument();
})