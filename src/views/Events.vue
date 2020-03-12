<template>
  <div class="features-boxed">
    <div class="intro">
      <h2 class="text-center py-4">Events</h2>
      <p class="text-center">
        Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
        Vestibulum nibh erat, pellentesque ut laoreet vitae.
      </p>
    </div>
    <div class="flex-container features-boxed">
      <div v-for="item of result" v-bind:key="item.id" class="box">
        <figure class="snip1527">
          <div class="image">
            <img :src="item.urls.regular" alt="pr-sample23" />
          </div>
          <figcaption>
            <div class="date">
              <span class="day">{{ randomDay() }}</span
              ><span class="month"> {{ monthNames[randomMonth()] }}</span>
            </div>
            <h3>{{ item.description }}</h3>
            <p>
              {{ item.alt_description }} You know what we need, Hobbes? We need
              an attitude. Yeah, you can&#39;t be cool if you don&#39;t have an
              attitude.
            </p>
          </figcaption>
          <router-link
            :to="{
              name: 'Detail',
              params: {
                url: item.urls.small,
                name: item.user.name,
                title: item.description
              }
            }"
            class="nav-link"
            href="detail.html"
            style="font-family: Montserrat, sans-serif;font-weight: bold;"
          ></router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    result: [],
    monthNames: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
  }),

  mounted() {
    this.axios
      .get(
        "https://api.unsplash.com/collections/775715/photos/?client_id=DK9r8Ru93BiZcxgmXWIuvSzHLTzHPgUqk_nuUKmdnco"
      )
      .then(response => (this.result = response.data))
      .catch(e => {
        this.errors.push(e);
      });
  },

  methods: {
    randomDay: function() {
      return Math.floor(Math.random() * (28 - 1 + 1)) + 1;
    },
    randomMonth: function() {
      return Math.floor(Math.random() * (11 - 1 + 1)) + 1;
    }
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  background: #fff;
  flex-wrap: wrap;
  justify-content: center;
}

.features-boxed {
  color: #313437;
  background-color: #eef4f7;
}

.box {
  padding: 8px;
}

.snip1527 {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  color: #ffffff;
  float: left;
  font-family: "Lato", Arial, sans-serif;
  font-size: 16px;
  margin: 10px 1%;
  max-width: 360px;
  min-width: 250px;
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;
}

.snip1527 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.snip1527 img {
  max-width: 100%;
  vertical-align: top;
  position: relative;
}

.snip1527 figcaption {
  padding: 25px 20px 25px;
  position: absolute;
  bottom: 0;
  z-index: 1;
}

.snip1527 figcaption:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #700877;
  content: "";
  background: -moz-linear-gradient(
    90deg,
    #e44e09 0%,
    #ff9800 100%,
    #ff9800 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    #e44e09 0%,
    #ff9800 100%,
    #ff9800 100%
  );
  background: linear-gradient(90deg, #e44e09 0%, #ff9800 100%, #ff9800 100%);
  opacity: 0.8;
  z-index: -1;
}

.snip1527 .date {
  background-color: #fff;
  border-radius: 50%;
  color: #700877;
  font-size: 18px;
  font-weight: 700;
  min-height: 48px;
  min-width: 48px;
  padding: 10px 0;
  position: absolute;
  right: 15px;
  text-align: center;
  text-transform: uppercase;
  top: -25px;
}

.snip1527 .date span {
  display: block;
  line-height: 14px;
}

.snip1527 .date .month {
  font-size: 11px;
}

.snip1527 h3,
.snip1527 p {
  margin: 0;
  padding: 0;
}

.snip1527 h3 {
  display: inline-block;
  font-weight: 700;
  letter-spacing: -0.4px;
  margin-bottom: 5px;
}

.snip1527 p {
  font-size: 0.8em;
  line-height: 1.6em;
  margin-bottom: 0px;
}

.snip1527 a {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
}

.snip1527:hover img,
.snip1527.hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

img {
  border-radius: 5px;
}
</style>
