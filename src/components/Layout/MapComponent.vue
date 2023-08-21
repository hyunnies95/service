<template>
  <section class="map">
    <input type="text" name="" placeholder="Укажите свой адрес" id="suggest" @pointerout="updateAddress">
{{ address }}
    <yandex-map
      :settings="settings"
      :coords="coords"
      zoom="17"
    >
      <ymap-marker 
        :coords="coords"
        marker-id="123"
        marker-type="placemark"
        @click="onClick"
      />

    </yandex-map>
  </section>

</template>

<script>
import { loadYmap, yandexMap, ymapMarker } from 'vue-yandex-maps';


export default {
  name: 'App',
  components: {
    yandexMap,
    ymapMarker,
  },
  data() {
    return {
      settings: {
        apiKey: '336a673c-3467-4cc4-a697-49c851804ea5',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
      },
      myPlacemark: null,
      coords: [53.363043, 59.006855],
    }
  },
  async mounted() {
    await loadYmap()
    window.ymaps.geolocation.get().then(res => {
      this.coords = res.geoObjects.position
      new window.ymaps.SuggestView('suggest')
      console.log(res.geoObjects.get(0).properties.getAll());
    })
  },
  methods: {
    onClick(e) {
      console.log( e.get('coords'));
    },
    updateAddress(e) {
        console.log(e.target.value)
    
      this.$emit('update-address', e.target.value)
    }
  },
};
</script>

<style lang="sass" scoped>
.map
  & input
    margin-bottom: 3rem
.ymap-container
  height: 45rem
</style>