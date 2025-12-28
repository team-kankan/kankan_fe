import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "./button";

describe("Button", () => {
  it("renders text", () => {
    render(<Button>test</Button>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
