import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";

import Body from "../Body";
import store from "../../../redux/store";
import { RESTAURANT_DATA } from "../../mocks/allRestaurant";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer on home page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(24);
});

test("restaurant results on home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    return expect(body.getByTestId("search-button"));
  });
  const restaurants = body.getByTestId("rest-list");
  expect(restaurants.children.length).toBe(20);
});

test("Search for string(food) on home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    return expect(body.getByTestId("search-button"));
  });
  const input = body.getByTestId("search-input");
  const searchBtn = body.getByTestId("search-button");


  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });

  fireEvent.click(searchBtn);

  const restaurants = body.getByTestId("rest-list");
  expect(restaurants.children.length).toBe(20);
});
