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
  it("has a rating", () => {
    render(<Item />);
    expect(screen.getByText("4 stars")).toBeTruthy;
  });
  it("has a rating count", () => {
    render(<Item />);
    expect(screen.getByText("(12)")).toBeTruthy;
  });
  it("has a quick add button", () => {
    render(<Item />);
    expect(screen.getByText("Test Item Name")).toBeTruthy;
  });
});
