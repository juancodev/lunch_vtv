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

export const updateBeneficiary = async (_id, data) => {
  const beneficiary = await Beneficiary.findByIdAndUpdate(_id, data);
  return beneficiary;
}

export const deleteBeneficiary = async (_id) => {
  const beneficiary = await Beneficiary.findByIdAndDelete(_id);
  return beneficiary;
}