<template>
  <div class="features-boxed">
    <div class="container">
      <div class="intro text-center">
        <h1 class="text-center" style="padding-top: 25px;margin-bottom: 24px;">
          CLOUD DONE RIGHT ...
        </h1>
        <p class="text-center" style="font-size: 16px;">
          We believe in innovative technologies to lift your ideas into the
          cloud.
        </p>
        <button
          class="btn btn-primary text-center"
          type="button"
          style="background-color: #ff9800;font-family: Montserrat, sans-serif;width: 140px;margin-top: 20px;height: 46px;"
        >
          Contact us
        </button>
      </div>
      <div
        class="row justify-content-center features"
        style="padding-top: 35px;"
      >
        <div class="col-sm-6 col-md-5 col-lg-4 item">
          <div data-bs-hover-animate="pulse" class="box" style="height: 476px;">
            <i class="fa fa-cloud fa-3x"></i>
            <h3
              class="name"
              style="font-family: Montserrat, sans-serif;margin-top: 15px;"
            >
              <strong>Cloud Development and Consulting</strong><br />
            </h3>
            <p class="description" style="font-family: Montserrat, sans-serif;">
              <br />We love the Cloud! We try to use the best cloud services and
              providers for your ideas. Our favorite providers for IAAS and PAAS
              are&nbsp;<a href="http://aws.amazon.com/">AWS</a>&nbsp;and&nbsp;<a
                href="http://cloud.google.com/"
                >GCP</a
              >. In the past we developed a lot of solutions which were running
              on own servers, but in the modern world everybody wants to reduce
              maintainance as well. Serverless architectures are there!<br /><br />
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-md-5 col-lg-4 item">
          <div data-bs-hover-animate="pulse" class="box" style="height: 476px;">
            <i class="fa fa-cog fa-3x"></i>
            <h3
              class="name"
              style="font-family: Montserrat, sans-serif;margin-top: 15px;"
            >
              <strong>DevOps and DevSecOps Consulting</strong><br />
            </h3>
            <p class="description" style="font-family: Montserrat, sans-serif;">
              <br />Automation is the most important thing fast-track your ideas
              to production! Dont do things twice. Our main goal is to automate
              everyting. We spend more time with new features of your ideas
              rather than doing the same jobs day after day. Continous
              Integration and Delivery concepts ship your new features - very
              fast and dont break your systems!<br />
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-md-5 col-lg-4 item">
          <div data-bs-hover-animate="pulse" class="box">
            <i class="fa fa-laptop fa-3x"></i>
            <h3
              class="name"
              style="font-family: Montserrat, sans-serif;margin-top: 15px;"
            >
              <strong>IoT Development and Consulting</strong><br />
            </h3>
            <p class="description" style="font-family: Montserrat, sans-serif;">
              <br />Everything is connected! Over the last few years nearly
              every customer wants to get information from standalone devices
              into the cloud. We've successfully deployed many mobile and
              hardware projects. We like to connect everything and - take care
              of ressources! We use a lot of different hardware development
              plattforms and cloud IoT services. So we're prepared for your
              ideas!<br /><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.features-boxed {
  color: #313437;
  background-color: #eef4f7;
}

.features-boxed p {
  color: #7d8285;
}

.features-boxed h2 {
  font-weight: bold;
  margin-bottom: 40px;
  padding-top: 40px;
  color: inherit;
}

@media (max-width: 767px) {
  .features-boxed h2 {
    margin-bottom: 25px;
    padding-top: 25px;
    font-size: 24px;
  }
}

.features-boxed .intro {
  font-size: 16px;
  max-width: 500px;
  margin: 0 auto;
}

.features-boxed .intro p {
  margin-bottom: 0;
}

.features-boxed .features {
  padding: 50px 0;
}

.features-boxed .item {
  text-align: center;
}

.features-boxed .item .box {
  text-align: center;
  padding: 30px;
  background-color: #fff;
  margin-bottom: 30px;
}

.features-boxed .item .icon {
  font-size: 60px;
  color: #1485ee;
  margin-top: 20px;
  margin-bottom: 35px;
}

.features-boxed .item .name {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
  margin-top: 0;
  color: inherit;
}

.features-boxed .item .description {
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 20px;
}
</style>
