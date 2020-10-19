<template>
  <div class="container">
    <Provider-Component />
  </div>
</template>
<script>
import ProviderComponent from '@/components/ProviderComponent'

export default {
  name: 'ProviderView',
  components: {
    ProviderComponent
  }
}
</script>

