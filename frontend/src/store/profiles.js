import axios from "axios";
import {
  create
} from "zustand";
import {
  persist
} from "zustand/middleware";
import {
  urlAPI
} from "config";

export const useProfileStore = create(
  persist(
    (set) => ({
      userProfile: {},
      getFetchUserProfile: async (userID) => {
        const fetchAPI = await axios.get(`${urlAPI.profiles}/${userID}`)
        set({
          userProfile: fetchAPI.data
        })
      }
    }), {
      name: 'profile-storage'
    }
  )
)