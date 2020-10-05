// ==UserScript==
// @name          DarkMode Google 2020
// @last_update   Oct 6 2020 00:10
// @description   will display google in dark mode, hide "translate this page"
// @version       alpha
// @author        ApaeP
// @include       http://www.google.*
// @include       https://www.google.*
// @include       https://encrypted.google.*
// @run-at        document-start
// ==/UserScript==

let link = '#3070ab';
let link_visited = '#295070';
let main_dark = '#2D2D2D';
let second_dark = '#393939';
let border_dark = '#5f6368';
let main_text_dark = '#e7e8eb';
let second_text_dark = '#9fa6ad';
let third_text_dark = '#c4c8cc';

const css = `
  /* Knowledge Panel */
  .knowledge-panel {
      background: ${main_dark} !important;
      border: 1px solid ${border_dark} !important;
  }
  /* Hide 'save' button */
  .IzNS7c.duf-h span {
        display: none !important;
  }

/* ============================================= */
/* ============== SEARCH HOMEPAGE ============== */
/* ============================================= */
  /* Top Right Links Menu*/
  .gb_h .gb_g {
      color: ${main_text_dark} !important;
  }
  .gb_h .gb_g:hover {
      color: ${second_text_dark} !important;
      text-decoration: none !important;
  }
  /* Top Right squares menu */
  #gb#gb a.gb_D {
      color: ${main_text_dark} !important;
  }
  #gb#gb a.gb_D:hover {
      color: ${second_text_dark} !important;
  }

  .jhp input[type="submit"], .sbdd_a input, .gbqfba {
      background-image: none !important;
  }
  .tfB0Bf input[type="submit"], .gbqfba {
      background: ${second_dark} !important;
      border: none !important;
      color: ${second_text_dark} !important;
  }
  .tfB0Bf input[type="submit"]:hover {
      color: ${third_text_dark} !important;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px, rgba(0, 0, 0, 0.1) 0px 1px 4px, rgba(0, 0, 0, 0.1) 0px 2px 8px !important;
      border: 1px solid ${border_dark} !important;
  }
  #gbqfbb {
      display: none;
  }

  /* Search Suggestions */
  .aajZCb {
      background: ${main_dark} !important;
  }
  .sbhl {
      background: ${second_dark} !important;
  }
  .sbl1 {
      color: ${second_text_dark} !important;
  }
  .sbl1p {
      color: ${main_text_dark} !important;
  }
  .RNmpXc, .JUypV, .lh87ke {
      display: none;
  }

  .EvHmz {
      display: none;
  }

  #SIvCob {
      color: ${second_text_dark} !important;
  }
  #SIvCob a {
      color: ${link} !important;
  }
/* ============================================= */
/* ============ SEARCH HOMEPAGE END ============ */
/* ============================================= */




/* ============================================= */
/* =============== SEARCH HEADER =============== */
/* ============================================= */
  /* body background */
  body {
    background: ${main_dark} !important;
  }

  /* Searchbar Container */
  .sfbg {
    background: ${second_dark} !important;
    height: 2000px;
  }

  /* Searchbar */
  .RNNXgb {
    background: ${second_dark};
    border: 1px solid ${border_dark};
  }

  /* Searchbar Field */
  .gLFyf.gsfi {
    color: ${main_text_dark};
  }
  .FAuhyb {
    color: ${main_text_dark};
  }

  /* Searchbar modules menu */
  #hdtb {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px, rgba(0, 0, 0, 0.1) 0px 1px 4px, rgba(0, 0, 0, 0.1) 0px 2px 8px;
    border-bottom: 0px;
  }
  #hdtbSum {
    background: ${second_dark};
  }

  /* Number of results in x seconds div */
  #extabar > div {
    background: ${main_dark};
  }
/* ================================================= */
/* =============== SEARCH HEADER END =============== */
/* ================================================= */



/* ================================================ */
/* ================ SEARCH RESULTS ================ */
/* ================================================ */
  /*  detailed links over the main link */
  .iUh30.gBIQub {
      color: ${second_text_dark};
  }
  .eFM0qc {
      display: none !important;
  }

  /* main link */
  .LC20lb {
      color: ${link};
  }

  /* Content preview */
  .IsZvec {
    color: ${second_text_dark};
  }

  /* Content preview bold */
  .aCOpRe em {
    color: ${third_text_dark};
  }

  /* Some links (I DONT KNOW WHERE) */
  a.fl:link, .fl a, .gl a:link {
    color: ${link};
  }

  /* Some other links */
  a.l {
    color: ${link};
  }
/* ================================================ */
/* ================ SEARCH RESULTS ================ */
/* ================================================ */



/* ===================================================== */
/* =============== OTHER ASKED QUESTIONS =============== */
/* ===================================================== */
  /* bold elements for other asked questions content */
  .hgKElc b {
      color: ${third_text_dark};
  }

  /* link for researching the title of other answered question */
  .iOBnre > a {
      color: ${link};
  }

  /* "Plus" button if answer too long */
  .truncation-information {
      color: ${link} !important;
  }

  /* Title of other answered question */
  .cbphWd {
      color: ${main_text_dark};
  }
/* ========================================================= */
/* =============== OTHER ASKED QUESTIONS END =============== */
/* ========================================================= */



/* =========================================== */
/* =============== SONG LYRICS =============== */
/* =========================================== */
  .PZPZlf {
      color: ${second_text_dark};
  }

  /* 'Lyrics' title */
  .Ss2Faf.zbA8Me.mfMhoc.qLYAZd {
      color: ${main_text_dark};
  }

  /* 'more' btn */
  .ujudUb.WRZytc a {
      color: ${link};
  }

  /* links for webplayers */
  .RJuLSb tr td .ellip .Eegi6c span {
      color: ${link};
  }
  .RJuLSb tr td a:hover {
      text-decoration: none;
      color: red;
  }

  /* Other records for this title */
  .rl_item_base {
      background: ${main_dark} !important;
  }
/* =============================================== */
/* =============== SONG LYRICS END =============== */
/* =============================================== */


/* =========================================== */
/* =============== VIDEO CARDS =============== */
/* =========================================== */
/* Video cards */
.cv2VAd {
    background: ${main_dark};
    border: 1px solid ${second_text_dark} !important;
}
/* =============================================== */
/* =============== VIDEO CARDS END =============== */
/* =============================================== */

/*WHATS THAT??*/
.di3YZe b {
    color: ${third_text_dark};
}
`

function initDarkMode() {
    // IN CSS BUT DOESNT SEEM TO WORK
        // searchbar container
        document.querySelector('.sfbg').style.background = second_dark;
        // searchbar
        document.querySelector('.RNNXgb').style.background = second_dark;
        document.querySelector('.RNNXgb').style.border = `1px solid ${border_dark}`;
        //  searchbar field
        document.querySelector('.gLFyf.gsfi').style.color = main_text_dark;
        document.querySelector('.FAuhyb').style.color = main_text_dark;

    // associated searchs
    Array.from(document.querySelector('.card-section').children).forEach((c) => {
      Array.from(c.children).forEach((p) => {
        Array.from(p.children)[0].style.color = link;
      });
    });

    // other records for this title links
    document.querySelectorAll('.PZPZlf.MRfBrb').forEach((div) => {
      Array.from(div.firstChild.children)[1].style.color = link;
    });

    // pages numbers and nav through them
    document.querySelectorAll('.AaVjTc a:link').forEach((e) => {
      e.style.color = link;
    });

    // hide 'translate'
    document.querySelectorAll('.eFM0qc').forEach((e) => {
      e.style.display = 'none';
    });

    // Other questions asked
    document.querySelector('.kp-blk').style.background = main_dark;
    document.querySelector('.kp-blk').style.color = second_text_dark;
    document.querySelector('.JolIg.mfMhoc').style.color = main_text_dark;
    document.querySelectorAll('.cbphWd').forEach((e) => {
      e.style.borderTop = `1px solid ${second_text_dark}`;
    });
};

function injectCSS() {
    let style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
};

injectCSS();

document.addEventListener("DOMContentLoaded", initDarkMode);
