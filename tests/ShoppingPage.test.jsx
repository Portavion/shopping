import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Shop } from "../src/components/ShoppingPage/ShoppingPage.jsx";

describe("Shopping page component", () => {
  it("renders 6 items", () => {
    render(<Shop></Shop>);
    expect(screen.getAllByText("Add to cart").length).toBe(6);
  });
});
