<script setup lang="ts">
type Props = {
  brand: string;
  tagline?: string;
  link: string;
  thumb?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <article class="media">
    <figure class="media-left">
      <div class="image is-64x64">
        <img :src="`/brands/${thumb}`" :alt="brand" />
      </div>
    </figure>
    <div class="media-content">
      <div class="content">
        <hgroup>
          <h4>
            <a :href="link" target="_blank">{{ brand }}</a>
          </h4>
          <h6>{{ tagline }}</h6>
        </hgroup>

        <p><slot></slot></p>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
img {
  max-height: 64px;
}
</style>
