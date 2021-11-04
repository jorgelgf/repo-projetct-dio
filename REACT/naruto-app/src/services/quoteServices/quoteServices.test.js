//lib para mockar requisicoes.
//Service work que fica na camada de rede,
//que faz cache de arquivos e requisicoes
//Basicamente, simula o comportamento de objetos reais
//de forma controlada.

import { rest } from "msw";
import { URL } from ".";
import { setupServer } from "msw/node";
import { getQuote } from "./quoteService";
const response = { test: "testing" };

//criando um servidor fictício q pega as requisicoes
//da porta 5k e respondera testing testing
const server = setupServer(
  rest.get(URL, (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

//Antes de todos os testes o servidor escute
beforeAll(() => server.listen());

//Depois de cada teste de um reset nos Handlers
afterEach(() => server.resetHandlers());

//Depois de tudo, feche o server de mock
afterAll(() => server.close());

test("transform json response into object", async () => {
  const quote = await getQuote();

  //esperando q a chamada seja um obj js.
  expect(quote).toStrictEqual(response);
});
