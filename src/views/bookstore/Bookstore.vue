<template>
  <div class="bookstore">
    <div class="head">
      <header class="header">
        <img class="logo-img" src="../../assets/image/logo.png" alt />
        <div class="search" @click="$router.push('/search')">
          <img src="../../assets/image/search-icon.png" alt />
          <p>书名、作者</p>
        </div>
        <div class="icon">
          <img class="icon-img" src="../../assets/image/icon-en.png" alt />
        </div>
      </header>
    </div>

    <StoreNav></StoreNav>
    <router-view></router-view>
  </div>
</template>

<script>
import StoreNav from "./StoreNav";
export default {
  components: {
    StoreNav
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/common.scss";
.bookstore {
  height: 100%;
  display: flex;
  flex-direction: column;
  .head {
    @include border-1px(#e6e6e6);
  }
  .header {
    height: 30px;
    padding: 5px 15px;
    display: flex;
    .logo-img {
      width: 96px;
    }
    .search {
      flex: 1;
      margin: 0 10px;
      border-radius: 15px;
      background: #d7d7d7;
      display: flex;
      img {
        width: 15px;
        padding: 7.5px;
      }
      p {
        line-height: 30px;
        color: #222;
      }
    }
    .icon-img {
      width: 29px;
      margin-top: 3px;
    }
  }
}
</style>