import axios from 'axios'
import { API_BASE_URL } from '@/constant/env.js'

const backendAxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json', // json type body
    // Todo: 서버 캐시 방지 설정 어떻게 할지?
    'Cache-Control': 'no-cache, no-store, must-revalidate', // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Cache-Control
    'Accept-Encoding': 'br;q=1.0, gzip;q=0.8, *;q=0.1' // 압축 설정 우선순위 정의
  }
})

backendAxiosInstance.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

backendAxiosInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export default backendAxiosInstance
