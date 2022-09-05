import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from "../App";

test ("check navigation to the New Claim page is working" , async () => {

    //GIVEN
    render(<App />);
    //WHEN
    const newClaimsLink = screen.queryByText("New Claim");
    userEvent.click(newClaimsLink);
    //THEN
    const heading = await screen.findByTestId("h2", {}, 2000);
    expect(heading).toHaveTextContent("Register new claim");
})


test ("check navigation to the Views Claims page is working" , async () => {

    //GIVEN
    render(<App />);
    //WHEN
    const viewClaimsLink = screen.queryByText("View Claims");
    userEvent.click(viewClaimsLink);
    //THEN
    const heading = await screen.findByTestId("h1", {}, 2000);
    expect(heading).toHaveTextContent("View Claims");
})