parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";document.addEventListener("DOMContentLoaded",function(){var e,t,n=document.querySelector("table").querySelector("tbody"),a=document.querySelectorAll("thead th"),o=((e=document.createElement("form")).classList.add("new-employee-form"),e.innerHTML='\n      <label>Name: <input\n        name="employeeName" type="text" data-qa="name" required></label>\n      <label>Position: <input\n        name="position" type="text" data-qa="position" required></label>\n      <label>Office:\n        <select name="office" data-qa="office" required>\n          <option value="Tokyo">Tokyo</option>\n          <option value="Singapore">Singapore</option>\n          <option value="London">London</option>\n          <option value="New York">New York</option>\n          <option value="Edinburgh">Edinburgh</option>\n          <option value="San Francisco">San Francisco</option>\n        </select>\n      </label>\n      <label>Age: <input\n        name="age" type="number" data-qa="age" required></label>\n      <label>Salary: <input\n        name="salary" type="number" data-qa="salary" required></label>\n      <button type="submit">Save to table</button>\n    ',e),i=((t=document.createElement("div")).classList.add("notification"),t.setAttribute("data-qa","notification"),t.style.transition="opacity 0.5s",t),r=[],l=null,c="asc";function s(e){var t=Array.from(n.querySelectorAll("tr")),a="asc"===c?"desc":"asc";t.sort(function(t,n){var o=t.children[e].textContent.trim(),i=n.children[e].textContent.trim();if(3===e||4===e){var r=parseFloat(o.replace(/[$,]/g,"")),l=parseFloat(i.replace(/[$,]/g,""));return"asc"===a?r-l:l-r}return"asc"===a?o.localeCompare(i):i.localeCompare(o)}),n.innerHTML="",t.forEach(function(e){return n.appendChild(e)}),c=a}function d(e,t){var n=e.value.trim();if(""===n)t.textContent="N/A";else{if(0===t.cellIndex&&n.length<4)return void u(i,"Name can't be less than 4 symbols");if(1===t.cellIndex&&n.length<=1)return void u(i,"Position should be more than 1 symbol");if(2===t.cellIndex){var a=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"];if(!a.includes(n)){var o="Office must be one of the followed values:\n        ".concat(a.join(", "));return void u(i,o)}t.textContent=n,p(i,"Your data was changed")}else if(3===t.cellIndex){var r=parseInt(n);if(r<18||r>90)return void u(i,"Age should be less than 18 and more than 90")}else if(4===t.cellIndex){var l=parseFloat(n.replace(/[$,]/g,""));if(!(l>=1e4))return void u(i,"Salary should be more than 10000");var c="$"+l.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");t.textContent=c,p(i,"Your data was changed")}}t.textContent=n,0!==t.cellIndex&&1!==t.cellIndex&&3!==t.cellIndex||p(i,"Your data was changed")}function u(e,t){e.classList.remove("success"),e.classList.add("error"),e.textContent=t,e.style.display="block"}function p(e,t){e.textContent=t,e.classList.remove("error"),e.classList.add("success"),e.style.opacity="1",e.style.display="block"}function f(e){""===e.textContent.trim()&&(e.style.display="none")}a.forEach(function(e,t){e.addEventListener("click",function(){s(t)})}),n.addEventListener("click",function(e){var t=e.target.closest("tr");t&&function(e){l&&l.classList.remove("active");e.classList.add("active"),l=e}(t)}),n.addEventListener("dblclick",function(e){var t=e.target.closest("td");t&&function(e){var t=e.textContent,n=document.createElement("input");n.type="text",n.value=t,n.addEventListener("blur",function(){d(n,e)}),n.addEventListener("keypress",function(t){"Enter"===t.key&&d(n,e)}),e.textContent="",e.appendChild(n),n.focus()}(t)}),document.body.appendChild(o),document.body.appendChild(i),o.addEventListener("submit",function(e){e.preventDefault(),function(e,t,o){var i=new FormData(e),l=i.get("employeeName"),c=i.get("position"),d=i.get("office"),m=i.get("age"),v=i.get("salary"),y="";l.length<4?y="Name should contain more than 4 letters.":""===c.trim()?y="Position is required.":m<18||m>90?y="Age must be between 18 and 90.":(+v<=0||""===v.trim())&&(y="Salary is required.");if(y)return void u(t,y);var b=document.createElement("tr");b.innerHTML="\n      <td>".concat(l,"</td>\n      <td>").concat(c,"</td>\n      <td>").concat(d,"</td>\n      <td>").concat(m,"</td>\n      <td>$").concat(v,"</td>\n    "),n.appendChild(b),e.reset(),p(t,"Employee added successfully!"),r.push({Name:l,Position:c,Office:d,Age:parseInt(m),Salary:parseFloat(v)}),setTimeout(function(){!function(e){e.style.opacity="0",setTimeout(function(){e.textContent="",f(e)},500)}(t)},2e3),s(a.findIndex(function(e){return e.classList.contains("sort-asc")}))}(o,i)}),f(i)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.eabd47c8.js.map