<template>
  <nav
    class="navbar navbar-light navbar-expand-md navigation-clean-button better-bootstrap-nav-left"
  >
    <div class="container">
      <router-link
        to="/"
        class="navbar-brand"
        href="/"
        style="font-family: 'Kaushan Script', cursive;font-size: 36px;padding-top: 0px;color: #FF8900;"
        >Obcon</router-link
      ><button
        data-toggle="collapse"
        class="navbar-toggler"
        data-target="#navcol-1"
      >
        <span class="sr-only">Toggle navigation</span
        ><span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navcol-1"
        style="padding-top: 9px;"
      >
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item" role="presentation">
            <router-link
              to="/events"
              class="nav-link"
              href="events.html"
              style="font-family: Montserrat, sans-serif;font-weight: bold;"
              >Events</router-link
            >
          </li>
          <li class="nav-item" role="presentation">
            <router-link
              to="/speaker"
              class="nav-link"
              href="speaker.html"
              style="font-family: Montserrat, sans-serif;font-weight: bold;"
              >Speaker</router-link
            >
          </li>
          <li class="nav-item" role="presentation">
            <router-link
              to="/about"
              class="nav-link"
              href="about.html"
              style="font-family: Montserrat, sans-serif;font-weight: bold;"
              >About</router-link
            >
          </li>
        </ul>
        <span class="navbar-text actions">
          <a
            class="login"
            href=""
            style="font-family: Montserrat, sans-serif;"
            @click.prevent="login"
            v-if="!$auth.isAuthenticated && !$auth.loading"
            >Log In</a
          >
          <a
            class="btn btn-light action-button"
            role="button"
            href="#"
            style="font-family: Montserrat, sans-serif;background-color: #FF9800;"
            v-if="!$auth.loading && !$auth.isAuthenticated"
            @click.prevent="login"
            >Sign Up</a
          >
          <img
            v-if="$auth.isAuthenticated"
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Proflile Image"
            style="display: inline-block; border-radius: 50%;height: 45px;width: 45px;"
          />
          <li
            v-if="$auth.isAuthenticated"
            class="nav-item dropdown nav-link"
            style="font-family: Montserrat, sans-serif;font-weight: bold;display: inline-block;"
          >
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >{{ $auth.user.name }}
            </a>
            <div class="dropdown-menu">
              <router-link to="/profile" href="#" class="dropdown-item"
                ><i class="fa fa-user"></i
                ><span style="padding-left: 8px; display: inline-block;"
                  >Profile</span
                ></router-link
              >
              <a href="#" class="dropdown-item"
                ><i class="fa fa-cog"></i
                ><span style="padding-left: 8px; display: inline-block;"
                  >Settings</span
                ></a
              >
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item"
                ><i class="fa fa-bell"></i
                ><span style="padding-left: 8px; display: inline-block;"
                  >Notifcations</span
                ></a
              >
            </div>
          </li>
          <a
            v-if="$auth.isAuthenticated"
            class="btn btn-light action-button"
            role="button"
            href="#"
            style="font-family: Montserrat, sans-serif;background-color: #FF9800;"
            @click.prevent="logout"
            >Logout</a
          >
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout();
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>
.navigation-clean-button {
  background: #fff;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #333;
  border-radius: 0;
  box-shadow: none;
  border: none;
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .navigation-clean-button {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

.navigation-clean-button .navbar-brand {
  font-weight: bold;
  color: inherit;
}

.navigation-clean-button .navbar-brand:hover {
  color: #222;
}

.navigation-clean-button.navbar-dark .navbar-brand:hover {
  color: #f0f0f0;
}

.navigation-clean-button .navbar-brand img {
  height: 100%;
  display: inline-block;
  margin-right: 10px;
  width: auto;
}

.navigation-clean-button .navbar-toggler {
  border-color: #ddd;
}

.navigation-clean-button .navbar-toggler:hover,
.navigation-clean-button .navbar-toggler:focus {
  background: none;
}

.navigation-clean-button.navbar-dark .navbar-toggler {
  border-color: #555;
}

.navigation-clean-button .navbar-toggler {
  color: #888;
}

.navigation-clean-button.navbar-dark .navbar-toggler {
  color: #eee;
}

.navigation-clean-button .navbar-collapse,
.navigation-clean-button .form-inline {
  border-top-color: #ddd;
}

.navigation-clean-button.navbar-dark .navbar-collapse,
.navigation-clean-button.navbar-dark .form-inline {
  border-top-color: #333;
}

.navigation-clean-button .navbar-nav a.active,
.navigation-clean-button .navbar-nav > .show > a {
  background: none;
  box-shadow: none;
}

.navigation-clean-button.navbar-light .navbar-nav a.active,
.navigation-clean-button.navbar-light .navbar-nav a.active:focus,
.navigation-clean-button.navbar-light .navbar-nav a.active:hover {
  color: #8f8f8f;
  box-shadow: none;
  background: none;
  pointer-events: none;
}

.navigation-clean-button.navbar .navbar-nav .nav-link {
  padding-left: 18px;
  padding-right: 18px;
}

.navigation-clean-button.navbar-light .navbar-nav .nav-link {
  color: #465765;
}

.navigation-clean-button.navbar-light .navbar-nav .nav-link:focus,
.navigation-clean-button.navbar-light .navbar-nav .nav-link:hover {
  color: #37434d !important;
  background-color: transparent;
}

.navigation-clean-button .navbar-nav > li > .dropdown-menu {
  margin-top: -5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 2px;
}

.navigation-clean-button .dropdown-menu .dropdown-item:focus,
.navigation-clean-button .dropdown-menu .dropdown-item {
  line-height: 2;
  font-size: 14px;
  color: #37434d;
}

.navigation-clean-button .dropdown-menu .dropdown-item:focus,
.navigation-clean-button .dropdown-menu .dropdown-item:hover {
  background: #eee;
  color: inherit;
}

@media (max-width: 767px) {
  .navigation-clean-button .navbar-nav .show .dropdown-menu {
    box-shadow: none;
  }
}

@media (max-width: 767px) {
  .navigation-clean-button .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #37434d;
    padding-top: 12px;
    padding-bottom: 12px;
    line-height: 1;
  }
}

.navigation-clean-button.navbar-dark {
  background-color: #1f2021;
  color: #fff;
}

.navigation-clean-button.navbar-dark .navbar-nav a.active,
.navigation-clean-button.navbar-dark .navbar-nav a.active:focus,
.navigation-clean-button.navbar-dark .navbar-nav a.active:hover {
  color: #8f8f8f;
  box-shadow: none;
  background: none;
  pointer-events: none;
}

.navigation-clean-button.navbar-dark .navbar-nav .nav-link {
  color: #dfe8ee;
}

.navigation-clean-button.navbar-dark .navbar-nav .nav-link:focus,
.navigation-clean-button.navbar-dark .navbar-nav .nav-link:hover {
  color: #fff !important;
  background-color: transparent;
}

.navigation-clean-button.navbar-dark .navbar-nav > li > .dropdown-menu {
  background-color: #1f2021;
}

.navigation-clean-button.navbar-dark .dropdown-menu .dropdown-item:focus,
.navigation-clean-button.navbar-dark .dropdown-menu .dropdown-item {
  color: #f2f5f8;
}

.navigation-clean-button.navbar-dark .dropdown-menu .dropdown-item:focus,
.navigation-clean-button.navbar-dark .dropdown-menu .dropdown-item:hover {
  background: #363739;
}

@media (max-width: 767px) {
  .navigation-clean-button.navbar-dark
    .navbar-nav
    .show
    .dropdown-menu
    .dropdown-item {
    color: #fff;
  }
}

.navigation-clean-button .actions .login {
  margin-right: 1rem;
  text-decoration: none;
  color: #465765;
}

.navigation-clean-button.navbar-dark .actions .login {
  color: #dfe8ee;
}

.navigation-clean-button.navbar-dark .actions .login:hover {
  color: #fff;
}

.navigation-clean-button .navbar-text .action-button,
.navigation-clean-button .navbar-text .action-button:active,
.navigation-clean-button .navbar-text .action-button:hover {
  background: #56c6c6;
  border-radius: 20px;
  font-size: inherit;
  color: #fff;
  box-shadow: none;
  border: none;
  text-shadow: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.25s;
  font-size: inherit;
}

.navigation-clean-button .navbar-text .action-button:hover {
  background: #66d7d7;
}

.navigation-clean-button.navbar-dark .action-button,
.navigation-clean-button.navbar-dark .action-button:active {
  background: #208f8f;
}

.navigation-clean-button.navbar-dark .action-button:hover {
  background: #269d9d;
}
</style>
