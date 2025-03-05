import { Department } from '#models/index.model'

export const getDepartments = async () => {
  const departmentsAll = await Department.find();
  return departmentsAll;
}

export const createDepartment = async (data) => {
  const newDepartment = await Department.create(data);
  return newDepartment;
}

export const listDepartmentsWithUserCount = async () => {
  const departments = await Department.aggregate([{
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "department",
        as: "users"
      }
    },
    {
      $project: {
        name: 1,
        userCount: {
          $size: "$users"
        }
      }
    }
  ]);
  return departments;
}