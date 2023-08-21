<template>
  <div class="modal">
    <div class="overlay" @click="this.$emit('close')"></div>
    <div class="card">
      <!-- {{ object }}
      <br>
      {{ rooms }} -->
      <!-- <div class="summary">
      </div> -->
      <div class="card_content">
        <ObjectType 
        v-if="component === 'ObjectType'" 
        @set-component="setComponent"
        @update-object="updateObject"
        />
        <ObjectRooms 
        v-if="component === 'ObjectRooms'"
        :rooms="rooms" 
        @set-component="setComponent"
        @choose-room="chooseRoom"
        @add-room="addRooom"
        @delete-room="deleteRoom"
        />
        <ObjectParameters 
        v-if="component === 'ObjectParameters'"
        @set-component="setComponent"
        @update-rooms="updateRooms"
        :choosedRoom="room"
        />

      </div>



    </div>
  </div>
</template>

<script>
import ObjectType from '@/components/CreateProject/ObjectType.vue'
import ObjectRooms from '@/components/CreateProject/ObjectRooms.vue'
import ObjectParameters from '@/components/CreateProject/ObjectParameters.vue'

export default {
  name: 'CreateProject',
  components: {
    ObjectType,
    ObjectRooms,
    ObjectParameters
  },
  data () {
    return {
      component: 'ObjectType',
      room: null,
      object: {
        type: '', // object description
      },
      rooms: [
        {
          objectId: '',
          name: 'Помещение 1',
          size: 0,
          index: 0,
          description: {}
        }
      ]
    }
  },
  methods: {
    setComponent(component) {
      this.component = component
    },
    chooseRoom(room) {
      this.room = room
      this.component = 'ObjectParameters'
    },
    updateObject(value) {
      this.object = value
    },
    updateRooms(room) {
      this.rooms[room.index] = room
      // this.rooms.indexOf(room) === -1 ? this.rooms.push(room) : this.rooms
      console.log(room);
    },
    addRooom() {
      this.rooms.push({
        objectId: '',
        name: 'Помещение ' + (this.rooms.length + 1),
        size: 0,
        index: this.rooms.length,
        description: {}
      }
      )
    },
    deleteRoom(index) {
      this.rooms.splice(index, 1)
    }

  }
}
</script>


<style lang="sass" scoped>
.summary
  background: $black
  border-radius: $border-radius
  color: $white
  padding: 3rem
  width: 40%
  min-height: 100%
.card
  display: flex
  gap: 3rem
  padding: 3.5rem 4rem 3rem 3rem
  width: 100%
  max-width: 100rem
  &_content
    width: 100%

</style>
