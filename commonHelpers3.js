import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{t as o}from"./assets/vendor-01f40b0f.js";const e={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")},r="feedback-form-state";let t=n();e.input.value=t.email;e.message.value=t.message;e.form.addEventListener("input",o(m,500));e.form.addEventListener("submit",s);function m(){t={email:e.input.value,message:e.message.value},localStorage.setItem(r,JSON.stringify(t))}function s(a){if(a.preventDefault(),e.input.value.trim()===""||e.message.value.trim()===""){alert("Не усі поля заповнено!");return}console.log(t),a.currentTarget.reset(),localStorage.removeItem(r),t={email:"",message:""}}function n(){try{return JSON.parse(localStorage.getItem(r))||{email:"",message:""}}catch(a){return console.error("Error parsing saved form data",a),{email:"",message:""}}}
//# sourceMappingURL=commonHelpers3.js.map
