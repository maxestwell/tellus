<script setup>
import { ref, onMounted, watch } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'
import profiles from '@/assets/data/sounds.json'

const headerTitle = ref('Default Title') // Default text

// Props setup
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

// Reactive profile and related data
const profile = ref({})
const backgroundImageUrl = ref('')
const profileImageUrl = ref('')
const stickerImageUrl = ref('')
const location = ref('')

// Fetch the profile data
onMounted(() => {
  const profileData = profiles.find((p) => p.profile.some((profile) => profile.name === props.name))
  if (profileData) {
    const foundProfile = profileData.profile.find((profile) => profile.name === props.name)
    if (foundProfile) {
      profile.value = foundProfile
      headerTitle.value = foundProfile.userName // Update headerTitle dynamically
      backgroundImageUrl.value = `/tellus/images${foundProfile.backgroundImage}`
      profileImageUrl.value = `/tellus/images${foundProfile.profileImage}`
      stickerImageUrl.value = `/tellus/images${foundProfile.sticker}`
      location.value = foundProfile.location
    }
  }
})
</script>

<template>
  <header>
    <TheTitle :title="headerTitle" />
    <TheNav />
  </header>
  <img :src="backgroundImageUrl" :alt="profile.backgroundImageAlt" class="bgimg" />
  <div class="profile">
    <div class="writing">
      <div class="profileborder">
        <img :src="profileImageUrl" :alt="profile.profileImageAlt" class="profileimg" />
      </div>

      <!-- <h1 :style="{ fontFamily: profile.font }">{{ profile.userName }}</h1> -->
      <p>{{ location }}</p>
      <p>{{ profile.bio }}</p>
      <div class="sticker">
        <h2>stickers</h2>
        <img :src="stickerImageUrl" :alt="profile.stickerAlt" class="stickerimg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  max-width: 100%;
  object-fit: cover;
}

.profile {
  height: 100%;
  width: 100%;
}

p,
h2 {
  color: #fff;
  mix-blend-mode: difference;
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
