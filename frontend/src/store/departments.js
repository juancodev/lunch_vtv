import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { urlAPI } from '../config';
import { deleteDepartment } from '../../../server/controller/department.controller';

export const useDepartments = create(
  persist(
    (set) => ({
      departmentsAll: [],
      department: {},
      deleteDepartment: {},
      getAxiosAllDepartment: async () => {
        const axiosAPI = await axios.get(`${urlAPI.department}`);
        set((state) => ({
          ...state,
          departmentsAll: axiosAPI.data
        }))
        return axiosAPI.data
      },
      postAxiosDepartment: async (data) => {
        const axiosAPI = await axios.post(`${urlAPI.department}`, JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        set((state) => ({
          ...state,
          department: axiosAPI.data
        }))
        return axiosAPI
      },
      deleteAxiosDepartment: async (id) => {
        const axiosAPI = await axios.delete(`${urlAPI.department}/${id}`)
        set((state) => ({
          ...state,
          deleteDepartment: axiosAPI.data
        }))
        return axiosAPI
      }
    })
  )
)
