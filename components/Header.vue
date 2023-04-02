<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container p-0">
      <a class="navbar-brand" href="#"
        ><img
          class="logo_mag"
          src="../public/assets/images/logo_noir.svg"
          alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active ps-0 m-0">
            <a class="nav-link" href="/"
              >Acceuil <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Produits</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Commanande</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">A propos de nous</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style lang="css" scoped>
.logo_mag {
  width: 40px;
  height: 40px;
}
a {
  font-weight: 600;
}
</style>