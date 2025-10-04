"use strict";(self.webpackChunkecom_store=self.webpackChunkecom_store||[]).push([[295],{295:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var i=r(43),o=r(900),s=r(464),n=r(542),a=r(718),c=r(42),l=r(388),d=r(441),h=r(555),x=r(579);const p=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    flex-direction: row;
    gap: 32px;
  }
`,u=s.Ay.div`
  flex: 1;

  @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    max-width: 500px;
  }
`,m=s.Ay.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
`,g=s.Ay.div`
  width: 100%;
  height: 300px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.lightGray}};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
`,f=s.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,y=s.Ay.h1`
  font-size: 2rem;
  margin: 0;
  line-height: 1.3;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}) {
    font-size: 1.5rem;
  }
`,w=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,j=s.Ay.span`
  font-size: 1.75rem;
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,b=s.Ay.span`
  font-size: 1.25rem;
  text-decoration: line-through;
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
`,v=s.Ay.span`
  background-color: ${e=>{let{theme:t}=e;return t.colors.secondary}};
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
`,A=s.Ay.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin: 0;
`,$=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
`,P=s.Ay.span`
  color: #ffc107;
  font-size: 1.2rem;
`,k=s.Ay.section`
  margin-top: 48px;
`,z=s.Ay.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.lightGray}};
`,E=s.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.lightGray}};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
`,T=s.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 8px;
`,C=s.Ay.span`
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,F=s.Ay.span`
  color: #ffc107;
  font-size: 1.1rem;
`,I=s.Ay.p`
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,S=s.Ay.p`
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
  font-style: italic;
  text-align: center;
  padding: 20px;
`,H=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    flex-direction: row;
    gap: 32px;
  }
`,D=()=>{var e;const{id:t}=(0,o.g)(),r=(0,o.Zp)(),[s,D]=(0,i.useState)(null),[R,G]=(0,i.useState)(!0),[M,W]=(0,i.useState)(null),[B,N]=(0,i.useState)(!1),[O,_]=(0,i.useState)(!1),{addToCart:q}=(0,a.useCart)(),{addToast:L}=(0,c.d)(),Z=(0,i.useMemo)((()=>{if(!s)return{hasDiscount:!1,discountPercentage:0};const e=s.price!==s.discountedPrice;return{hasDiscount:e,discountPercentage:e?Math.round((s.price-s.discountedPrice)/s.price*100):0}}),[s]);(0,i.useEffect)((()=>{if(!t)return W("Product ID is required"),void G(!1);(async()=>{try{G(!0),W(null);const e=await(0,n.eH)(t);D(e)}catch(e){W(e.message||"Failed to fetch product"),console.error("Error fetching product:",e)}finally{G(!1)}})()}),[t]);const J=()=>{t?window.location.reload():r("/")},K=e=>{const t=Math.floor(e),r=e%1!==0;return(0,x.jsxs)(P,{children:["\u2605".repeat(t),r&&"\u2606","\u2606".repeat(5-t-(r?1:0))]})};return R?(0,x.jsxs)(H,{children:[(0,x.jsx)("div",{style:{flex:1},children:(0,x.jsx)(d.E,{height:400})}),(0,x.jsxs)("div",{style:{flex:1},children:[(0,x.jsx)(d.E,{height:40,width:"80%"}),(0,x.jsx)(d.E,{height:24,width:"60%",style:{margin:"16px 0"}}),(0,x.jsx)(d.E,{height:80,style:{margin:"16px 0"}}),(0,x.jsx)(d.E,{height:48,width:"200px"})]})]}):M||!s?(0,x.jsx)(h.x,{error:M||"Product not found",onRetry:J}):(0,x.jsxs)("div",{children:[(0,x.jsxs)(p,{children:[(0,x.jsx)(u,{children:!B&&null!==(e=s.image)&&void 0!==e&&e.url?(0,x.jsx)(m,{src:s.image.url,alt:s.image.alt||s.title,onError:()=>N(!0)}):(0,x.jsx)(g,{children:"Image not available"})}),(0,x.jsxs)(f,{children:[(0,x.jsx)(y,{children:s.title}),s.rating&&(0,x.jsxs)($,{children:[K(s.rating),(0,x.jsxs)("span",{children:["(",s.rating,")"]})]}),(0,x.jsxs)(w,{children:[(0,x.jsxs)(j,{children:["$",s.discountedPrice.toFixed(2)]}),Z.hasDiscount&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(b,{children:["$",s.price.toFixed(2)]}),(0,x.jsxs)(v,{children:[Z.discountPercentage,"% OFF"]})]})]}),(0,x.jsx)(A,{children:s.description}),(0,x.jsx)(l.$,{onClick:async()=>{if(s)try{_(!0),q(s),L({type:"success",title:"Added to Cart",message:`${s.title} has been added to your cart.`})}catch(M){L({type:"error",title:"Error",message:"Failed to add item to cart. Please try again."})}finally{_(!1)}},isLoading:O,size:"large",style:{alignSelf:"flex-start"},children:"Add to Cart"})]})]}),(0,x.jsxs)(k,{children:[(0,x.jsx)(z,{children:"Customer Reviews"}),s.reviews&&s.reviews.length>0?s.reviews.map((e=>(0,x.jsxs)(E,{children:[(0,x.jsxs)(T,{children:[(0,x.jsx)(C,{children:e.username}),(0,x.jsx)(F,{children:K(e.rating)})]}),(0,x.jsx)(I,{children:e.description})]},e.id))):(0,x.jsx)(S,{children:"No reviews yet for this product."})]})]})}},542:(e,t,r)=>{r.d(t,{eH:()=>n,j0:()=>s});const i="https://v2.api.noroff.dev/online-shop";const o=new class{async fetchWithErrorHandling(e){try{const t=await fetch(e);if(!t.ok){throw{message:`HTTP ${t.status}: ${t.statusText}`,status:t.status,statusText:t.statusText}}return await t.json()}catch(t){if(t instanceof TypeError&&t.message.includes("fetch"))throw{message:"Network error. Please check your internet connection.",status:0};if(t&&"object"===typeof t&&"message"in t)throw t;throw{message:"An unexpected error occurred",status:500}}}async fetchProducts(){try{const e=await this.fetchWithErrorHandling(i);if(!e.data||!Array.isArray(e.data))throw{message:"Invalid response format: expected array of products",status:500};return e.data}catch(e){throw console.error("Error fetching products:",e),e}}async fetchProductById(e){try{if(!e||"string"!==typeof e)throw{message:"Invalid product ID provided",status:400};const t=await this.fetchWithErrorHandling(`${i}/${e}`);if(!t.data)throw{message:"Product not found",status:404};return t.data}catch(t){throw console.error(`Error fetching product with id ${e}:`,t),t}}},s=()=>o.fetchProducts(),n=e=>o.fetchProductById(e)},555:(e,t,r)=>{r.d(t,{x:()=>d});r(43);var i=r(464),o=r(388),s=r(579);const n=i.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  min-height: 200px;
`,a=i.Ay.div`
  font-size: 3rem;
  margin-bottom: 16px;
  color: ${e=>{let{theme:t}=e;return t.colors.secondary}};
`,c=i.Ay.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,l=i.Ay.p`
  font-size: 1rem;
  margin-bottom: 24px;
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
  max-width: 400px;
`,d=e=>{let{error:t="Something went wrong. Please try again.",onRetry:r,showRetry:i=!0}=e;return(0,s.jsxs)(n,{children:[(0,s.jsx)(a,{children:"\u26a0\ufe0f"}),(0,s.jsx)(c,{children:"Oops!"}),(0,s.jsx)(l,{children:t}),i&&r&&(0,s.jsx)(o.$,{onClick:r,variant:"outline",children:"Try Again"})]})}}}]);
//# sourceMappingURL=295.97aebff0.chunk.js.map