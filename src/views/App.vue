<style>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";

#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
}
</style>
  
<template>
  <main id="app" class=" __overflow-hidden">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav navbar-right">
        <li class="nav-item ml-3"><router-link to="/"><i class="fas fa-home"></i></router-link></li>
        <li class="nav-item ml-3"><router-link to="/config"><i class="fas fa-cogs"></i></router-link></li>  
      </ul>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav navbar-right">
          <li class="nav-item ml-3">
            <router-link to="/category" title="Categoría">Categoría</router-link>
          </li>
          <li class="nav-item ml-3">
            <router-link to="/provider" title="Proveedor">Proveedor</router-link>
          </li>          
          <li class="nav-item ml-3">
            <router-link to="/product" title="Producto">Producto</router-link>
          </li>         
          <li class="nav-item ml-3">
            <router-link to="/sales" title="Vender">Vender</router-link>
          </li>           
          <li class="nav-item ml-3">
            <router-link to="/models" title="Modelo">Modelo</router-link>
          </li>          
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'app'
}
</script>
