module.exports = {
  watch: {
    options: {
      style: 'expanded',
    },
    files: {
      // 'destination': 'source'
      '../css/style.css' : '../scss/style.scss'
      //'../_site/css/style.css' : '../scss/style.scss'
    }
  },// watch
  dev: {
    options: {
      style: 'expanded',
      //style: 'nested'
      //style: 'compact'
      //style: 'compressed'
      //sourcemap: 'true'
    },
    files: {
      // 'destination': 'source'
      //'../css/style.css' : '../scss/style.scss'
      '../_site/css/style.css' : '../scss/style.scss'
    }
  },// dev
  prod: {
    options: {
      style: 'compressed'
    },
    files: {
      '../css/style.css': '../scss/style.scss'
    }
  }// prod
};
