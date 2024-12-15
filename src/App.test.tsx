import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("updates Summary when ProductButton is clicked", () => {
    render(<App />);

    const coffeeButton = screen.getByText("コーヒー 480 円");
    fireEvent.click(coffeeButton);
    fireEvent.click(coffeeButton);

    expect(screen.getByText("商品数：2 個")).toBeInTheDocument();
    expect(screen.getByText("合計金額：960 円")).toBeInTheDocument();
  });

  test("updates Summary for multiple buttons", () => {
    render(<App />);

    const coffeeButton = screen.getByText("コーヒー 480 円");
    const teaButton = screen.getByText("紅茶 280 円");

    fireEvent.click(coffeeButton);
    fireEvent.click(teaButton);
    fireEvent.click(teaButton);

    expect(screen.getByText("商品数：3 個")).toBeInTheDocument();
    expect(screen.getByText("合計金額：1040 円")).toBeInTheDocument();
  });
});
