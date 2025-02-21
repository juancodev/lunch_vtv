import { Stock } from "#models/index.model";
import csvToJson from 'csvtojson';



export const getAllStocks = async () => {
  try {
    const stocks = await Stock.find();
    return stocks;
  } catch (error){
    console.log(error);
  }
};

export const uploadStock = async (stockData) => {
  try {
    const stockJsonArray = await csvToJson().fromString(stockData);
    const createdStocks = await Stock.insertMany(stockJsonArray);
    return createdStocks;
  } catch (error) {
    console.log(error);
  }
};

export const updateStockStatus = async (orderStocks) => {
  try {
    const updatedStocks = await Stock.updateMany(
      { _id: { $in: orderStocks.map(stock => stock._id)}},
      { $set: { status: false}}
    );
    return updatedStocks;
  } catch (error) {
    console.error('Error al actualizar los stocks:', error);
  }
};