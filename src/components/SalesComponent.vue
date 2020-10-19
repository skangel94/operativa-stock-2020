<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6 div_trans8 corner4 text-white mt-3">
          <h4 class="mt-2 text-center">Ventas</h4>
          <h6>Agrega una nueva venta</h6>
          <form action="" class="form-group">
            <div class="row justify-content-center" v-if="success">
              <div class="alert alert-success col-md-12">{{ success }}</div>
            </div>
            <div class="row justify-content-center" v-else-if="error">            
              <div class="alert alert-danger col-md-11 m-2">{{ error }}</div>    
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="stock_product">Producto: </label>
                <select id="stock_product" required v-model="product">
                  <option value="" selected disabled>Elige un</option>
                  <option :value="productUnit" v-for="(productUnit, index) in products" :key="index">{{ productUnit.name }}</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="amount">Cantidad:</label>
                <input class="form-control" id="amount" type="number" min="0" v-model.number="amount" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="unitCost">Precio unitario:</label>
                <input class="form-control" id="unitCost" type="number" min="0" v-model.number="unitCost" disabled>
              </div>
            </div> 
            <div class="row">
              <div class="form-group col-md-12">
                <label for="totalCost">Costo total:</label>
                <input class="form-control" id="totalCost" type="number" min="0" v-model.number="totalCost" disabled>
              </div>
            </div>     
            <div class="row justify-content-center">     
              <div class="form-group col-md-2">                              
                <button type="submit" class="btn btn-outline-primary" @click.prevent="confirmar">Guardar</button>
              </div>
            </div>
          </form>
        </div>
    </div>
  </div>
</template>

<script>
import ProductService from '@/services/ProductService'
import SalesService from '@/services/SalesService'

export default {
  name: 'SalesComponent',
  data() {
    return {
      product: '',
      amount: 0,
      sale:'',
      unitCost: 0,
      totalCost: 0,
      success: undefined,
      error: undefined,
      products: []
    }
  },
  watch: {
    product() {
      this.unitCost = this.product.cost || 0
      this.totalCost = this.unitCost * this.amount
    },
    amount() {
      this.totalCost = this.unitCost * this.amount
    }
  },
  methods: {
    create() {
      if ( this.product && this.amount >= 0 ) {
        this.product.currentAmount=this.amount;
        const sale = {
          product: this.product,
          amount: this.totalCost
        }

        SalesService.create(sale)
          .then(resolve => {
            this.success = "Venta ingresada"
            setTimeout(() => {
              this.success = undefined
            }, 2500)
            this.clean()
          })
          .catch(reject => {
            this.error = reject
            setTimeout(() => {
              this.error = undefined
            }, 2500)
          }) 
      } else {
        this.error = 'Llene todos los campos.'

        setTimeout(() => {
          this.error = undefined
        }, 2500)
      }
    },
    clean() {
      this.product = ''
      this.amount = 0
    },
  },
  created() {
    ProductService.retrieveAll()
      .then(resolve => {
        this.products = resolve
      })
  }
}
</script>

