import axios from "axios";

export default {
  postWish: function (memberId, bookId) {
    return axios.post(`/api/wishes`, {
      memberId: memberId,
      bookId: bookId,
    });
  },
  getWish: function (id) {
    return axios.get(`/api/wishes/${id}`);
  },
  getWishesByMemberId: function (memberId) {
    return axios.get(
      `/api/wishes?searchType=member_id&searchKeyword=${memberId}`
    );
  },

  deleteWish: function (bookId, memberId) {
    return axios.delete(`/api/wishes/${bookId}?memberId=${memberId}`);
  },
};
