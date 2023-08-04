import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";

import Heading from "../Header";
import store from "../../../redux/store";

test("Logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Heading />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId("logo");

  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Online status should be green on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Heading />
      </Provider>
    </StaticRouter>
  );

  const greenCheck = header.getByTestId("online-status");

  expect(greenCheck.innerHTML).toBe("🟢");
});

test("cart should have zero items", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Heading />
      </Provider>
    </StaticRouter>
  );

  const greenCheck = header.getByTestId("cart");

  expect(greenCheck.innerHTML).toBe("Cart 0");
});
