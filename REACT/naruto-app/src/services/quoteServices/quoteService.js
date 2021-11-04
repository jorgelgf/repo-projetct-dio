import { URL } from ".";
export const getQuote = () => fetch(URL).then((response) => response.json());
