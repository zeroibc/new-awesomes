import Vue from 'vue'

Vue.use({
  install: function (Vue, options) {
    Vue.prototype.cdn = function (name, folder, process) {
      return `https://awesomes.oss-cn-beijing.aliyuncs.com/${folder}/${name}?x-oss-process=style/${process}`
    }

    Vue.prototype.showLogin = function () {
      this.$store.commit('showLogin')
    }

    Vue.prototype.hideLogin = function () {
      this.$store.commit('hideLogin')
    }
  }
})
