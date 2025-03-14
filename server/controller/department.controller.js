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

export const updateDepartment = async (_id, data) => {
  const department = await Department.findByIdAndUpdate(_id, data);
  return department;
}

export const deleteDepartment = async (_id) => {
  const department = await Department.findByIdAndDelete(_id);
  return department;
}