<template>
  <footer>
    <div class="wrapper">
      <div class="left-block">
        <div class="logo">
          <img src="/images/icons/logo.svg" onclick="window.location.href = '/'" />
          <a href="/">DYPPIS</a>
        </div>
        <p class="rights">© {{ $t('footer.copyright') }}</p>
        <div class="description">
          <p>{{ $t('footer.description') }}</p>
        </div>
        <div class="social-networks">
          <a href="#" class="item">
            <img src="/images/icons/linkedin-logo.svg" alt="" />
          </a>
          <a href="#" class="item">
            <img src="/images/icons/instagram-logo.svg" alt="" />
          </a>
          <a href="#" class="item">
            <img src="/images/icons/twitter-logo.svg" alt="" />
          </a>
          <a href="#" class="item">
            <img src="/images/icons/discord-logo.svg" alt="" />
          </a>
          <a href="#" class="item">
            <img src="/images/icons/reddit-logo.svg" alt="" />
          </a>
          <a href="#" class="item">
            <img src="/images/icons/telegram-logo.svg" alt="" />
          </a>
          <a href="#" class="item">
            <img src="/images/icons/vk-logo.svg" alt="" />
          </a>
        </div>
        <p class="mail">support@dyppis.com</p>
      </div>

      <div class="right-block">
        <div class="menu">
          <div class="head">
            <p>{{ $t('footer.menu.title') }}</p>
          </div>
          <div class="items">
            <a href="#">{{ $t('footer.menu.privacy-policy') }}</a>
            <a href="#">{{ $t('footer.menu.user-agreement') }}</a>
            <a href="#">{{ $t('footer.menu.contacts') }}</a>
            <a href="#">{{ $t('footer.menu.qa') }}</a>
            <a href="#">{{ $t('footer.menu.api') }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
footer {
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
footer .wrapper {
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  background-color: var(--dark-background);
}
.left-block {
  flex-basis: 40%;
  margin-top: 20px;
  margin-bottom: 20px;
}
.logo {
  text-decoration: none;
  display: flex;
  justify-content: left;
  align-items: center;
}
.logo img {
  width: 50px;
  cursor: pointer;
}
.logo a {
  margin-left: 10px;
  font-family: 'Rubik Glitch', system-ui;
  font-weight: 500;
  font-size: 32px;
  color: transparent;
  background-image: linear-gradient(to right, var(--light-lime), var(--light-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
}
.rights {
  font-family: var(--default-font);
  font-weight: 500;
  font-size: 14px;
  color: var(--dark-gray);
  text-align: start;
}
.description {
  margin-top: 15px;
  font-family: var(--default-font);
  font-weight: 400;
  font-size: 14px;
  color: white;
}
.description strong {
  font-weight: 600;
}
.social-networks {
  margin-top: 15px;
  display: flex;
}
.social-networks .item {
  transition: 0.2s ease-in-out;
}
.social-networks .item:hover {
  margin-top: -5px;
  transition: 0.2s ease-in-out;
}
.mail {
  font-family: 'Rubik Glitch', system-ui;
  font-weight: 500;
  font-size: 16px;
  color: white;
  text-align: left;
  margin-top: 10px;
}

.right-block {
  margin-left: auto;
  flex-basis: 30%;
  margin-top: 30px;
  margin-bottom: 20px;
}
.menu {
  border: none;
  border-left: 5px solid transparent;
  background-image: linear-gradient(var(--dark-background), var(--dark-background)),
    linear-gradient(to bottom, var(--light-lime), var(--light-blue));
  /*border-image: linear-gradient(to right, var(--light-lime), var(--light-blue)) 1;*/
  background-origin: border-box;
  background-clip: content-box, border-box, padding-box;
}
.menu .head {
  margin-left: 15px;
  font-family: var(--default-font);
  font-weight: 500;
  font-size: 20px;
  color: white;
}
.menu .items {
  margin-left: 15px;
  margin-top: 10px;
  display: flex;
  flex-flow: wrap;
}
.menu .items a {
  flex-basis: 100%;
  font-family: var(--default-font);
  font-weight: 500;
  font-size: 14px;
  color: white;
  margin-top: 7px;
}
@media only screen and (max-width: 1000px) {
  .left-block {
    flex-basis: 60%;
  }
  .right-block {
    flex-basis: 20%;
  }
}
@media only screen and (max-width: 500px) {
  .wrapper {
    width: 320px;
    flex-flow: wrap;
  }
  .left-block {
    flex-basis: 100%;
  }
  .right-block {
    flex-basis: 100%;
  }
}
</style>
