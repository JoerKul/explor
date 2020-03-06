<template>
  <div class="article-clean features-boxed">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
          <div class="intro">
            <h1 class="text-center">{{ title }}</h1>
            <p class="text-center">
              <span class="by">by</span> <a href="#">{{ name }}</a
              ><span class="date">Sept 8th, 2016 </span>
            </p>
          </div>
          <div class="text">
            <figure>
              <img class="figure-img" :src="url" />
              <figcaption>Caption</figcaption>
            </figure>
            <p>
              Sed lobortis mi. Suspendisse vel placerat ligula.
              <span style="text-decoration: underline;">Vivamus</span> ac sem
              lac. Ut vehicula rhoncus elementum. Etiam quis tristique lectus.
              Aliquam in arcu eget velit pulvinar dictum vel in justo.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae.
            </p>
            <p>
              Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus
              ac lacus. <strong>Ut vehicula rhoncus</strong> elementum. Etiam
              quis tristique lectus. Aliquam in arcu eget velit
              <em>pulvinar dict</em> vel in justo. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae.
            </p>
            <h2>Aliquam In Arcu</h2>
            <p>
              Suspendisse vel placerat ligula. Vivamus ac sem lac. Ut vehicula
              rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu
              eget velit pulvinar dictum vel in justo. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae.
            </p>

            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae. Suspendisse vel placerat ligula. Vivamus ac
              sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique
              lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
            </p>
          </div>
          <div class="map-clean">
            <div class="container">
              <div class="intro">
                <h2 class="text-center">Location</h2>
                <p class="text-center">
                  Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                  Vestibulum nibh erat, pellentesque ut laoreet vitae.
                </p>
              </div>
            </div>
            <iframe
              allowfullscreen
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBU2krJzMUqTVi5LkonPjoqKqbc6-QZjws&amp;q=Frankfurt&amp;zoom=15"
              width="100%"
              height="450"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      name: "",
      title: "",
      location: "Frankfurt"
    };
  },
  created() {
    this.url = this.$route.params.url;
    this.name = this.$route.params.name;
    this.title = this.$route.params.title;
    this.location = this.$route.params.location;
  }
};
</script>

<style scoped>
.features-boxed {
  color: #313437;
  background-color: #eef4f7;
}

.article-clean {
  color: #56585b;
  background-color: #fff;
  font-family: "Lora", serif;
  font-size: 14px;
}

.article-clean .intro {
  font-size: 16px;
  margin: 0 auto 30px;
}

.article-clean .intro h1 {
  font-size: 32px;
  margin-bottom: 15px;
  padding-top: 20px;
  line-height: 1.5;
  color: inherit;
  margin-top: 20px;
}

.article-clean .intro p {
  color: #929292;
  font-size: 12px;
}

.article-clean .intro p .by {
  font-style: italic;
}

.article-clean .intro p .date {
  text-transform: uppercase;
  padding: 4px 0 4px 10px;
  margin-left: 10px;
  border-left: 1px solid #ddd;
}

.article-clean .intro p a {
  color: #333;
  text-transform: uppercase;
  padding-left: 3px;
}

.article-clean .intro img {
  margin-top: 20px;
}

.article-clean .text p {
  margin-bottom: 20px;
  line-height: 1.45;
}

@media (min-width: 768px) {
  .article-clean .text p {
    font-size: 16px;
  }
}

.article-clean .text h2 {
  margin-top: 28px;
  margin-bottom: 20px;
  line-height: 1.45;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

@media (min-width: 768px) {
  .article-clean .text h2 {
    font-size: 20px;
  }
}

.article-clean .text figure {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}

.article-clean .text figure img {
  margin-bottom: 12px;
  max-width: 100%;
}
</style>
