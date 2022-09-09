import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from "../App";

test("check re-direct from Page Not Found to Home Page when Back clicked", async () => {
    
    //GIVEN
    render(<App />);
    //WHEN 
    const welcomeLink = screen.queryByText("Welcome");
    userEvent.click(welcomeLink);
    //THEN
    const heading = await screen.findByTestId("h1", {}, 2000);
    expect(heading).toHaveTextContent("Welcome");
})