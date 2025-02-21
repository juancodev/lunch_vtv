import { Sales } from "#models/index.model";

export const getAllSales = async() => {
  try {
    const allSales = await Sales.find();
    return allSales;
  } catch (error) {
    console.log(error);
  }
}

export const createSale = async (data) => {
  try {
    const sale = await Sales.create(data);
    return sale;
  } catch (error) {
    console.log(error);
  }
}