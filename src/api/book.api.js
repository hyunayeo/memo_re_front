import axios from 'axios';
// import articleApi from './article.api';
import apiUtils from './apiUtils';

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
    getBooks: function(searchDto) {
        return axios.get(`/api/books?${new URLSearchParams(searchDto).toString()}`);
    },
    getBook: function(id) {
        return axios.get(`/api/books/${id}`);
    },
    getBookWithArticles : async function(id) {
        let book = await this.getBook(id);
        book = await book.data;
        
        let articles = await axios.get( apiUtils.extractURL(book, "articles"));
        articles = articles.data.list;
        console.log(articles);

        book.articles = articles;

        return book;
    },
    // 도서 상세 페이지 보기
    getBookWithArticlesAndMembers : async function(id) {
        let book = await this.getBook(id);
        book = await book.data;


        console.log(book);

        // let articles = await axios.get(book._links.articles.href);
        
        let articles = await axios.get( apiUtils.extractURL(book, "articles"));
        articles = articles.data.list;
        console.log(articles);

        book.articles = articles;
        articles.forEach(async (article) => {
            
            let member = await axios.get(`/api/members/${article.memberId}`);

            article.member = member;
        });

        // let members = await axios.get( apiUtils.exractURL(book, "members"));
        // let articles = await axios.get("/api/articles?searchType=book_id&searchKeyword=19");
        // articleApi.searchDto.searchType = "book_id";
        // articleApi.searchDto.searchKeyword = id;
        // let articles = await articleApi.getArticles(this.searchDto);
        
        console.log(book);
        // console.log(articles);
        // console.log(members);
        return book;
    },
    // 찜 목록에서 가져온 도서 리스트
    getBooksByMemberWishes : async function(memberId) {
        this.searchDto.searchType = "member_id"
        this.searchDto.searchKeyword = memberId;
        console.log()

        let wishes = await axios.get(`/api/wishes?${new URLSearchParams(this.searchDto).toString()}`);
        wishes = wishes.data.list;
        // console.log(wishes);

        let books = [];
        wishes.forEach(async (wish) => {
            let book = await axios.get(`/api/books/${wish.bookId}`);
            books.push(book.data);
        });

        console.log(books);
    },
    // 특정 회원이 등록한 도서 리스트
    getBooksByMemberRegister : async function() {

    },

}