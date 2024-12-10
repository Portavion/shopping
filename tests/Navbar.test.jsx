import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../src/components/Navbar/Navbar";

describe("Navbar component", () => {
  it("renders homepage link", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(screen.getAllByRole("link")[0].textContent).toMatch("Home");
  });
  it("underlines the home navigation link on load", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(screen.getAllByRole("link")[0].className).toMatch("active");
  });
  it("underlines the current page when clicking nav link", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const shopLink = screen.getByRole("link", { name: "Shop" });
    await user.click(shopLink);
    expect(screen.getAllByRole("link")[1].className).toMatch("active");
  });
});
