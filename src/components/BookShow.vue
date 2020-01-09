<template>
  <div class="bookshow">
    <div class="title">签约新作</div>
    <ul>
      <li v-for="item in bookshow" :key="item.id">
        <img :src="item.img" alt />
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["bookshow"]
};
</script>
<style lang="scss" scoped>
.bookshow {
  height: 360px;
  padding: 0 15px;
  .title {
    line-height: 50px;
    font-size: 18px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    li {
      flex: 1;
      margin: 10px 0;
      p {
        margin-top: 4px;
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
}
</style>