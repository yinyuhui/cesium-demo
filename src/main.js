import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as Cesium from "cesium";
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YmM3MmUyNS03ZTMxLTRiZmItOGQ2My03ZjkwZGQzNzFlYmUiLCJpZCI6MjkwMjY4LCJpYXQiOjE3NDM1ODY2OTd9.Bm9wezicSFRbYRHbu7Jfnk3ZX4thpiIt-6ki7hdOsLo'
// window.CESIUM_BASE_URL = './CesiumAssets/'
// window.CESIUM_BASE_URL = './Build/Cesium/'
createApp(App).mount('#app')
