<template>
  <div class="search-wrapper">
    <div class="head">
      <header>
        <div class="search">
          <img src="../../assets/image/search-icon.png" alt />
          <input type="text" v-model="keywords" placeholder="输入书名/作者/关键词" @blur="addsearch" />
        </div>
      </header>
    </div>

    <div class="everyone-searching">
      <h3>大家都在搜</h3>
      <ul>
        <li v-for="item in everysearching" :key="item.id">{{item.bookname}}</li>
      </ul>
    </div>
    <div class="search-history">
      <div class="text1">历史搜索</div>
      <div class="text2" @click="delsearch">
        <img src="../../assets/image/clear.png" alt />
        <p>清空搜索记录</p>
      </div>
    </div>
    <ul class="historysearchlist">
      <li v-for="(item,index) in historysearchlist" :key="item+index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
import { getEverySearch } from "../../api/search";
export default {
  data() {
    return {
      everysearching: [],
      keywords: "",
      historysearchlist: []
    };
  },
  async mounted() {
    let rs = await getEverySearch();
    this.everysearching = rs.data;
    //console.log(rs);

    this.getsearch();
  },
  methods: {
    getsearch() {
      this.historysearchlist = this.$cache.getSearch();
    },
    addsearch() {
      //console.log("addsearch");
      this.$cache.addSearch(this.keywords);
      this.getsearch();
    },
    delsearch() {
      this.$cache.delSearch();
      this.getsearch();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/common.scss";
.search-wrapper {
  display: flex;
  flex-direction: column;
  .head {
    @include border-1px(#e6e6e6);
  }
  header {
    padding: 10px;
    height: 30px;
    div {
      height: 100%;
      background-color: #f5f5f5;
      border-radius: 15px;
      display: flex;
    }
    img {
      width: 15px;
      height: 15px;
      padding: 7.5px 7.5px;
    }
    input {
      flex: 1;
      height: 100%;
      border: 0px;
      outline: none;
      background-color: #f5f5f5;
      border-radius: 15px;
    }
  }
  .everyone-searching {
    padding: 16px 15px;
    h3 {
      font-size: 18px;
      line-height: 25px;
      margin-bottom: 8px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin: 5px;
        padding: 4px 10px;
        font-size: 13px;
        color: #666;
        background: #f3f5f7;
        border-radius: 3px;
      }
    }
  }
  .search-history {
    height: 25px;
    padding: 0 20px 15px;
    display: flex;
    justify-content: space-between;
    .text1 {
      font-size: 18px;
      line-height: 25px;
    }
    .text2 {
      img {
        width: 20px;
        height: 20px;
        padding: 2.5px;
        vertical-align: middle;
      }
      p {
        display: inline-block;
        font-size: 12px;
        line-height: 25px;
        margin-left: 5px;
      }
    }
  }
  .historysearchlist {
    padding: 0 15px;
    display: flex;
    flex-wrap: wrap;
    li {
      margin: 5px;
      padding: 4px 10px;
      font-size: 13px;
      color: #666;
      background: #f3f5f7;
      border-radius: 3px;
    }
  }
}
</style>