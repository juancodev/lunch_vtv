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
    user: {},
    userDeleted: {},
    getAllUsers: async () => {
      const axiosAPI = await axios.get(`${urlAPI.users}`);
      set({
        users: axiosAPI.data
      })
      return axiosAPI.data
    },
    postAxiosCreateUser: async (data) => {
      const axiosAPI = await axios.post(`${urlAPI.users}`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      set({
        user: axiosAPI.data
      })
      return axiosAPI.data
    },
    deleteAxiosUser: async (id) => {
      const axiosAPI = await axios.delete(`${urlAPI.users}/${id}`);
      set({
        userDeleted: axiosAPI.data
      })
      return axios
    }
  }),
  {
    name: 'users-storage'
  }
)
)