//module.exports = {
    // options: {
    //     livereload: true
    // },
    // html: {
    //     files: [
    //       '../_includes/*.html',
    //       '../_layouts/*.html',
    //       '../*.html',
    //       '../scss/*.scss'

    //     ],
    //     tasks: ['shell', 'notify:watch']
    // },
    // sass: {
    //     files: ['../scss/*.scss'],
    //     //tasks: ['sass:dev', 'shell']
    //     tasks: [
    //             'sass:dev'
    //             ,'notify:watch'
    //             ,'shell'
    //             ]
    // },
    // js: {
    //     files: ['../js/*'],
    //     tasks: ['shell', 'notify:watch']
    // }

//};

// Watches files for changes and runs tasks based on the changed files
// module.exports = {
//     sass : {
//         files : ['../scss/*.scss'],
//         tasks : ['sass:dev']
//     }
// };

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
    //tasks: ['sass:dev', 'shell']
    tasks: [
      'sass:dev'
      //,'shell'
      ,'notify:sass'
    ]
  },
  js: {
    files: ['../js/*'],
    tasks: ['shell', 'notify:js']
  }
};
