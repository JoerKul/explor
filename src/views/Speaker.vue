<template>
  <div>
    <div class="team-boxed">
      <div class="container">
        <div class="intro">
          <h2 class="text-center">Speaker</h2>
          <p class="text-center">
            Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
            Vestibulum nibh erat, pellentesque ut laoreet vitae.
          </p>
        </div>
        <div class="row people">
          <div  v-for="item of result" v-bind:key="item.id.value" class="col-md-6 col-lg-4 item">
            <div class="box">
              <img class="rounded-circle" :src="item.picture.large" />
              <h3 class="name">{{item.name.first}} {{item.name.last}}</h3>
              <p class="title">{{item.name.first}}</p>
              <p class="description">
                Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                finibus est, et interdum justo suscipit id. Etiam dictum feugiat
                tellus, a semper massa.
              </p>
              <div class="social">
                <a href="#"><i class="fab fa-facebook"></i></a
                ><a href="#"><i class="fab fa-twitter"></i></a
                ><a href="#"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    result: []
  }),

  mounted() {
    this.axios
      .get("https://randomuser.me/api/?results=12")
      .then(response => (this.result = response.data.results))
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>
.team-boxed .item .box {
  text-align: center;
  padding: 30px;
  background-color: #fff;
  margin-bottom: 30px;
}

.team-boxed .item {
  text-align: center;
}

.team-boxed {
  color: #313437;
  background-color: #eef4f7;
}

.team-boxed .social a {
  color: inherit;
  margin: 0 10px;
  display: inline-block;
  opacity: 0.7;
}
</style>
