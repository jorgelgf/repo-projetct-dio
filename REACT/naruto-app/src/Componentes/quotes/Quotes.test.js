import { render, screen, fireEvent } from "@testing-library/react";
import { Quotes } from "./Quotes";

const quote = "ok";
const speaker = "random speak";
test("renders received quote, speaker and e button", () => {
  render(<Quotes quote={quote} speaker={speaker} />);

  //elemento de button
  const buttonEl = screen.getByRole("button");
  //elemento de texto
  const quoteEl = screen.getByText(quote);
  const speakerEl = screen.getByText(speaker);

  //espera que encontre os elementos no documento
  expect(quoteEl).toBeInTheDocument();
  expect(speakerEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
});

test("call a calback when button is pressed", () => {
  const callback = jest.fn();
  render(<Quotes quote={quote} speaker={speaker} onUpdate={callback} />);
  const buttonEl = screen.getByRole("button");
  fireEvent.click(buttonEl);

  //espera que tenha sido chamado a funcao 1x
  expect(callback).toHaveBeenCalledTimes(1);
});
