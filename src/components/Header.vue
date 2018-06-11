<template>
    <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
          <router-link to="/" class="navbar-brand">The Stock Trader</router-link>
      </div>
      <div class="collapse navbar-collapse" >
           <ul class="navbar-nav nav">
                <router-link to="/portfolio" active-class="active" tag="li"><a>Portfolio</a></router-link>
                <router-link to="/stocks" active-class="active" tag="li"><a>Stocks</a></router-link>
           </ul>
           <ul class="nav navbar-nav navbar-right">
            <li><a href="#">End Day</a></li>
            <li class="dropdown">
            <a class="dropdown-toggle" 
                href="#" id="navbarDropdown" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                Save and Load 
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li class="dropdown-item" href="#">Save Data</li>
                <li class="dropdown-item" href="#">Load Data</li>
            </ul>
            </li>
            </ul>
        </div>
    </div>
</nav>
</template>
<script>
export default {
    
}
</script>
<style>

</style>
