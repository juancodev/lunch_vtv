import {
  Service
} from '../models/index.model.js';

export const getServices = async () => {
  const services = await Service.find();
  return services;
};

export const getOnlyService = async (serviceName) => {
  const findService = await Service.findOne({
    name: serviceName
  })
  return findService;
}

export const getOnlyServiceByID = async (id) => {
  const findService = await Service.findById(id);
  return findService;
}

export const createService = async (service) => {
  const newService = await Service.create(service);
  return newService;
}

export const updateService = async (_id, change) => {
  const service = await Service.updateOne({
    _id
  }, change);
  return service;
}