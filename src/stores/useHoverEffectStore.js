import { defineStore } from 'pinia'
import { gsap } from 'gsap'

export const useHoverEffectStore = defineStore('hoverEffect', {
  actions: {
    applyHoverEffects(element) {
      const handleMouseEnter = () => {
        if (element) {
          gsap.to(element, {
            duration: 0.2,
            fontVariationSettings: "'wght' 500, 'BACK' 700, 'RECT' 700, 'ELSH' 4",
          })
        }
      }

      const handleMouseLeave = () => {
        if (element) {
          gsap.to(element, {
            duration: 0.2,
            fontVariationSettings: "'wght' 700, 'BACK' 0, 'RECT' 0, 'ELSH' 4",
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
