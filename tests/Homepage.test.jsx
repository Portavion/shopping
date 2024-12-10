import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Homepage } from "./../src/components/Homepage/Homepage.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Homepage component", () => {
  it("renders correct heading", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading").textContent).toMatch(
      "Welcome to my test store",
    );
  });
});
