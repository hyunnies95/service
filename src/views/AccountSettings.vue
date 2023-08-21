<template>
  <div class="grid">
    <AccountImage />
    <AccountPassword />
    <AccountInfo />
  </div>
</template>

<script>
import AccountImage from '@/components/AccountSettings/AccountImage.vue'
import AccountPassword from '@/components/AccountSettings/AccountPassword.vue'
import AccountInfo from '@/components/AccountSettings/AccountInfo.vue'

export default {
  name: 'AccountSettings',
  components: {
    AccountImage,
    AccountPassword,
    AccountInfo
  },
  methods: {

  }
}
</script>

<style lang="sass" scoped>
.grid
  @media (min-width: $small)
    display: grid
    column-gap: 3.4rem

  @media (min-width: $medium)
    grid-template-columns: 35% auto
</style>