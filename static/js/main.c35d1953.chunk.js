(this["webpackJsonpreact-library"]=this["webpackJsonpreact-library"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(6),s=a.n(r),i=(a(16),a(10)),c=a(1),u=a(2),l=a(4),d=a(3),m=a(7),b=a.n(m),g=function(e){return n.a.createElement("div",null,n.a.createElement("header",{className:"library-header"},n.a.createElement("div",{className:"logo"},n.a.createElement("img",{className:"page-logo",src:b.a,alt:"Page Logo"})),n.a.createElement("h1",{className:"header-title"},"My Library"),n.a.createElement("input",{className:"search-books",type:"text",placeholder:"Search for book...",onChange:e.updateQuery})))},p=a(8),h=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:"",author:"",pages:""},e.isDisabled=function(){var t=e.state,a=t.title,o=t.author,n=t.pages;return""===a||""===o||""===n},e.updateQuery=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=e.state,o=a.title,n=a.author,r=a.pages;e.props.addBook(o,n,r)},e}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("input",{name:"title",type:"text",placeholder:"Title",onChange:this.updateQuery}),n.a.createElement("input",{name:"author",type:"text",placeholder:"Author",onChange:this.updateQuery}),n.a.createElement("input",{name:"pages",type:"number",placeholder:"No. of pages",onChange:this.updateQuery}),n.a.createElement("button",{className:"add-book",disabled:this.isDisabled()},"Add"))}}]),a}(o.Component),k=function(e){return n.a.createElement("div",{className:"book-content"},n.a.createElement("p",{className:"book-title"},e.title),n.a.createElement("p",{className:"book-author"},"- By ",e.author),n.a.createElement("p",{className:"book-pages"},e.pages))},A=function(e){var t=e.toggleRead,a=e.book,o=e.removeBook;return n.a.createElement("div",{className:"book-btns"},n.a.createElement("button",{className:a.read?"book-read-btn":"book-read-btn not-read",onClick:function(){return t(a.id)}},a.read?"Read":"Not Read"),n.a.createElement("button",{className:"book-del-btn",onClick:function(){return o(a.id)}},"X"))},f=function(e){var t=e.title,a=e.author,o=e.pages,r=e.toggleRead,s=e.removeBook,i=e.book;return n.a.createElement("div",{className:"book"},n.a.createElement(k,{title:t,author:a,pages:o}),n.a.createElement(A,{toggleRead:r,removeBook:s,book:i,read:i.read}))},v=function(e){var t=e.query,a=e.books,o=e.toggleRead,r=e.removeBook,s=""===t?a:a.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));return n.a.createElement("div",{className:"books-list"},s.map((function(e){return n.a.createElement(f,{key:e.id,title:e.title,author:e.author,pages:e.pages,toggleRead:o,removeBook:r,book:e})})))},E=a(9),y=(a(17),window.localStorage),w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={books:y.getItem("books")?JSON.parse(y.getItem("books")):[],query:""},e.updateQuery=function(t){e.setState({query:t.target.value})},e.addBook=function(t,a,o){e.setState((function(e){return{books:[].concat(Object(i.a)(e.books),[{id:Object(E.uuid)(),title:t,author:a,pages:o,read:!1}])}}),(function(){return y.setItem("books",JSON.stringify(e.state.books))}))},e.removeBook=function(t){e.setState((function(e){return{books:e.books.filter((function(e){return e.id!==t}))}}),(function(){return y.setItem("books",JSON.stringify(e.state.books))}))},e.toggleRead=function(t){var a=e.state.books,o=a.findIndex((function(e){return e.id===t}));a[o].read=!a[o].read,e.setState({books:a})},e}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,{updateQuery:this.updateQuery}),n.a.createElement(h,{addBook:this.addBook}),n.a.createElement(v,{books:this.state.books,toggleRead:this.toggleRead,removeBook:this.removeBook,query:this.state.query}))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEEElEQVRYR7VXS28bVRT+ztgzid3YbsmrSVNcpy20alAFspEaCQHdlCJVYkelhhVqGtb8jq4bAztSCVYgQFA24bEIlYKQoKyKUMFpnWSasRM7fsUzc6s79kzHkxnPJcCsZu7j3O985zvnniEEPASABU0eYDzIHh//Tx/vQfb3/wIg6LAwj9z79jEQhLRYLMbb0uBFIkwxU9fiUbozOjpa5YfdvftHMprAJZA0QgbWWKu8nM1m6yJh7BsCxphcUEuvwWRzjOgtApKOdwxbJuHK1lY5QhH6HAwjzhxhByb7jBHdpnr5h1w22w7SkwNg8dMv3ySSrp09dUI+fnQ8Kkk0DuAFAAkvpdxYd+PvamlbIeA57xqX9xUw3DPBVK20ra8VN3WCtHT97ctf8z3EF87f/OT8S1OJ1eHhw3Ju5oyl/jB1Wh4xxh6XtkFkmXER4J9BfNH9v9ZQqdbavzys5vLvX/2V0gu3Xnw2Eft+LjeaPDE1geen0z2HB4GxxhmD2gEQpjvLJt/zcF3FplbC0s9qtaA1X6Xp+fzyZEp5/Z3cGDiAM9PpUGP2AsYYugxYQ36i847ZAD5eVVHc2fuOA2geSykDcy4AtmDcfrmZsN/dAEQUz0E6DKyqeLSz1+IA2GRKwT9loKsBiwGpGwIHWB8OPQxAGICfFrwh6JMJzpQwAG8YfMPi0YCIeB6tq9jQSuhqoMPAsZQCtwZEDHWzsEeEIvt8GfADIFQLugxwDYjenB4R9teAW1R+me6ngbBs6KuB9NQEzh6wDoQd7C1EPRo4SBqGaSAIkHAW+AnKq4t+aejXK3Cba91SvI8BngUZz10QJsSwOuDnBGeAp+FSpxT/exHyy8iuhKJpyAHc7pTiXgDHJ8Zx7nSmx45965Uru3hcKqPR2sOALGNs5AiOJBNWHditN7BdqULXDSiKjFRiCEPxmC+eQnHD2uMrQkWO4uXz56zNpmmislvDplbGuqqh2WpZBt1h4SGrNZpQtbKrUercioos45lUEqnkEOKxQYulRrOF+w8KaBvG0xBk5vO14Xg0fn32qGVcAiDLMtq6zvuNvqw2Gg3rsMHYU2/9dMP7BSkiwdANx96HKxvQ6nqdMvP5LyTgymwmgZnJQ5DCewsLqNGoYWX5G8vg7MXLiMYO7QPrLWSdGxT4rVjDyoMqd/ArOvnuR6dYxPgRwISIiOw11Koi8vdP1qeRvgA2sK91DDHHNsgwXrH8PblwawymdMNgbIY6UfB9HHoJQwS65GodGQP7Fgy7Ak6YkiTdAxkf/Ln4nirUTPoZTd9YvBAx8Qaf0yXcKeQXOnT4PEE/MHz8wABE+j8BNkK7bxEbzhoRUPYa23MBzYdjcBv1Jq59QOifkfcYtzdB7/2ghV3P9t4ndV1XSN6qZs4AAAAASUVORK5CYII="}},[[11,1,2]]]);
//# sourceMappingURL=main.c35d1953.chunk.js.map