<script setup>
    import {
        Cartesian3,
        createOsmBuildingsAsync,
        Ion,
        Math as CesiumMath,
        Terrain,
        Viewer,
    } from 'cesium'
    import { onMounted } from 'vue'
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YmM3MmUyNS03ZTMxLTRiZmItOGQ2My03ZjkwZGQzNzFlYmUiLCJpZCI6MjkwMjY4LCJpYXQiOjE3NDM1ODY2OTd9.Bm9wezicSFRbYRHbu7Jfnk3ZX4thpiIt-6ki7hdOsLo'

    onMounted(async () => {
        Ion.defaultAccessToken = token

        const viewer = new Viewer('cesiumContainer', {
            terrain: Terrain.fromWorldTerrain(),
        })

        viewer.camera.flyTo({
            destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
            orientation: {
                heading: CesiumMath.toRadians(0.0),
                pitch: CesiumMath.toRadians(-15.0),
            },
        })

        const buildingTileset = await createOsmBuildingsAsync()
        viewer.scene.primitives.add(buildingTileset)
    })
</script>

<template>
    <div id="cesiumContainer"></div>
</template>

<style scoped>
    #cesiumContainer {
        width: 100vw;
        height: 100vh;
    }
</style>
