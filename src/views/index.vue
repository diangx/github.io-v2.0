<template>
  <whoami-page></whoami-page>
</template>

<script>
import whoamiPage from './whoami/index.vue'

export default {
    components :{
        whoamiPage
    },
    data() {
        return {
            name : "김지완"
        }
    },
}
</script>