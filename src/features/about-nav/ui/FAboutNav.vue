<template>
  <nav :class="$style['about-nav']">
    <ul :class="$style['about-nav__list']">
      <li
        v-for="link of navLinks"
        :key="link"
        :class="[$style['about-nav__item'], { [$style['about-nav__item--active']]: selected === link }]"
        @click="selected = link"
      >
        {{ navLinkLabels[link] }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import useAboutNav from '../model/useAboutNav';

const { selected, navLinks, navLinkLabels } = useAboutNav();
</script>

<style lang="postcss" module src="../style.module.pcss" />
