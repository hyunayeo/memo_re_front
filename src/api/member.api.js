import axios from "axios";
import VueCookies from "vue-cookies";

export default {
  getMembers: function (searchDto) {
    return axios.get(
      `/api/members?${new URLSearchParams(searchDto).toString()}`
    );
  },
  getMember: function (id) {
    return axios.get(`/api/members/${id}`);
  },
  getMemberId: function () {
    return VueCookies.get("memberId");
  },
  checkLogin: function () {
    if (this.getMemberId() == null) {
      alert("로그인이 필요합니다.");
      location.href = "/login";
    }
  },
  logout: function () {
    axios.get("/api/logout").then((response) => {
      console.log(response);
      if (response.status == 200) {
        VueCookies.remove("memberId");
        alert("로그아웃되었습니다.");
        location.href = "/";
      } else {
        alert("로그아웃에 실패하였습니다.");
      }
    });
  },
};
