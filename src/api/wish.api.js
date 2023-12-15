import axios from "axios";
import VueCookies from "vue-cookies";

export default {
  postWish: function (memberId, bookId) {
    return axios.post(`/api/wishes`, {
      memberId: memberId,
      bookId: bookId,
    });
  },
  getWishByBookId: function (bookId, memberId) {
    return axios.get(`/api/wishes/${bookId}?memberId=${memberId}`);
  },
  getWishesByMemberId: function () {
    let memberId = VueCookies.get("memberId");
    return axios.get(
      `/api/wishes?searchType=member_id&searchKeyword=${memberId}`
    );
  },

  deleteWish: function (bookId, memberId) {
    return axios.delete(`/api/wishes/${bookId}?memberId=${memberId}`);
  },
};
