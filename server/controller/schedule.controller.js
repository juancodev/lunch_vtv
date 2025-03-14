import { Schedule } from "#models/index.model";

export const getAllSchedules = async () => {
  const schedulesAll = await Schedule.find();
  return schedulesAll;
}

export const createSchedule = async (data) => {
  const newSchedule = await Schedule.create(data);
  return newSchedule;
};

export const updateSchedule = async (_id, data) => {
  const schedule = await Schedule.findByIdAndUpdate(_id, data);
  return schedule;
}

export const deleteSchedule = async (_id) => {
  const schedule = await Schedule.findByIdAndDelete(_id);
  return schedule;
}