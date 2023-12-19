<template>
  <div>
    <VCalendar
      class="my-calendar"
      expanded
      :rows="2"
      :attributes="attributes"
    />
  </div>
</template>

<script>
import articleApi from "@/api/article.api";
export default {
  data() {
    return {
      // colors: ["#FFC107", "#2196F3", "#FF5722", "#4CAF50"],
      colors: ["blue", "purple", "teal", "gray", "indigo"],
      attributes: [
        {
          bar: {
            color: "gray",
          },
          dates: new Date(),
          popover: {
            label: "today!",
          },
          order: 1,
        },
      ],
    };
  },
  methods: {
    async fetchArticle() {
      let res = await articleApi.getArticlesByMember(100);
      let articles = res.data.list;
      let i = 0;
      console.log(articles);
      articles.forEach((article) => {
        if (article.isDone) {
          this.attributes.push({
            highlight: { color : "red", fillMode : "outline" },            
            dates: new Date(article.endDate),
            popover: {
              label: article.book.title,
            },
            order: 1,
          });
        } else if (article.startDate != null && article.endDate != null) {
          this.attributes.push({
            highlight: {
              color: this.colors[i++ % this.colors.length],
              class: "opacity-25",
              contentClass: "text-secondary",
            },
            dates: {
              start: new Date(article.startDate),
              end: new Date(article.endDate),
            },
            popover: {
              label: "plan_" + article.book.title,
              style: {
                opacity: "50",
                color: "yellow",
              },
            },
          });
        }
      });

      this.attributes.push({});
    },
  },
  mounted() {
    this.fetchArticle();
  },
  updated() {},
};
</script>

<style>
.my-calendar .vc-weekday-1 {
  color: red;
}
.my-calendar .vc-weekday-7 {
  color: slateblue;
}
</style>
