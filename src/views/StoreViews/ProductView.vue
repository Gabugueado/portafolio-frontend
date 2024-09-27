<template>
  product {{ $route.params.id }}

  <router-link :to="{ name: 'wishlist' }"> wishlist</router-link>
</template>
