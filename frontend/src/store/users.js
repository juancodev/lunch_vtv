import {
  create
} from "zustand";
import {
  persist
} from "zustand/middleware";
import axios from "axios";
import {
  urlAPI
} from "../config";

export const useUsers = create(
  persist((set) => ({
    users: [],
    getAllUsers: async () => {
      const axiosAPI = await axios.get(`${urlAPI.users}`);
      set({
        users: axiosAPI.data
      })
      return axiosAPI.data
    }
  }),
  {
    name: 'users-storage'
  }
)
)