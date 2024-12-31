import { defineComponent, ref } from "vue"

export const Foo = defineComponent({
  setup() {
    const count = ref(0)
    return () => (<div>Foo</div>)
  }
})
