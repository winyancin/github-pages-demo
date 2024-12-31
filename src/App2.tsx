import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

export const App2 = defineComponent({
  setup() {
    const count = ref(0)
    return  () => (
      <div>
        <h1>Hello App!</h1>
        <p>
          <strong>Current route path:</strong>
        </p>
        <nav>
          <RouterLink to="/">Go to Home</RouterLink>
          <RouterLink to="/about">Go to About</RouterLink>
        </nav>
        <main>
          <RouterView />
        </main>
      </div>
    )
  }
})
