import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vite-plus/test";
import RatingCard from "./rating-card";

describe("RatingCard", () => {
  it("offers the scores 1 to 5 as one group named by the question", () => {
    render(<RatingCard />);

    const group = screen.getByRole("group", { name: "How did we do?" });
    const scores = within(group).getAllByRole("radio");

    expect(scores.map((score) => score.getAttribute("value"))).toEqual([
      "1",
      "2",
      "3",
      "4",
      "5",
    ]);
    expect(within(group).getByRole("radio", { name: "3" })).toBeRequired();
  });

  it("stays on the question when submitted without a score", async () => {
    const user = userEvent.setup();
    render(<RatingCard />);

    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(
      screen.getByRole("heading", { name: "How did we do?" }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Thank you!" })).toBeNull();
  });

  it("thanks the user with the score they picked and moves focus there", async () => {
    const user = userEvent.setup();
    render(<RatingCard />);

    await user.click(screen.getByRole("radio", { name: "4" }));
    await user.click(screen.getByRole("button", { name: "Submit" }));

    const heading = await screen.findByRole("heading", { name: "Thank you!" });

    expect(heading).toHaveAccessibleDescription("You selected 4 out of 5");
    expect(heading).toHaveFocus();
    expect(screen.queryByRole("radio")).toBeNull();
  });
});
