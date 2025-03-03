import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { urlAPI } from '../config';

export const useDepartments = create(
  persist(
    (set) => ({
      departmentsAll: [],
      department: [],
      getAxiosAllDepartment: async () => {
        const axiosAPI = await axios.get(`${urlAPI.department}`);
        set({
          departmentsAll: axiosAPI.data
        })
        return axiosAPI.data
      },
      postAxiosDepartment: async (data) => {
        const axiosAPI = await axios.post(`${urlAPI.department}`, JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        set({
          department: axiosAPI.data
        })
        return axiosAPI
      }
    })
  )
)
