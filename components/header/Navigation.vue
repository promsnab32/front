<template>
  <section class="hero">
    <div class="container">
      <nav class="hero__nav">
        <ul class="list-reset hero__nav-list">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="hero__nav-item"
          >
            <NuxtLink
              v-if="item.type === 'link'"
              class="hero__nav-link"
              :to="item.link"
              >{{ item.title }}</NuxtLink
            >
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
  background: linear-gradient(
      0deg,
      rgba(10, 37, 82, 0.69) 0%,
      rgba(10, 37, 82, 0.69) 100%
    ),
    url('/img/hero.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 84px;
  overflow: hidden;
  @media screen and (max-width: 636px) {
    background: #082246;
  }
  @media screen and (max-width: 370px) {
    height: 110px;
  }

  &__nav-list {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 370px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
  }

  &__nav {
    position: relative;
    padding: 25px 0;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -50%; /* Выход за пределы контейнера */
      right: -50%; /* Выход за пределы контейнера */
      bottom: 0;
      background-image: url('/img/hero.png');
      background-size: cover;
      filter: blur(2px);

      width: 200%; /* Оставляем ширину 100% */
    }
  }

  &__nav-link {
    color: #fff;
    text-align: center;
    font-family: 'Manrope';
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #fb6415;
    }
    @media screen and (max-width: 748px) {
      font-size: 14px;
    }
    @media screen and (max-width: 586px) {
      font-size: 10px;
    }
  }

  &__dash {
    display: inline-block;
    width: 1px;
    height: 20px;
    background: #fff;
    @media screen and (max-width: 748px) {
      height: 15px;
    }
    @media screen and (max-width: 586px) {
      height: 12px;
    }
    @media screen and (max-width: 406px) {
      display: none;
    }
  }
}
</style>
