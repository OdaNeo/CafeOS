import { render, screen, fireEvent } from "@testing-library/react";
import ProductButton from "../components/ProductButton";

describe("ProductButton", () => {
  test("renders ProductButton with correct text and count", () => {
    render(
      <ProductButton
        id="coffee"
        name="コーヒー"
        price={480}
        count={3}
        onClick={jest.fn()}
      />
    );

    expect(screen.getByText("コーヒー 480 円")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("calls onClick when button is clicked", () => {
    const mockOnClick = jest.fn();
    render(
      <ProductButton
        id="coffee"
        name="コーヒー"
        price={480}
        count={0}
        onClick={mockOnClick}
      />
    );

    const button = screen.getByText("コーヒー 480 円");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
