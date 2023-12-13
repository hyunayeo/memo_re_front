<template>
  <div class="row g-5 mx-5">
    <div class="col-md-3">
      <my-nav-vue :picture="picture"/>
    </div>
    <div class="col-md-9">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyNavVue from "@/components/MyNav.vue";
import memberApi from "@/api/member.api";

export default {
  data() {
    return {
      memberId: null,
      res: Object,
      picture: null,
    };
  },
  components: { MyNavVue },
  methods: {
    getProfileImage: async function () {
      this.memberId = memberApi.getMemberId();
      this.res = await memberApi.getMember(this.memberId);
      this.picture = this.res.data.picture;
    },
  },
  mounted() {
    memberApi.checkLogin();
    this.getProfileImage();
  },
};
</script>

<style></style>
