import axios from "axios";
// import apiUtils from "./apiUtils";

export default {
  searchDto: {
    page: 1,
    recordSize: 10,
    pageSize: 10,
    domainType: "article",
    sortFieldType: "id",
    sortAs: "desc",
    searchKeyword: "",
    searchType: "",
  },
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
