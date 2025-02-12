<template>
  <section class="hero">
    <div class="container">
      <nav class="hero__nav">
        <ul class="list-reset hero__nav-list">
          <li v-for="(item, index) in items" :key="index" class="hero__nav-item">
            <NuxtLink v-if="item.type === 'link'" class="hero__nav-link" :to="item.link">{{ item.title }}</NuxtLink>
            <span v-else class="hero__dash"></span>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script lang="ts" setup>
const items = navList
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  background: linear-gradient(0deg, rgba(10, 37, 82, 0.69) 0%, rgba(10, 37, 82, 0.69) 100%), url('/img/hero.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;
  &__nav-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__nav {
    padding: 25px 15px;
    border-bottom: 1px solid #8F8F8F;
  }
  &__nav-link {
    color: #FFF;
    text-align: center;
    font-family: 'Manrope';
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: none;
  }
  &__dash {
    display: inline-block;
    width: 1px;
    height: 20px;
    background: #FFF;
  }
}
</style>
