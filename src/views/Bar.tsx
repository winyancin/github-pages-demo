import { defineComponent, ref } from "vue"

export const Bar = defineComponent({
  setup() {
    const count = ref(0)
    return () => (<div>Bar</div>)
  }
})
