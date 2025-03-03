import { Department } from '#models/index.model'

export const getDepartments = async () => {
  const departmentsAll = await Department.find();
  return departmentsAll;
}

export const createDepartment = async (data) => {
  const newDepartment = await Department.create(data);
  return newDepartment;
}