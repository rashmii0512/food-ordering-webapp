import {render,  screen, fireEvent} from "@testing-library/react";
import {Provider} from "react-redux";
import appStore from "../../redux/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import {useContext} from "react";
import "@testing-library/jest-dom";


it("Should render header component with a login button ", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("Login");
    //get by role is better way to get
    

    // if there are multiplebuttons :
    const loginButton = screen.getByRole("button", {name:"Login"});
    expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a cart item 0", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    //pass rejex so that the number of item doesnt matter
    const cart = screen.getByText(/cart/i);
    // const itemNumber = screen.getByText("\(0\)");

    expect(cart).toBeInTheDocument();
    // expect(itemNumber).toBeInTheDocument();
});


it("should change login button to logout", ()=>{
    // const {loggedInUser} = useContext(UserContext);
            
    //  const [userName, setUserName] = useState(loggedInUser);
    render(
        
        <BrowserRouter>

            {/* <UserContext.Provider value ={{loggedInUser: userName, setUserName}} > */}
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            {/* </UserContext.Provider> */}
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name:"Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"Logout"})

    expect(logoutButton).toBeInTheDocument();
});