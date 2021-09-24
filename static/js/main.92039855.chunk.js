(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{131:function(t,e){},133:function(t,e){},143:function(t,e){},145:function(t,e){},172:function(t,e){},174:function(t,e){},175:function(t,e){},180:function(t,e){},182:function(t,e){},188:function(t,e){},190:function(t,e){},209:function(t,e){},221:function(t,e){},224:function(t,e){},228:function(t,e,n){},230:function(t,e,n){"use strict";n.r(e);var a=n(11),c=n.n(a),r=n(114),i=n.n(r),o=n(117),s=n(115),u=n(33),l=n(34),d=n(36),b=n(35),m=n(116),f=n.n(m),h=(n(228),n(32)),j=n(2),p=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onInputChanged=function(e){var n=e.currentTarget,a=n.value,c=n.name;return t.setState(Object(h.a)({},c,a))},t.onSubmitClick=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:"form",onSubmit:this.onSubmitClick,children:[Object(j.jsxs)("label",{className:"label",children:["Name",Object(j.jsx)("input",{className:"input-name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.onInputChanged})]}),Object(j.jsxs)("label",{className:"label",children:["Number",Object(j.jsx)("input",{className:"input-name",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.onInputChanged})]}),Object(j.jsx)("button",{className:"add-button",type:"submit","aria-label":"add contact",children:"add contact"})]})}}]),n}(a.Component),C=function(t){var e=t.filtered,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:"contact-list",children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{children:[a,": ",c,Object(j.jsx)("button",{onClick:function(){return n(e)},className:"delete-button",type:"button","aria-label":"delete",children:"Delete"})]},e)}))})},O=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:"label",children:["Find contacts by name",Object(j.jsx)("input",{className:"input-name",type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:n})]})},v=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){if(t.onCheckContactAlready(e))return alert("".concat(e.name," is already in contacts"));var n=Object(s.a)({id:f.a.generate()},e);t.setState((function(t){var e=t.contacts;return{contacts:[n].concat(Object(o.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.onFilterChanged=function(e){var n=e.currentTarget.value;return t.setState({filter:n})},t.onCheckContactAlready=function(e){return t.state.contacts.some((function(t){return t.name===e.name}))},t.onFilterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{onSubmit:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(O,{value:this.state.filter,onChange:this.onFilterChanged}),Object(j.jsx)(C,{filtered:this.onFilterContacts(),onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[230,1,2]]]);
//# sourceMappingURL=main.92039855.chunk.js.map