// var style = 0;
// function change_style() {
//     if (style == 0) {
//         document.getElementById("page_style").setAttribute("href", "style1.css");
//         style = 1;
//     }
//     else {
//         document.getElementById("page_style").setAttribute("href", "style.css");
//         style = 0;
//     }
//     localStorage.setItem("page_sty", style);
// }

// window.onload = function() {
//     style = localStorage.getItem("page_sty");
//     if (style == 1) {
//         style = 0;
//     }
//     else {
//         style = 1;
//     }
//     change_style();
// }
function change_style() {
    const stylesheet = document.getElementById("page_style");
    if (stylesheet.getAttribute("href") === "style.css") {
      stylesheet.setAttribute("href", "style1.css");
      localStorage.setItem("selectedStyle", "style1.css");
    } else {
      stylesheet.setAttribute("href", "style.css");
      localStorage.setItem("selectedStyle", "style.css");
    }
  }

  // Check localStorage and set the stylesheet when the page loads
  window.onload = function() {
    const savedStyle = localStorage.getItem("selectedStyle");
    if (savedStyle) {
      document.getElementById("page_style").setAttribute("href", savedStyle);
    }
  };