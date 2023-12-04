import axios from 'axios';

export default {
    
    install(Vue) {
        Vue.config.globalProperties.$axios = axios;
        Vue.config.globalProperties.$BOOK_URL = "/api/books";
        Vue.config.globalProperties.$ARTICLE_URL = "/api/articles";
        Vue.config.globalProperties.$MEMBER_URL = "/api/members";
        Vue.config.globalProperties.article_url ="/api/articles";

        Vue.config.globalProperties.$getArticles = function(x) {
        axios.get(this.$ARTICLE_URL)
        .then((result) => {
          let articles = result.data.list;
    
          articles.forEach(async (article) => {
            await this.$axios.get(`${this.$BOOK_URL}/${article.bookId}`)
            .then((result) => {
              let book = result.data;
              article.bookImg = book.cover;
              article.bookTitle = book.title;
            //   console.log(article.bookImg);
            })
          });
    
          x = articles;
          console.log(articles)
          return x;
        })
        .catch((err)=> {
          console.log(err)
        })
        }
    }
}