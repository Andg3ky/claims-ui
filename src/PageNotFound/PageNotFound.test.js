import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from "../App";

test("check re-direct from Page Not Found to Home when Back to Welcome Page button clicked", async () => {
    
    //GIVEN
    render(<App />);
    const welcomeLink = screen.queryByText("Welcome");
    userEvent.click(welcomeLink);
    //THEN
    const heading = await screen.findByTestId("h1", {}, 2000);
    expect(heading).toHaveTextContent("Welcome");
})