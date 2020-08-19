<template>
  <div class="menu-button" :class="{ 'opened': hidden }" @click="click">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>
<style lang="scss" scoped>
.menu-button {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  transition: 0.3s;

  .bar {
    position: relative;
    display: block;
    width: 45px;
    height: 5px;
    margin: 9px auto;
    background-color: #000;
    border-radius: 10px;
    transition: 0.3s;

    &:nth-of-type(1) {
      margin-top: 0px;
    }
    &:nth-of-type(3) {
      margin-bottom: 0px;
    }
  }

  &:hover {
    .bar:nth-of-type(1) {
      transform: translateY(1.5px) rotate(-4.5deg);
    }
    .bar:nth-of-type(2) {
      opacity: 0.9;
    }
    .bar:nth-of-type(3) {
      transform: translateY(-1.5px) rotate(4.5deg);
    }
  }

  &.opened {
    .bar:nth-of-type(1) {
      transform: translateY(14px) rotate(-45deg);
    }
    .bar:nth-of-type(2) {
      opacity: 0;
    }
    .bar:nth-of-type(3) {
      transform: translateY(-14px) rotate(45deg);
    }

    &:hover {
      .bar:nth-of-type(1) {
        transform: translateY(13.5px) rotate(-40.5deg);
      }
      // .bar:nth-of-type(2) {
      //   opacity: 0.1;
      // }
      .bar:nth-of-type(3) {
        transform: translateY(-13.5px) rotate(40.5deg);
      }
    }
  }
}
</style>
<script>

export default {
  props: {
    hidden: Boolean,
    click: Function,
  },
  data() {
    return {
      // menuOpened: false,
    }
  },
}
</script>
