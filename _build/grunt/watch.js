module.exports = {
  options: {
    livereload: true
  },
  html: {
    files: [
      '../_includes/*.html'
      ,'../_layouts/*.html'
      ,'../*.html'
    ],
    tasks: ['shell', 'sass:dev', 'notify:html']
  },
  sass: {
    files: ['../scss/*.scss'],
    tasks: ['sass:dev','notify:sass']
  },
  js: {
    files: ['../js/*'],
    tasks: ['shell', 'notify:js']
  }
};
