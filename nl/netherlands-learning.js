// green-cursor.js
(function () {
  const encodedSvg = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2300E676%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolygon%20points%3D%225%203%2019%2012%2012%2014%209%2021%205%203%22%3E%3C%2Fpolygon%3E%3C%2Fsvg%3E";
  
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `* { cursor: url("${encodedSvg}") 4 4, none !important; }`;
  document.head.appendChild(style);
})();
