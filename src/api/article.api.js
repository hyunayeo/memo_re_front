import axios from 'axios';
import apiUtils from './apiUtils.js'

// const BASE_URL = '/api/articles';
export default {
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
    updateArticle: async function(id, article) {
      await axios.put(`/api/articles/${id}`, article);
    },   
    deleteArticle: async function(id) {
      await axios.delete(`/api/articles/${id}`);
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

        let [articles, pagination] = await this.getArticles(searchDto)
        .then((res) => {
          return [res.data.list, res.data.pagination];
        });

        await articles.forEach(async article => {
          await this.getBook(article.bookId);
          
          this.getBooks.
          then((res) => {
            let book = res.data;
            article.book = book;
            article.createdAt = apiUtils.trimDate(article.createdAt);
            
          })
          await this.getMember(article.bookId).
          then((res) => {
            let member = res.data;
            article.member = member;
          })
        })
      
        return [articles, pagination];
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