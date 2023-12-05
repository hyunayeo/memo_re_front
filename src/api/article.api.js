import axios from 'axios';
import apiUtils from './apiUtils.js'

// const BASE_URL = '/api/articles';
export default {
    SORT_FIELD_TYPE : {
        ID : 'id',
    },
    searchDto : {
        page : 1,
        recordSize : 10,
        pageSize : 10,
        domainType : 'article',
        sortFieldType : 'id',
        sortAs : 'desc',
        searchKeyword : '',
        searchType : '',
    },
    getArticles: function (searchDto) {
        return axios.get(`/api/articles?${new URLSearchParams(searchDto).toString()}`);
    },
    getArticle: function (id) {
        return axios.get(`/api/articles/${id}`);
    },
    postArticle: function (userId, title, body) {
        return axios.post(`/api/articles`, {
            userId: userId,
            title: title,
            body: body,
        });
    },
    getBooks: function (searchDto) {
        return axios.get(`/api/books?${new URLSearchParams(searchDto).toString()}`);
    },
    getBook: function (id) {
        return axios.get(`/api/books/${id}`);
    },
    getMembers: function (searchDto) {
        return axios.get(`/api/members?${new URLSearchParams(searchDto).toString()}`);
    },
    getMember: function (id) {
        return axios.get(`/api/members/${id}`);
    },
    // getArticlesWithMembers: async function(searchDto) {
    //     let articles = await this.getArticles(searchDto);
    //     articles = articles.list.data;
    //     await articles.forEach((article) => {
    //       memberApi
    //     })
    // },
    getArticlesWithBookAndMember: async function (articles , searchDto) {
        await this.getArticles(searchDto)
        .then((res) => {
          articles = res.data.list;
        });
    
        await articles.forEach(article => {
          this.getBook(article.bookId).
          then((res) => {
            let book = res.data;
            article.bookImg = book.cover;
            article.bookName = book.name;
          })
          this.getMember(article.bookId).
          then((res) => {
            let member = res.data;
            article.memberName = member.name;
          })
        })
    },
    getArticlesWithBookAndMember2: async function (searchDto) {
        let articles = await this.getArticles(searchDto)
        .then((res) => {
          return res.data.list;
        });
    
        await articles.forEach(article => {
          this.getBook(article.bookId).
          then((res) => {
            let book = res.data;
            article.bookImg = book.cover;
            article.bookName = book.name;
          })
          this.getMember(article.bookId).
          then((res) => {
            let member = res.data;
            article.memberName = member.name;
          })
        })
        
        return articles;
    },
    getArticlesWithBookAndMember3: async function (searchDto) {
        let articles = await this.getArticles(searchDto)
        .then((res) => {
          return res.data.list;
        });
    
        
        await articles.forEach(async article => {
          await this.getBook(article.bookId).
          then((res) => {
            let book = res.data;
            article.bookImg = book.cover;
            article.bookName = book.name
            article.createdAt = apiUtils.trimDate(article.createdAt);
          })
          await this.getMember(article.bookId).
          then((res) => {
            let member = res.data;
            article.memberName = member.name;
          })
        })
        
        return articles;
    },
    // 도서 이미지 있는 게시판만 추출하는 함수
    getArticlesWithBookImageIncludedAndMember: async function (searchDto) {
        let articles = await this.getArticles(searchDto)
        .then((res) => {
          return res.data.list;
        });
    
        articles = await articles.forEach(async article => {
          await this.getBook(article.bookId).
          then((res) => {
            let book = res.data;
            
            // console.log(book);
            // console.log(book.cover);
            // console.log(book.cover.slice(-3))
            
            if (book.cover == null || book.cover.slice(-3) != 'jpg') {
                console.log(articles.indexOf(article));
                let index = articles.indexOf(article);
                if ( index > -1) {
                    articles.splice(index, 1);
                }
                console.log(articles)
            } else {
                article.bookImg = book.cover;
                article.bookName = book.name;
            }
          })
          await this.getMember(article.bookId).
          then((res) => {
            let member = res.data;
            article.memberName = member.name;
          })
        })
      
        console.log(articles);
        return articles;
    },      
    getArticlesByMember : async function(id) {
      this.searchDto.searchType = "member_id";
      this.searchDto.searchKeyword = id;
      
      let articles = await this.getArticles(this.searchDto);
      
      return articles;
    }
}