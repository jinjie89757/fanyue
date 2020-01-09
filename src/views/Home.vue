<template>
  <div class="home">
    <!-- main start -->
    <main>
      <router-view></router-view>
    </main>
    <!-- main end -->
    <!-- nav start -->
    <nav>
      <ul>
        <router-link active-class="active" class="bookshelf" to="/bookshelf" tag="li">
          <span class="iconfont">
            &#xe606;
            <p>书架</p>
          </span>
        </router-link>
        <router-link active-class="active" class="bookstore" to="/bookstore" tag="li">
          <span class="iconfont">
            &#xe605;
            <p>书城</p>
          </span>
        </router-link>
        <router-link active-class="active" class="find" to="/find" tag="li">
          <span class="iconfont">
            &#xe654;
            <p>发现</p>
          </span>
        </router-link>
        <router-link active-class="active" class="mine" to="/mine" tag="li">
          <span class="iconfont">
            &#xe608;
            <p>我的</p>
          </span>
        </router-link>
      </ul>
    </nav>
    <!-- nav end -->
  </div>
</template>
<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    height: 100%;
  }
  nav {
    height: 50px;
    ul {
      display: flex;
      li {
        flex-grow: 1;
        text-align: center;
        color: #7d7e80;
        margin-top: 8px;
      }
      p {
        font-size: 12px;
      }
    }
  }
}

.active {
  color: #f03d37;
}

@font-face {
  font-family: "iconfont";
  src: url("../assets/style/font/iconfont.woff") format("woff"),
    url("../assets/style/font/iconfont.ttf") format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 25px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  line-height: 28px;
}
</style>