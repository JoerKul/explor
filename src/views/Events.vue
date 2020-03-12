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
        <figure class="product">
          <div class="image">
            <img :src="item.urls.regular" :alt="item.id" />
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
  flex-wrap: wrap;
  display: flex;
  background: #fff;
  justify-content: center;
}

.features-boxed {
  background-color: #eef4f7;
  color: #313437;
}

.box {
  padding: 8px;
}

.product {
  float: left;
  color: #ffffff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  width: 100%;
  min-width: 250px;
  font-size: 16px;
  position: relative;
  max-width: 360px;
  text-align: left;
  overflow: hidden;
  font-family: "Lato", Arial, sans-serif;
  margin: 10px 1%;
}

.product * {
  -webkit-box-sizing: border-box;
  transition: all 0.25s ease;
  -webkit-transition: all 0.25s ease;
  box-sizing: border-box;
}

.product img {
  position: relative;
  vertical-align: top;
  max-width: 100%;
}

.product figcaption {
  bottom: 0;
  position: absolute;
  padding: 25px 20px 25px;
  z-index: 1;
}

.product figcaption:before {
  content: "";
  left: 0;
  top: 0;
  position: absolute;
  right: 0;
  bottom: 0;
  background: #700877;
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

.product .date {
  color: #700877;
  border-radius: 50%;
  min-height: 48px;
  background-color: #fff;
  font-weight: 700;
  font-size: 18px;
  min-width: 48px;
  position: absolute;
  top: -25px;
  text-transform: uppercase;
  padding: 10px 0;
  text-align: center;
  right: 15px;
}

.product .date span {
  display: block;
  line-height: 14px;
}

.product .date .month {
  font-size: 11px;
}

.product h3,
.product p {
  padding: 0;
  margin: 0;
}

.product h3 {
  display: inline-block;
  margin-bottom: 5px;
  letter-spacing: -0.4px;
  font-weight: 700;
}

.product p {
  margin-bottom: 0px;
  line-height: 1.6em;
  font-size: 0.8em;
}

.product a {
  left: 0;
  z-index: 1;
  top: 0;
  right: 0;
  position: absolute;
  bottom: 0;
}

.product:hover img,
.product.hover img {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}

img {
  border-radius: 5px;
}
</style>
