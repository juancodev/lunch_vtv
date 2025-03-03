import { create} from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import {
  urlAPI
} from "../config";

export const useUserAuth = create(
  persist(
    (set) => ({
      user: {},
      newUser: {},
      postAxiosRegisterUser: async (data) => {
        const axiosAPI = await axios.post(`${urlAPI.users}`, data, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        })
        set({
          newUser: axiosAPI.data
        })
      },
      postAxiosLoginUser: async (data) => {
        const axiosAPI = await axios.post(`${urlAPI.auth}/login`, data, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        })
        set({
          user: axiosAPI.data
        })
        return axiosAPI.data
      },
      logout: () => set({
        user: {}
      })
    }), {
      name: 'user-storage'
    }
  )
)