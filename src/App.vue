<template>
    <div id="cesiumContainer"></div>
</template>
<script setup>
    import { Viewer } from 'cesium'
    import { onMounted } from 'vue'

    onMounted(async () => {
        const viewer = new Viewer('cesiumContainer', {
            infoBox: false,
            geocoder: false,
            homeButton: false,
            sceneModePicker: false,
            baseLayerPicker: false,
            navigationHelpButton: false,
            animation: false,
            timeline: false,
            fullscreenButton: false,
            vrButton: false,
        })
    })
</script>
<style scoped>
    #cesiumContainer {
        width: 100vw;
        height: 100vh;
    }
    :deep(.cesium-widget-credits) {
        display: none;
    }
</style>
