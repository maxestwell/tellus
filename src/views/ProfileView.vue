<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'

const headerTitle = ref('Default Title')

onMounted(() => {
  headerTitle.value = 'T'
})
</script>

<script>
import profiles from '@/assets/data/sounds.json' // Same JSON file for both

const images = import.meta.glob('@/assets/images/*')

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      profile: {},
      backgroundImageUrl: '',
      profileImageUrl: '',
      stickerImageUrl: '',
    }
  },
  created() {
    // Find the profile by name
    const profileData = profiles.find((p) =>
      p.profile.some((profile) => profile.name === this.name),
    )
    if (profileData) {
      this.profile = profileData.profile.find((profile) => profile.name === this.name)
      const backgroundImagePath = `/src/assets/images${this.profile.backgroundImage}`
      const profileImagePath = `/src/assets/images${this.profile.profileImage}`
      const stickerImagePath = `/src/assets/images${this.profile.sticker}`
      if (images[backgroundImagePath]) {
        images[backgroundImagePath]().then((module) => {
          this.backgroundImageUrl = module.default
        })
      } else {
        console.warn(`Image not found for ${backgroundImagePath}`)
      }
      if (images[profileImagePath]) {
        images[profileImagePath]().then((module) => {
          this.profileImageUrl = module.default
        })
      } else {
        console.warn(`Image not found for ${profileImagePath}`)
      }
      if (images[stickerImagePath]) {
        images[stickerImagePath]().then((module) => {
          this.stickerImageUrl = module.default
        })
      } else {
        console.warn(`Image not found for ${stickerImagePath}`)
      }
    } else {
      this.profile = {
        name: 'Unknown',
        backgroundImage: '/images/cloudmtns.jpg',
        backgroundImageAlt: 'Default background image',
        profileImage: '/images/hand.png',
        profileImageAlt: 'Default profile image',
        sticker: '/images/default-sticker.png',
        stickerAlt: 'Default sticker',
        font: 'Arial, sans-serif',
        bio: 'This profile does not exist.',
      }
      this.backgroundImageUrl = new URL('/src/assets/images/cloudmtns.jpg', import.meta.url).href
      this.profileImageUrl = new URL('/src/assets/images/hand.png', import.meta.url).href
      this.stickerImageUrl = new URL('/src/assets/images/default-sticker.png', import.meta.url).href
    }
  },
}
</script>

<template>
  <div class="views">
    <header>
      <TheTitle :title="headerTitle" />
      <TheNav />
    </header>
    <img :src="backgroundImageUrl" :alt="profile.backgroundImageAlt" class="bgimg" />
    <div class="profile">
      <div class="profileborder">
        <img :src="profileImageUrl" :alt="profile.profileImageAlt" class="profileimg" />
      </div>
      <h1 :style="{ fontFamily: profile.font }">{{ profile.userName }}</h1>
      <p>{{ profile.bio }}</p>
      <div class="sticker">
        <h2>stickers</h2>
        <img :src="stickerImageUrl" :alt="profile.stickerAlt" class="stickerimg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.views {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

img {
  max-width: 100%;
  object-fit: cover;
}

.profile {
  height: 100%;
  width: 100%;
}

.bgimg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /* Send the background image to the back */
}

.profileborder {
  width: 100px;
  height: 100px;
  border: 2px solid #000;
  background-color: #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.profileimg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.stickerimg {
  width: 50px;
  height: 50px;
}

.title-container {
  display: flex;
  flex-direction: column;
}
</style>
