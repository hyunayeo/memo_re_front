import axios from "axios";
import VueCookies from "vue-cookies";

export default {
  memberId: VueCookies.get("memberId"),
  postWish: function (bookId) {
    return axios.post(`/api/wishes`, {
      memberId: this.memberId,
      bookId: bookId,
    });
  },
  getWishes: function (searchDto) {
    return axios.get(
      `/api/wishes?${new URLSearchParams(searchDto).toString()}`
    );
  },
  getWishByBookId: function (bookId) {
    return axios.get(`/api/wishes/${bookId}?memberId=${this.memberId}`);
  },
  getWishesByMemberId: function () {
    return axios.get(
      `/api/wishes?searchType=member_id&searchKeyword=${this.memberId}`
    );
  },

  deleteWish: function (bookId) {
    return axios.delete(`/api/wishes/${bookId}?memberId=${this.memberId}`);
  },
};
