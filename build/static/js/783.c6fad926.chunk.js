"use strict";(self.webpackChunkecom_store=self.webpackChunkecom_store||[]).push([[783],{783:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(43),o=r(900),i=r(464),s=r(579);const a=i.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 20px;
  min-height: 60vh;
`,l=i.Ay.div`
  font-size: 5rem;
  margin-bottom: 24px;
  animation: bounce 1s ease-in-out;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`,c=i.Ay.h1`
  font-size: 2.5rem;
  margin: 0 0 16px 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}) {
    font-size: 2rem;
  }
`,d=i.Ay.p`
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
  margin: 0 0 32px 0;
  max-width: 500px;
  line-height: 1.5;
`,m=i.Ay.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`,p=i.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.lightGray}};
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 32px;
  max-width: 400px;
  width: 100%;
`,x=i.Ay.h2`
  font-size: 1.3rem;
  margin: 0 0 16px 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,u=i.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 0.95rem;

  &:last-child {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 1.1rem;
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,h=()=>{const e=Math.random().toString(36).substring(2,15).toUpperCase(),t=(new Date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return(0,n.useEffect)((()=>{document.title="Order Confirmation - eComStore";const e=document.createElement("div");return e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),e.style.position="absolute",e.style.left="-10000px",e.textContent="Order placed successfully",document.body.appendChild(e),()=>{document.title="eComStore",document.body.removeChild(e)}}),[]),(0,s.jsxs)(a,{children:[(0,s.jsx)(l,{role:"img","aria-label":"Success",children:"\ud83c\udf89"}),(0,s.jsx)(c,{children:"Order Confirmed!"}),(0,s.jsx)(d,{children:"Thank you for your purchase! Your order has been successfully placed and is being processed. You'll receive a confirmation email shortly."}),(0,s.jsxs)(p,{children:[(0,s.jsx)(x,{children:"Order Summary"}),(0,s.jsxs)(u,{children:[(0,s.jsx)("span",{children:"Order Number:"}),(0,s.jsxs)("span",{children:["#",e]})]}),(0,s.jsxs)(u,{children:[(0,s.jsx)("span",{children:"Order Date:"}),(0,s.jsx)("span",{children:t})]}),(0,s.jsxs)(u,{children:[(0,s.jsx)("span",{children:"Status:"}),(0,s.jsx)("span",{children:"Processing"})]})]}),(0,s.jsxs)(m,{children:[(0,s.jsx)(o.N_,{to:"/",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",backgroundColor:"#4a90e2",color:"white",textDecoration:"none",padding:"14px 28px",fontSize:"1.125rem",fontWeight:"500",borderRadius:"6px",transition:"background-color 0.2s ease"},children:"Continue Shopping"}),(0,s.jsx)(o.N_,{to:"/contact",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent",color:"#4a90e2",textDecoration:"none",border:"1px solid #4a90e2",padding:"14px 28px",fontSize:"1.125rem",fontWeight:"500",borderRadius:"6px",transition:"all 0.2s ease"},children:"Contact Support"})]})]})}}}]);
//# sourceMappingURL=783.c6fad926.chunk.js.map