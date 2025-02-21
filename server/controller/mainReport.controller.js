import {
  MainReport
} from "#models/index.model";

export const getMainReports = async () => {
  try {
    const mainReports = await MainReport.find();
    return mainReports;
  } catch (error) {
    console.log(error);
  }
};

export const createMainReport = async (mainReportData) => {
  try {
    const mainReport = await MainReport.create(mainReportData);
    return mainReport;
  } catch (error) {
    console.log(error);
  }
};