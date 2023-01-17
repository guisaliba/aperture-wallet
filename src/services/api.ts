import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://aperture-wallet.vercel.app/api'
})