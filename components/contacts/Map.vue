<script lang="ts" setup>
import type { YMap } from '@yandex/ymaps3-types'
import { shallowRef } from 'vue'
import {
  YandexMap,
  YandexMapControlButton,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapEntity,
  YandexMapMarker,
} from 'vue-yandex-maps'

//Можно использовать для различных преобразований
const map = shallowRef<null | YMap>(null)

const handleClickOnBtnToMap = () => {
  window.open('https://yandex.ru/maps', '_blank')
}
</script>

<template>
  <yandex-map
    v-model="map"
    :settings="{
      location: {
        center: [37.692384, 55.681321],
        zoom: 9,
      },
    }"
    width="880px"
    height="563px"
  >
    <yandex-map-default-scheme-layer />
    <yandex-map-default-features-layer />
    <yandex-map-marker
      position="top-center left-center"
      :settings="{ coordinates: [37.692384, 55.681321] }"
    >
      <img class="pin" src="/svg/marker.svg" alt="" />
    </yandex-map-marker>
    <yandex-map-controls
      :settings="{
        position: 'bottom left',
        orientation: 'vertical',
      }"
    >
      <YandexMapEntity>
        <yandex-map-control-button>
          <button @click="handleClickOnBtnToMap" class="btn-reset btn-map">
            Посмотреть на карте
          </button>
        </yandex-map-control-button>
      </YandexMapEntity>
    </yandex-map-controls>
  </yandex-map>
</template>

<style lang="scss" scoped>
.pin {
  cursor: pointer;
  max-width: unset;
  object-fit: cover;
  width: 50px;
  height: 50px;
}
.btn-map {
  position: relative;
  z-index: 200000000000000;
  cursor: pointer;
  padding: 10px 26px;
  color: #fff;
  border-radius: 11px;
  background: #356697;
}
</style>
