import "./globals.css";
import { Inter } from "next/font/google";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { accountReducer, bonusReducer } from "../redux/reducers";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Zustand Ecommerce",
  description: "Generated by create next app",
};

const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  })
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Promise store={store}>{children}</Promise>
      </body>
    </html>
  );
}
