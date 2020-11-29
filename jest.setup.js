import "whatwg-fetch";
import "@testing-library/jest-dom/extend-expect";
import dotenv from "dotenv";
window.NODE_ENV = process.env.NODE_ENV;
dotenv.config({ path: ".env.test" });