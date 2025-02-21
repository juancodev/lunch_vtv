import {
  Order,
  User,
} from "#models/index.model";
import {
  getOneUser
} from "./user.controller.js";

export const getAllOrders = async () => {
  try {
    const orders = await Order.find();
    return orders
  } catch (error) {
    console.log(error);
  }
}

export const getOrdersByUserId = async (userID) => {
  const id = await User.findById(userID);

  const orders = await Order.find({
      user: id,
    })
    .populate("user")
    .then(response => response)
    .catch(err => console.log(err));

  return orders;
}

export const getOrderById = async (idOrder) => {
  const order = await Order.findById({
    _id: idOrder
  });

  return order;
}

export const createOrder = async (userId, orderData) => {

  const foundUser = await getOneUser(userId);

  const newOrder = await Order.create({
    user: foundUser._id.toJSON(),
    ...orderData
  });

  return newOrder;
}

export const deleteOrder = async (_id) => {
  const deletedOrder = await Order.deleteOne({
    _id
  });
  return deletedOrder;
}