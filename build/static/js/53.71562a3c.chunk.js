"use strict";(self.webpackChunkecom_store=self.webpackChunkecom_store||[]).push([[53],{53:(e,r,t)=>{t.r(r),t.d(r,{default:()=>z});var o=t(43),l=t(464),s=t(42),a=t(579);const i=l.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${e=>{let{fullWidth:r}=e;return r&&l.AH`width: 100%;`}}
`,n=l.Ay.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
`,d=l.Ay.input`
  padding: 12px 16px;
  border: 1px solid ${e=>{let{hasError:r,theme:t}=e;return r?t.colors.secondary:"#ddd"}};
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  background-color: ${e=>{let{theme:r}=e;return r.colors.white}};

  &:focus {
    outline: none;
    border-color: ${e=>{let{hasError:r,theme:t}=e;return r?t.colors.secondary:t.colors.primary}};
    box-shadow: 0 0 0 3px ${e=>{let{hasError:r,theme:t}=e;return r?`${t.colors.secondary}22`:`${t.colors.primary}22`}};
  }

  &:disabled {
    background-color: ${e=>{let{theme:r}=e;return r.colors.lightGray}};
    cursor: not-allowed;
    opacity: 0.6;
  }

  &::placeholder {
    color: ${e=>{let{theme:r}=e;return r.colors.lightText}};
  }
`,c=l.Ay.span`
  font-size: 0.875rem;
  color: ${e=>{let{theme:r}=e;return r.colors.secondary}};
`,u=l.Ay.span`
  font-size: 0.875rem;
  color: ${e=>{let{theme:r}=e;return r.colors.lightText}};
`,m=e=>{let{hasError:r,fullWidth:t=!1,label:o,errorMessage:l,helpText:s,id:m,...h}=e;const b=m||`input-${Math.random().toString(36).substr(2,9)}`;return(0,a.jsxs)(i,{fullWidth:t,children:[o&&(0,a.jsxs)(n,{htmlFor:b,children:[o,h.required&&(0,a.jsx)("span",{style:{color:"red"},children:" *"})]}),(0,a.jsx)(d,{id:b,hasError:r||!!l,...h}),l&&(0,a.jsx)(c,{children:l}),s&&!l&&(0,a.jsx)(u,{children:s})]})};var h=t(388);const b=l.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  width: 100%;
`,y=l.Ay.textarea`
  padding: 12px 16px;
  border: 1px solid ${e=>{let{hasError:r,theme:t}=e;return r?t.colors.secondary:"#ddd"}};
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  min-height: 150px;
  resize: vertical;
  transition: all 0.2s ease-in-out;
  background-color: ${e=>{let{theme:r}=e;return r.colors.white}};

  &:focus {
    outline: none;
    border-color: ${e=>{let{hasError:r,theme:t}=e;return r?t.colors.secondary:t.colors.primary}};
    box-shadow: 0 0 0 3px ${e=>{let{hasError:r,theme:t}=e;return r?`${t.colors.secondary}22`:`${t.colors.primary}22`}};
  }

  &:disabled {
    background-color: ${e=>{let{theme:r}=e;return r.colors.lightGray}};
    cursor: not-allowed;
    opacity: 0.6;
  }

  &::placeholder {
    color: ${e=>{let{theme:r}=e;return r.colors.lightText}};
  }
`,x=l.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,p=l.Ay.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
`,g=l.Ay.span`
  font-size: 0.875rem;
  color: ${e=>{let{theme:r}=e;return r.colors.secondary}};
`,f=l.Ay.div`
  background-color: #d4edda;
  color: #155724;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #c3e6cb;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '✓';
    font-weight: bold;
    font-size: 1.2rem;
  }
`,j=l.Ay.span`
  color: ${e=>{let{theme:r}=e;return r.colors.secondary}};
  margin-left: 4px;
`,$=()=>{const[e,r]=(0,o.useState)({fullName:"",email:"",subject:"",body:""}),[t,l]=(0,o.useState)({}),[i,n]=(0,o.useState)(!1),[d,c]=(0,o.useState)(!1),{addToast:u}=(0,s.d)(),$=(0,o.useCallback)((e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.toLowerCase())),[]),w=(0,o.useCallback)((()=>{const r={};return e.fullName.trim()?e.fullName.trim().length<3&&(r.fullName="Full name must be at least 3 characters"):r.fullName="Full name is required",e.email.trim()?$(e.email)||(r.email="Please enter a valid email address"):r.email="Email is required",e.subject.trim()?e.subject.trim().length<3&&(r.subject="Subject must be at least 3 characters"):r.subject="Subject is required",e.body.trim()?e.body.trim().length<3&&(r.body="Message must be at least 3 characters"):r.body="Message is required",l(r),0===Object.keys(r).length}),[e,$]),v=(0,o.useCallback)((e=>{const{name:o,value:s}=e.target;r((e=>({...e,[o]:s}))),t[o]&&l((e=>({...e,[o]:void 0})))}),[t]);return(0,a.jsxs)(a.Fragment,{children:[d&&(0,a.jsx)(f,{children:"Your message has been sent successfully! We'll get back to you soon."}),(0,a.jsxs)(b,{onSubmit:async t=>{if(t.preventDefault(),w()){n(!0);try{await new Promise((e=>setTimeout(e,1e3))),console.log("Form submitted:",e),r({fullName:"",email:"",subject:"",body:""}),c(!0),u({type:"success",title:"Message Sent!",message:"Thank you for your message. We'll get back to you soon."}),setTimeout((()=>{c(!1)}),5e3)}catch(o){u({type:"error",title:"Error",message:"Failed to send message. Please try again."})}finally{n(!1)}}else u({type:"error",title:"Validation Error",message:"Please correct the errors in the form."})},noValidate:!0,children:[(0,a.jsx)(m,{type:"text",name:"fullName",label:"Full Name",value:e.fullName,onChange:v,errorMessage:t.fullName,required:!0,fullWidth:!0,placeholder:"Enter your full name",disabled:i}),(0,a.jsx)(m,{type:"email",name:"email",label:"Email Address",value:e.email,onChange:v,errorMessage:t.email,required:!0,fullWidth:!0,placeholder:"Enter your email address",disabled:i}),(0,a.jsx)(m,{type:"text",name:"subject",label:"Subject",value:e.subject,onChange:v,errorMessage:t.subject,required:!0,fullWidth:!0,placeholder:"Enter the subject of your message",disabled:i}),(0,a.jsxs)(x,{children:[(0,a.jsxs)(p,{htmlFor:"body",children:["Message",(0,a.jsx)(j,{children:"*"})]}),(0,a.jsx)(y,{id:"body",name:"body",value:e.body,onChange:v,hasError:!!t.body,placeholder:"Enter your message here...",disabled:i,required:!0,"aria-describedby":t.body?"body-error":void 0}),t.body&&(0,a.jsx)(g,{id:"body-error",role:"alert",children:t.body})]}),(0,a.jsx)(h.$,{type:"submit",size:"large",isLoading:i,disabled:i,style:{alignSelf:"flex-start"},children:i?"Sending...":"Send Message"})]})]})},w=l.Ay.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,v=l.Ay.div`
  text-align: center;
`,A=l.Ay.h1`
  font-size: 2.5rem;
  margin: 0 0 16px 0;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.mobile}}) {
    font-size: 2rem;
  }
`,k=l.Ay.p`
  font-size: 1.1rem;
  color: ${e=>{let{theme:r}=e;return r.colors.lightText}};
  margin: 0;
  line-height: 1.5;
`,E=l.Ay.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,z=()=>(0,a.jsxs)(w,{children:[(0,a.jsxs)(v,{children:[(0,a.jsx)(A,{children:"Get in Touch"}),(0,a.jsx)(k,{children:"Have a question, suggestion, or need support? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible."})]}),(0,a.jsx)(E,{children:(0,a.jsx)($,{})})]})}}]);
//# sourceMappingURL=53.71562a3c.chunk.js.map