'use strict';

/*------------------------------------------------------------------------------
 * 2. FILE DESTINATIONS (RELATIVE TO ASSSETS FOLDER)
------------------------------------------------------------------------------*/
/*
 * opt
 * @param false or string: virtual host name of local machine such as . Set false to browser-sync start as server mode.
 * @param false or string: Subdomains which must be between 4 and 20 alphanumeric characters.
 * @param string: browser which browserSync open
 */
export const options = {
  autoprefix   : ['> 2%', 'last 5 versions', 'ie 10'],
  cssBase      : 'foundation',
  cssBaseVer   : 'latest',
  proxy        : 'localhost',
  bs           : {
    tunnel       : false,
    browser    : 'google chrome canary',
    ghostMode  : {
      clicks     : false,
      scroll     : false
    },
    open         : 'external',
    fils: []
  }
};


export const paths = {
  root         : './',
  srcDir       : 'src/',
  srcImg       : 'src/images/',
  srcJade      : 'src/jadeee/',
  srcJs        : 'src/jss/',
  srcJson      : './src/json/',
  srcScss      : 'src/scsss/',
  destDir      : './assets/',
  destImg      : './assets/images/',
  destCss      : './assets/css/',
  destJs       : './assets/js/',
  htmlDir      : './',
  reloadOnly   : ['**/*.php']
};

export const sass_conf = {
  includePaths : []
};
