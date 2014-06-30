module.exports = {
  minify: {
    expand: true,
    //cwd: 'release/css/',
    src: ['../_site/css/style.css'],
    dest: '.',
    ext: '.min.css'
  }
};
