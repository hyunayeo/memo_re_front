<template>
  <div>
    <div class="d-flex justify-content-end align-items-center">
      <div :class="{ 'text-secondary': !isDone }" @click="onClickDone">
        ⭕ : 다 읽은 도서
      </div>
      <div :class="{ 'text-secondary': !isReading }" @click="onClickReading">
        ✔️ : 읽고 있는 도서
      </div>
    </div>

    <VCalendar
      class="my-calendar"
      expanded
      :rows="2"
      :attributes="attributes"
      :key="componentKey"
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
      readingAttributes: [],
      doneAttributes: [],
      isReading: true,
      isDone: true,
      attributes: [],
      componentKey: 0,
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    updateAttributes() {
      this.attributes = [
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
      ];
      if (this.isReading == true) {
        this.attributes = this.attributes.concat(this.readingAttributes);
      }
      if (this.isDone == true) {
        this.attributes = this.attributes.concat(this.doneAttributes);
      }
      this.forceRerender();
    },
    onClickReading() {
      this.isReading = !this.isReading;
      this.updateAttributes();
    },
    onClickDone() {
      this.isDone = !this.isDone;
      this.updateAttributes();
    },
    async fetchArticle() {
      let res = await articleApi.getArticlesByMember(100);
      let articles = res.data.list;
      let i = 0;
      articles.forEach((article) => {
        if (article.isDone) {
          this.doneAttributes.push({
            highlight: { color: "red", fillMode: "outline" },
            dates: new Date(article.endDate),
            popover: {
              label: "(완)" + article.book.title,
            },
            order: 1,
          });
        } else if (article.startDate != null && article.endDate != null) {
          this.readingAttributes.push({
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
              label: article.book.title,
              style: {
                opacity: "50",
                color: "yellow",
              },
            },
          });
        }
      });
      this.updateAttributes();
    },
  },
  mounted() {
    this.fetchArticle();
  },
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
