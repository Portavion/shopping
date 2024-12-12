import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Shop } from "../src/components/ShoppingPage/ShoppingPage.jsx";
import { act } from "@testing-library/react";
import { test, vi } from "vitest";

describe("Shopping page component", () => {
  it("renders items", async () => {
    const fakeItem = { id: 0, title: "test", imgSrc: "test", itemPrice: "123" };
    let resolve;
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeItem),
      }),
    );
    act(() => {
      render(<Shop></Shop>);
    });
    expect(screen.findByText("Add to cart")).toBeTruthy();
  });
});
