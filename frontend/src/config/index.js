const baseURL =
  import.meta.env.MODE === 'production' ?
  import.meta.env.VITE_API_URL_PRODUCTION :
  import.meta.env.VITE_API_URL_DEVELOPMENT;

export const urlAPI = {
  baseURL: baseURL,
  users: `${baseURL}/users`,
  auth: `${baseURL}/auth`,
  profiles: `${baseURL}/profiles`,
  department: `${baseURL}/departments`,
  schedule: `${baseURL}/schedules`
}