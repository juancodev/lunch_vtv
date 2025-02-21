import mongoose from 'mongoose'
import {
  OrderReport,
} from "#models/index.model";


//TODO: Crear una orden sino existe y si existe, actualizar para agregar el reporte!!!
export const getAllOrderReport = async (limit = 10, offset = 0) => {
  try {
    if (limit <= 0) limit = 10;
    if (offset < 0) offset = 0;

    const allOrderReport = await OrderReport.find()
      .skip(offset)
      .limit(limit)
      .populate("order")
      .populate({
        path: "report",
        populate: {
          path: "user",
          model: "User"
        }
      })
      .exec();

      const totalCount = await OrderReport.countDocuments();

    return {data: allOrderReport, totalCount};
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los reportes de órdenes.");
  }
};

export const getOrderReportByID = async (id) => {
  try {
    const getOnlyOrderReport = await OrderReport.findById({
        _id: id
      })
      .populate({
        path: "order",
        populate: {
          path: "user",
          model: "User"
        }
      })
      .populate("report")
      .exec()
    return getOnlyOrderReport;
  } catch (error) {
    console.log(error);
  }
}

export const getOrderReportByUser = async (idUser) => {
  try {
    const getOrderReport = await OrderReport.find()
      .populate({
        path: "order",
        populate: {
          path: "user",
          model: "User",
          select: "_id"
        }
      })
      .populate("report")
      .exec();
    const filteredReports = getOrderReport.filter(order =>
      order.order.user._id.equals(new mongoose.Types.ObjectId(idUser))
    );

    return filteredReports;
  } catch (error) {
    console.log(error);
  }
}

export const createOrderReport = async (data) => {
  try {
    const newOrderReport = await OrderReport.create(data);
    return newOrderReport;
  } catch (error) {
    console.log(error);
  }
};

export const updateOrderReport = async (id, data) => {
  try {
    const upsertOrderReport = await OrderReport.updateOne({
      _id: id
    }, data);
    return upsertOrderReport;
  } catch (error) {
    console.log(error);
  }
}