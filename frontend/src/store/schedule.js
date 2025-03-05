import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { urlAPI } from '../config';

export const useSchedule = create (
  persist(
    (set) => ({
      schedules: [],
      schedule: {},
      getAxiosAllSchedule: async () => {
        const axiosAPI = await axios.get(`${urlAPI.schedule}`);
        set({
          schedules: axiosAPI.data
        });
        return axiosAPI.data;
      },
      postAxiosSchedule: async (data) => {
        const axiosAPI = await axios.post(`${urlAPI.schedule}`, JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        set({ schedule: axiosAPI.data });
        return axiosAPI.data;
      }
    }),
    {
      name: 'schedule-storage'
    }
  )
);