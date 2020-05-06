import { DataTypes } from "./Types";

const protocol = "http";
const hostname = "localhost";
const port = 3500;

const RestUrls = {
  [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
  [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`
}

export default RestUrls;
