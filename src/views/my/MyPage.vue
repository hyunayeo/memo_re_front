<template>
  <div class="position-sticky" style="top: 2rem">
    <div class="p-4 mb-3 bg-body-tertiary rounded">
      <h4 class="fst-italic">About</h4>
      <p class="mb-0">
        Customize this section to tell your visitors a little bit about your
        publication, writers, content, or something else entirely. Totally up to
        you.
      </p>
    </div>

    <div>
      <h4 class="fst-italic">Recent posts</h4>
      <ul class="list-unstyled">
        <li>
          <PostSmall />
        </li>
        <li>
          <PostSmall />
        </li>
        <li>
          <PostSmall />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PostSmall from "@/components/article/PostSmall.vue";
export default { components: { PostSmall } };
</script>

<style></style>
