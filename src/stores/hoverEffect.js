import { defineStore } from 'pinia'
import { gsap } from 'gsap'

export const useHoverEffectStore = defineStore('hoverEffect', {
  actions: {
    applyHoverEffects(element, defaultSettings, hoverSettings) {
      const handleMouseEnter = () => {
        if (element) {
          console.log('Mouse enter:', element)
          gsap.to(element, {
            duration: 0.3,
            fontVariationSettings: hoverSettings,
          })
        }
      }

      const handleMouseLeave = () => {
        if (element) {
          console.log('Mouse leave:', element)
          gsap.to(element, {
            duration: 0.3,
            fontVariationSettings: defaultSettings,
          })
        }
      }

      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    },
  },
})
