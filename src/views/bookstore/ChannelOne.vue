<template>
  <div class="wrapper">
    <div class="channelone" :style="{height:cwidth}">
      <!-- 轮播 -->
      <Swiper :imgsrc="imgsrc"></Swiper>
      <!-- 签约新作 -->
      <BookShow :bookshow="bookshow"></BookShow>
      <!-- 重磅推荐 -->
      <dl class="booklist">
        <dt>重磅推荐</dt>
        <dd v-for="item in bookdetail" :key="item.id">
          <img :src="item.img" alt />
          <div class="text">
            <h3>{{item.name}}</h3>
            <h4>{{item.author}}</h4>
            <p>{{item.text}}</p>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
import Swiper from "../../components/Swiper";
import BookShow from "../../components/BookShow";
import { getBookList, getBooKShow, getBookDetail } from "../../api/book";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import { Toast, Indicator } from "mint-ui";
import "mint-ui/lib/style.css";

BScroll.use(Pullup);

export default {
  components: {
    Swiper,
    BookShow
  },
  data() {
    return {
      imgsrc: [],
      bookshow: [],
      bookdetail: [],
      params: {
        pageno: 1,
        pagesize: 8
      },
      total: 0
    };
  },
  computed: {
    cwidth() {
      return (
        134 + 360 + 50 + 135 * this.params.pageno * this.params.pagesize + "px"
      );
    }
  },
  async created() {
    let rs = await getBookList();
    this.imgsrc = rs.data;
    let rs2 = await getBooKShow();
    this.bookshow = rs2.data;
    let rs3 = await getBookDetail(this.params);
    this.bookdetail = rs3.data.mockStoreImg3;
    this.total = rs3.data.total;
    //console.log(rs3);
  },
  mounted() {
    this.$nextTick(() => {
      this.bs = new BScroll(".wrapper", {
        scrollY: true,
        pullUpLoad: true
      });
      this.bs.on("pullingUp", () => {
        //console.log('pullingUp');
        this.getMoreBooKShow();
      });
    });
  },
  methods: {
    async getMoreBooKShow() {
      if (this.bookdetail.length === this.total) {
        Toast({
          message: "已经加载完了",
          position: "bottom",
          duration: 2000
        });
      } else {
        Indicator.open("加载中...");
        this.params.pageno++;
        let result = await getBookDetail(this.params);
        //console.log(result);
        this.bookdetail.push(...result.data.mockStoreImg3);
        this.$nextTick(() => {
          this.bs.finishPullUp();
          this.bs.refresh();
          Indicator.close();
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.channelone {
  flex: 1;
  .booklist {
    padding: 0 15px;
    dt {
      line-height: 50px;
      font-size: 18px;
    }
    dd {
      display: flex;
      margin-bottom: 15px;
      .text {
        margin-left: 10px;
        h3 {
          margin-top: 4px;
          font-size: 16px;
          color: #333;
        }
        h4 {
          margin: 8px 0;
          font-size: 14px;
          color: #666;
        }
        p {
          font-size: 14px;
          line-height: 16px;
          color: #999;
          // white-space: nowrap;
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          height: 64px;
        }
      }
    }
  }
}
.wrapper {
  height: 100%;
  flex: 1;
  overflow: hidden;
}
</style>