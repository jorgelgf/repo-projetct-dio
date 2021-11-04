import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";
import { URL } from "./services/quoteServices";
const response = { speaker: "speaker", quote: "ok" };

const server = setupServer(
  rest.get(URL, (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

test("renders the app with a button, a quote and a button", () => {
  render(<App />);

  const buttonEl = screen.getByRole("button");
  const imageEl = screen.getByRole("img");
  const textEl = screen.getByText(/speak/);

  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
});

test("call api on button click and update its text", async () => {
  render(<App />);

  const buttonEl = screen.getByRole("button");
  fireEvent.click(buttonEl);
  const quoteEl = await screen.findByText(response.quote);

  expect(quoteEl).toBeInTheDocument();
});

test("calls api on startup and render it response", async () => {
  render(<App />);
  const quoteEl = await screen.findByText(response.quote);
  expect(quoteEl).toBeInTheDocument();
});
