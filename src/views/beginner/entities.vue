<template>
    <div id="cesiumContainer"></div>
</template>
<script setup>
    import { onMounted } from 'vue'
    import * as Cesium from 'cesium'

    let viewer

    function initCesium() {
        viewer = new Cesium.Viewer('cesiumContainer', {})
    }

    function createShapes() {
        const shapes = {
            name: 'Shapes',
            position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
            box: {
                dimensions: new Cesium.Cartesian3(500000.0, 500000.0, 500000.0),
                material: Cesium.Color.BLUE.withAlpha(0.5),
                outline: true,
                outlineColor: Cesium.Color.BLACK,
            },
            point: {
                pixelSize: 10,
                color: Cesium.Color.RED,
                outlineColor: Cesium.Color.WHITE,
                outlineWidth: 20,
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            },
            polyline: {
                positions: Cesium.Cartesian3.fromDegreesArray([
                    -75.1641667, 39.9522222, -80.5341667, 39.9522222,
                    -80.5341667, 43.1294444, -75.1641667, 43.1294444,
                ]),
                width: 10,
            },
            polygon: {
                hierarchy: Cesium.Cartesian3.fromDegreesArray([
                    -74.1641667, 36.9522222, -78.5341667, 36.9522222,
                    -78.5341667, 42.9522222, -74.1641667, 42.1294444,
                ]),
                material: Cesium.Color.YELLOW.withAlpha(0.5),
                // fill: false,
                outline: true,
                outlineWidth: 10,
                outlineColor: Cesium.Color.RED,
            },
        }
        return shapes
    }

    onMounted(() => {
        initCesium()

        const shapes = createShapes()
        viewer.entities.add(shapes)

        viewer.zoomTo(viewer.entities)
    })
</script>
