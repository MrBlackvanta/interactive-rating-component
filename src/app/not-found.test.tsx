import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import NotFound, { metadata } from "./not-found";

describe("NotFound", () => {
  it("names the page and leads back to the rating as its only way out", () => {
    render(<NotFound />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Page not found" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(1);
    expect(
      screen.getByRole("link", { name: "Back to the rating" }),
    ).toHaveAttribute("href", "/");
  });

  it("drops the home canonical and leaves noindex to Next", () => {
    expect(metadata.title).toBe("Rapport | Page not found");
    expect(metadata.alternates?.canonical).toBeNull();
    expect(metadata).not.toHaveProperty("robots");
  });
});
