<template>
  <div class="row g-5 mx-5">
    <div class="col-md-3">
      <my-nav-vue v-if="picture" :picture="picture" />
    </div>
    <div class="col-md-9">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyNavVue from "@/components/my/MyNav.vue";
import memberApi from "@/api/member.api";

export default {
  data() {
    return {
      memberId: null,
      picture: null,
    };
  },
  components: { MyNavVue },
  methods: {
    getProfileImage: async function () {
      this.memberId = memberApi.getMemberId();
      let res = await memberApi.getMember(this.memberId);
      this.picture = await res.data.picture;
    },
  },
  mounted() {
    memberApi.checkLogin();
    this.getProfileImage();
  },
};
</script>

<style></style>
