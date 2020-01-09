<template>
  <nav class="storenav">
    <router-link tag="div" to="/bookstore/channelone">精选</router-link>
    <router-link tag="div" to="/bookstore/channeltwo">男频</router-link>
    <router-link tag="div" to="/bookstore/channelthree">女频</router-link>
    <div @click="$router.push('/voiced')">有声</div>
  </nav>
</template>
<style lang="scss" scoped>
.storenav {
  display: flex;
  div {
    flex-grow: 1;
    padding: 0 5px;
    line-height: 44px;
    text-align: center;
    font-size: 14px;
  }
}
</style>