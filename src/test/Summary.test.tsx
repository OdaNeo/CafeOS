import { render, screen } from "@testing-library/react";
import Summary from "../components/Summary";

describe("Summary", () => {
  test("renders Summary with correct totalCount and totalPrice", () => {
    render(<Summary totalCount={5} totalPrice={2000} />);

    expect(screen.getByText("商品数：5 個")).toBeInTheDocument();
    expect(screen.getByText("合計金額：2000 円")).toBeInTheDocument();
  });
});
