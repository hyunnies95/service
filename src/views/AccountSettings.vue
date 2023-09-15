<template>
  <div class="wrapper">
    <div class="container">
      <div class="grid">
        <AccountImage />
        <AccountPassword />
        <AccountInfo />
      </div>
    </div>
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

.wrapper
  background: $background
  display: flex
  margin-top: 14rem
  min-height: calc(100vh - 14rem)
  @media (min-width: $medium)
    margin-left: 36rem
.container
  padding: 4rem 3.6rem
  
</style>