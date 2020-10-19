<template>
  <div class="container">
    <Product-Component />
  </div>
</template>
<script>
import ProductComponent from '@/components/ProductComponent'

export default {
  name: 'ProductView',
  components: {
    ProductComponent
  }
}
</script>

