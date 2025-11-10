<template>
  <main :class="$style['primary-layout']">
    <div :class="$style['primary-layout__container']">
      <slot />
    </div>
  </main>
</template>

<style lang="postcss" module src="../WInnerLayout.module.pcss" />
