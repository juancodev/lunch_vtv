import { Beneficiary } from '#models/index.model';

export const getAllBeneficiaries = async () => {
  const beneficiaries = await Beneficiary.find()
    .populate({
      path: "user",
      populate: {
        path: "department",
        model: "Department"
      }
    })
    .populate("schedule")
    .exec();

  return beneficiaries;
}

export const createBeneficiary = async (data) => {
  const beneficiary = await Beneficiary.create(data);
  return beneficiary;
}
