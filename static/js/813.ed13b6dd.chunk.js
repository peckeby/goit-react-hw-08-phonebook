"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[813],{5813:function(e,a,t){t.r(a),t.d(a,{default:function(){return i}});var n=t(9439),r=t(2791),s=t(9434),u=t(208),c=t(6351),d=t(3309),l=t(184);function i(){var e=(0,s.I0)(),a=(0,s.v9)(c.K2),t=(0,r.useState)(""),i=(0,n.Z)(t,2),o=i[0],h=i[1],m=(0,r.useState)(""),p=(0,n.Z)(m,2),b=p[0],f=p[1],v=function(e){var a=e.target,t=a.name,n=a.value;switch(t){case"userName":f(n);break;case"userNumber":h(n);break;default:return}};return(0,l.jsxs)(d.l0,{onSubmit:function(t){var n;t.preventDefault(),a.length>0&&(n=b,a.filter((function(e){return e.name.includes(n)}))).length>0?alert("".concat(b," is already in contacts.")):e((0,u.uK)({name:b,number:o})),h(""),f("")},children:[(0,l.jsxs)(d.lX,{children:["Name",(0,l.jsx)(d.yt,{type:"text",name:"userName",onChange:v,value:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,l.jsxs)(d.lX,{children:["Phone",(0,l.jsx)(d.yt,{type:"tel",name:"userNumber",onChange:v,value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,l.jsx)(d.md,{type:"submit",children:"Add contact"})]})}}}]);
//# sourceMappingURL=813.ed13b6dd.chunk.js.map