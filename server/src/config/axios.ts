import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import {
  mockAppleResponse,
  mockGoogleResponse,
  mockSnapResponse,
  mockTwitterResponse,
  mockAppleSimilarStocksResponse,
  mockAppleHistory,
  mockGoogleHistory,
} from "../mock/index.mock";

// if (process.env.REACT_APP_USE_MOCK_API === "true") {
const mockAdapter = new AxiosMockAdapter(axios, { delayResponse: 0 });

mockAdapter
  .onGet("https://yfapi.net/v11/finance/quoteSummary/AAPL")
  .reply(200, mockAppleResponse);

mockAdapter
  .onGet("https://yfapi.net/v11/finance/quoteSummary/GOOG")
  .reply(200, mockGoogleResponse);

mockAdapter
  .onGet("https://yfapi.net/v11/finance/quoteSummary/SNAP")
  .reply(200, mockSnapResponse);

mockAdapter
  .onGet("https://yfapi.net/v11/finance/quoteSummary/TWTR")
  .reply(200, mockTwitterResponse);

mockAdapter
  .onGet("https://yfapi.net/v6/finance/recommendationsbysymbol/AAPL")
  .reply(200, mockAppleSimilarStocksResponse);
// }

mockAdapter
  .onGet("https://yfapi.net/v8/finance/spark?interval=1d&range=1y&symbols=AAPL")
  .reply(200, mockAppleHistory);

mockAdapter
  .onGet("https://yfapi.net/v8/finance/spark?interval=1d&range=1y&symbols=GOOG")
  .reply(200, mockGoogleHistory);
// }

export default axios;
