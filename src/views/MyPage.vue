<template>
  <div class="row g-5">
    <div class="col-md-3">
      <MyNavVue />
    </div>

    <div class="col-md-9">
      <div class="position-sticky" style="top: 2rem">
        <div class="p-4 mb-3 bg-body-tertiary rounded">
          <h4 class="fst-italic">About</h4>
          <p class="mb-0">
            Customize this section to tell your visitors a little bit about your
            publication, writers, content, or something else entirely. Totally
            up to you.
          </p>
        </div>

        <div>
          <h4 class="fst-italic">Recent posts</h4>
          <ul class="list-unstyled">
            <li>
              <card-small-vue />
            </li>
            <li>
              <card-small-vue />
            </li>
            <li>
              <card-small-vue />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardSmallVue from "@/components/CardSmall.vue";
import MyNavVue from "@/components/MyNav.vue";
export default { components: { CardSmallVue, MyNavVue } };
</script>

<style></style>
