<template>
    <div id="cesiumContainer"></div>
</template>
<script setup>
    import { Viewer } from 'cesium'
    import { onMounted } from 'vue'

    onMounted(async () => {
        new Viewer('cesiumContainer', {
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
