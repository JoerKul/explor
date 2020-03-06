<template>
  <div class="about">
    <div class="testimonials-clean" style="height: 750px;">
      <div class="container" style="margin-top: 7px;">
        <div class="intro" style="max-width: 670px;">
          <h1
            class="text-center"
            style="margin-bottom: 0px;margin-top: 0px;padding: 0px;padding-top: 30px;"
          >
            <strong>CLOUD DONE RIGHT ...</strong>
          </h1>
          <h5
            class="d-inline-block"
            style="width: 670px;margin-bottom: 0px;height: 50px;"
          >
            <br />We believe in innovative technologies to lift your ideas into
            the cloud.<br /><br />
          </h5>
          <button
            class="btn btn-primary"
            type="button"
            style="background-color: #ff8900;width: 160px;height: 48px;font-size: 20px;font-family: Montserrat;"
          >
            Contact us
          </button>
        </div>
        <div class="row people">
          <div class="col-md-6 col-lg-4 item">
            <div class="text-center box">
              <i class="fas fa-cloud fa-3x"></i>
              <h5 class="text-center name">
                <br />Cloud Development and Consulting<br /><br />
              </h5>
              <p class="text-left description">
                <br />We love the Cloud! We try to use the best cloud services
                and providers for your ideas. Our favorite providers for IAAS
                and PAAS are&nbsp;<a href="http://aws.amazon.com/">AWS</a
                >&nbsp;and&nbsp;<a href="http://cloud.google.com/">GCP</a>. In
                the past we developed a lot of solutions which were running on
                own servers, but in the modern world everybody wants to reduce
                maintainance as well. Serverless architectures are there!<br /><br />
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 item">
            <div class="text-center box">
              <i class="fas fa-cog fa-3x"></i>
              <h5 class="text-center name">
                <br />DevOps and DevSecOps Consulting<br /><br />
              </h5>
              <p class="text-left description">
                <br />Automation is the most important thing fast-track your
                ideas to production! Dont do things twice. Our main goal is to
                automate everyting. We spend more time with new features of your
                ideas rather than doing the same jobs day after day. Continous
                Integration and Delivery concepts ship your new features - very
                fast and dont break your systems!<br /><br />
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 item">
            <div class="text-center box">
              <i class="fas fa-laptop-code fa-3x"></i>
              <h5 class="text-center name">
                <br />IoT Development and Consulting<br /><br />
              </h5>
              <p class="text-left description">
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
  </div>
</template>

<style scoped>
.testimonials-clean {
  color: #313437;
  background-color: #eef4f7;
}

.testimonials-clean p {
  color: #7d8285;
}

.testimonials-clean h2 {
  font-weight: bold;
  margin-bottom: 40px;
  padding-top: 40px;
  color: inherit;
}

@media (max-width: 767px) {
  .testimonials-clean h2 {
    margin-bottom: 25px;
    padding-top: 25px;
    font-size: 24px;
  }
}

.testimonials-clean .intro {
  font-size: 16px;
  max-width: 500px;
  margin: 0 auto;
}

.testimonials-clean .intro p {
  margin-bottom: 0;
}

.testimonials-clean .people {
  padding: 50px 0 20px;
}

.testimonials-clean .item {
  margin-bottom: 32px;
}

@media (min-width: 768px) {
  .testimonials-clean .item {
    height: 220px;
  }
}

.testimonials-clean .item .box {
  padding: 30px;
  background-color: #fff;
  position: relative;
}

.testimonials-clean .item .box:after {
  content: "";
  position: absolute;
  left: 30px;
  bottom: -24px;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-width: 12px 15px;
  border-top-color: #fff;
}

.testimonials-clean .item .author {
  margin-top: 28px;
  padding-left: 25px;
}

.testimonials-clean .item .name {
  font-weight: bold;
  margin-bottom: 2px;
  color: inherit;
}

.testimonials-clean .item .title {
  font-size: 13px;
  color: #9da9ae;
}

.testimonials-clean .item .description {
  font-size: 15px;
  margin-bottom: 0;
}

.testimonials-clean .item img {
  max-width: 40px;
  float: left;
  margin-right: 12px;
  margin-top: -5px;
}
</style>
