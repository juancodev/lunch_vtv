import { Schedule } from "#models/index.model";

export const getAllSchedules = async () => {
  const schedulesAll = await Schedule.find();
  return schedulesAll;
}

export const createSchedule = async (data) => {
  const newSchedule = await Schedule.create(data);
  return newSchedule;
};