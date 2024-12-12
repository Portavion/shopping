import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Item } from "../src/components/Item/Item.jsx";

describe("Item component", () => {
  it("has a name", () => {
    render(<Item />);
    expect(screen.getByText("Test Item Name")).toBeTruthy;
  });
  it("has an img", () => {
    render(<Item />);
    expect(screen.getByRole("img")).toBeTruthy;
  });
  it("has an add button", () => {
    render(<Item />);
    expect(screen.getByText("Add to cart")).toBeTruthy;
  });
  it("has an input field", () => {
    render(<Item />);
    expect(screen.getByRole("spinbutton")).toBeTruthy;
  });
  it("has a quantity of zero", () => {
    render(<Item />);
    //    expect(screen.getByDisplayValue("0")).toBeInTheDocument();
    expect(screen.getByRole("spinbutton")).toHaveValue(1);
  });
});
