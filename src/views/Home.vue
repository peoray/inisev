<template>
  <div>
    <div class="card-container">
      <div v-for="user in users" :key="user.id" class="card">
        <img class="card-img" :src="`${user.image}`" alt="" />
        <div class="card-details">
          <span class="card-icon" @click.prevent="displayUserInfo(user.id)"
            ><i class="far fa-envelope"></i
          ></span>
          <div class="card-metadata">
            <h2 class="card-name">{{ user.name }}</h2>
            <p class="card-address">{{ user.address.city }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="toggleModal"
        @click="toggleModal = false"
      >
        <!-- <h1>jdjdjdj</h1> -->
      </div> </transition
    >|

    <transition name="slide" appear>
      <div class="modal" v-if="toggleModal">
        <div class="modal-body">
          <div class="modal-img">
            <img :src="`${user.image}`" alt="" />
          </div>

          <div class="modal-details">
            <div class="close-modal" @click="toggleModal = false">X</div>
            <div class="modal-meta">
              <i class="fas fa-user"></i>
              <p>{{ user.name }}</p>
            </div>

            <div class="modal-meta">
              <i class="fas fa-envelope"></i>
              <p>{{ user.email }}</p>
            </div>

            <div class="modal-meta">
              <i class="fas fa-phone"></i>
              <p>{{ user.phone }}</p>
            </div>

            <div class="modal-meta">
              <i class="fas fa-home"></i>
              <p>{{ user.address.city }}</p>
            </div>

            <div class="modal-meta">
              <i class="fas fa-globe"></i>
              <p>{{ user.website }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      userId: null,
      toggleModal: false
    };
  },
  components: {},
  computed: {
    ...mapGetters(["users"]),
    user() {
      return this.users.find(user => user.id === this.userId);
    }
  },
  methods: {
    ...mapActions(["getUsers"]),
    displayUserInfo(id) {
      this.toggleModal = !this.toggleModal;
      this.userId = id;
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>

<style scoped>
.card-container {
  display: grid;
  /* grid-template-columns: repeat (4, 1fr ); */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 2.4rem;
}

.card {
  position: relative;
  width: 300px;
  height: auto;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
}

.card-details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0.8rem 1.2rem;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s;
}

.card-details:hover {
  opacity: 1;
}

.card-details > * {
  transform: translateY(20px);
  transition: transform 0.6s;
}

.card-details:hover > * {
  transform: translateY(0);
}

.card-metadata {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card-img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.card-icon {
  display: block;
  /* display: inline-flex; */
  /* justify-content: flex-end; */
  text-align: right;
  cursor: pointer;
}

.card-name {
  font-weight: bold;
  font-size: 2.4rem;
}

.card-address {
  font-weight: thin;
  font-size: 1.5rem;
  color: #f1f1f1;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  overflow-y: auto;
  overflow-x: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%), translateX(100vw);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  height: 400px;

  width: 100%;

  /* color: #fff; */
  overflow-y: hidden;
  overflow-x: auto;
  pointer-events: auto;
}

.modal-body {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 50%;
  margin: 0 auto;
}

.modal-details {
  flex: 3;
  background: #fff;
  padding: 2.4rem 3.2rem;
}
.modal-img {
  overflow: hidden;
}

.modal-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.modal-meta {
  display: flex;
  align-items: center;
}

.modal-meta:not(:nth-child(1)) {
  margin-top: 2.4rem;
}

.modal-meta i {
  margin-right: 1.2rem;
}

.close-modal {
  text-align: right;
  font-size: 2.4rem;
  cursor: pointer;
}
</style>
