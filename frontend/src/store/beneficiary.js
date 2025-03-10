import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { urlAPI } from '../config';

export const useBeneficiaryStore = create(
  persist(
    (set) => ({
      beneficiaries: [],
      beneficiary: {},
      getAllBeneficiaries: async () => {
        const axiosAPI = await axios.get(`${urlAPI.beneficiary}`);
        set({
          beneficiaries: axiosAPI.data
        });
        return axiosAPI.data;
      },
      postCreateBeneficiary: async (data) => {
        const axiosAPI = await axios.post(`${urlAPI.beneficiary}`, JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        set({ beneficiary: axiosAPI.data });
        return axiosAPI.data;
      },
    }),
    {
      name: 'beneficiary-storage'
    }
  )
);