"use strict";(self.webpackChunkecom_store=self.webpackChunkecom_store||[]).push([[421],{230:(e,t,r)=>{r.d(t,{Z:()=>l});r(43);var i=r(464),o=r(579);const n=i.Ay.div`
  border-radius: 8px;
  transition: all 0.3s ease;

  ${e=>{let{variant:t}=e;return(e=>{switch(e){case"outlined":return i.AH`
        background-color: transparent;
        border: 1px solid #e0e0e0;
        box-shadow: none;
      `;case"elevated":return i.AH`
        background-color: ${e=>{let{theme:t}=e;return t.colors.white}};
        border: none;
        box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
      `;default:return i.AH`
        background-color: ${e=>{let{theme:t}=e;return t.colors.white}};
        border: none;
        box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
      `}})(t)}}
  ${e=>{let{padding:t}=e;return(e=>{switch(e){case"none":return i.AH`padding: 0;`;case"small":return i.AH`padding: 12px;`;case"large":return i.AH`padding: 24px;`;default:return i.AH`padding: 16px;`}})(t)}}

  ${e=>{let{hover:t}=e;return t&&i.AH`
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
    }
  `}}

  ${e=>{let{onClick:t}=e;return t&&i.AH`
    cursor: pointer;
  `}}
`,l=e=>{let{children:t,variant:r="default",padding:i="medium",hover:l=!1,className:s,onClick:a}=e;return(0,o.jsx)(n,{variant:r,padding:i,hover:l,className:s,onClick:a,children:t})}},421:(e,t,r)=>{r.r(t),r.d(t,{default:()=>J});var i=r(43),o=r(900),n=r(464),l=r(128),s=r(42),a=r(388),d=r(579);const c=n.Ay.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.lightGray}};
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.white}};

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}) {
    flex-direction: column;
    gap: 12px;
  }
`,h=n.Ay.div`
  flex-shrink: 0;
  width: 100px;
  height: 100px;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}) {
    align-self: center;
  }
`,m=n.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`,x=n.Ay.div`
  width: 100%;
  height: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.colors.lightGray}};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
  font-size: 0.8rem;
  text-align: center;
`,p=n.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,u=n.Ay.h3`
  font-size: 1.1rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  line-height: 1.3;
`,g=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,y=n.Ay.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,f=n.Ay.span`
  font-size: 0.9rem;
  text-decoration: line-through;
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
`,b=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  gap: 12px;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`,j=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,$=(0,n.Ay)(a.$).attrs({variant:"outline",size:"small"})`
  width: 32px;
  height: 32px;
  padding: 0;
  font-size: 1.2rem;
  line-height: 1;
`,A=n.Ay.span`
  font-size: 1rem;
  font-weight: 500;
  min-width: 24px;
  text-align: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,v=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}) {
    align-items: center;
  }
`,w=n.Ay.span`
  font-size: 0.875rem;
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
`,k=n.Ay.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,C=(0,n.Ay)(a.$).attrs({variant:"ghost",size:"small"})`
  color: ${e=>{let{theme:t}=e;return t.colors.secondary}};

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.secondary}}11;
  }
`,z=e=>{var t;let{item:r}=e;const{updateQuantity:o,removeFromCart:n}=(0,l._)(),[s,a]=(0,i.useState)(!1),z=e=>{e>=1&&o(r.id,e)},T=(r.discountedPrice*r.quantity).toFixed(2),H=r.price!==r.discountedPrice;return(0,d.jsxs)(c,{children:[(0,d.jsx)(h,{children:!s&&null!==(t=r.image)&&void 0!==t&&t.url?(0,d.jsx)(m,{src:r.image.url,alt:r.image.alt||r.title,onError:()=>a(!0),loading:"lazy"}):(0,d.jsx)(x,{children:"No Image"})}),(0,d.jsxs)(p,{children:[(0,d.jsx)(u,{children:r.title}),(0,d.jsxs)(g,{children:[(0,d.jsxs)(y,{children:["$",r.discountedPrice.toFixed(2)]}),H&&(0,d.jsxs)(f,{children:["$",r.price.toFixed(2)]})]}),(0,d.jsxs)(b,{children:[(0,d.jsxs)(j,{children:[(0,d.jsx)($,{onClick:()=>z(r.quantity-1),disabled:r.quantity<=1,"aria-label":"Decrease quantity",children:"\u2212"}),(0,d.jsx)(A,{children:r.quantity}),(0,d.jsx)($,{onClick:()=>z(r.quantity+1),"aria-label":"Increase quantity",children:"+"})]}),(0,d.jsxs)(v,{children:[(0,d.jsx)(w,{children:"Subtotal"}),(0,d.jsxs)(k,{children:["$",T]})]}),(0,d.jsx)(C,{onClick:()=>{window.confirm(`Remove ${r.title} from your cart?`)&&n(r.id)},children:"Remove"})]})]})]})},T=(0,i.memo)(z);var H=r(230);const F=n.Ay.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    flex-direction: row;
    gap: 32px;
  }
`,S=n.Ay.div`
  flex: 2;
`,q=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.lightGray}};
`,P=n.Ay.h1`
  font-size: 1.8rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,G=n.Ay.span`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
`,I=n.Ay.div`
  text-align: center;
  padding: 80px 20px;
`,_=n.Ay.div`
  font-size: 4rem;
  margin-bottom: 16px;
  opacity: 0.3;
`,N=n.Ay.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,Y=n.Ay.p`
  font-size: 1rem;
  margin-bottom: 24px;
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
`,Z=(0,n.Ay)(H.Z)`
  flex: 1;
  height: fit-content;
  position: sticky;
  top: 20px;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    position: static;
  }
`,O=n.Ay.h2`
  font-size: 1.3rem;
  margin: 0 0 16px 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,R=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1rem;

  &:last-of-type {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 2px solid ${e=>{let{theme:t}=e;return t.colors.lightGray}};
    font-weight: bold;
    font-size: 1.2rem;
  }
`,W=n.Ay.span`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,D=n.Ay.span`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: 500;
`,E=(0,n.Ay)(a.$).attrs({size:"large",fullWidth:!0})`
  margin-top: 20px;
`,L=(0,n.Ay)(a.$).attrs({variant:"outline",size:"large"})``,Q=n.Ay.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}) {
    flex-direction: column;
  }
`,B=(0,n.Ay)(a.$).attrs({variant:"ghost",size:"small"})`
  color: ${e=>{let{theme:t}=e;return t.colors.secondary}};
  align-self: flex-start;
`,J=()=>{const{cartItems:e,getTotalPrice:t,clearCart:r,getItemCount:i}=(0,l._)(),{addToast:n}=(0,s.d)(),c=(0,o.Zp)(),h=i(),m=t(),x=.08*m,p=m+0+x,u=()=>{c("/")};return 0===e.length?(0,d.jsxs)(I,{children:[(0,d.jsx)(_,{children:"\ud83d\uded2"}),(0,d.jsx)(N,{children:"Your cart is empty"}),(0,d.jsx)(Y,{children:"Looks like you haven't added any items to your cart yet."}),(0,d.jsx)(L,{onClick:u,children:"Continue Shopping"})]}):(0,d.jsxs)(F,{children:[(0,d.jsxs)(S,{children:[(0,d.jsxs)(q,{children:[(0,d.jsx)(P,{children:"Shopping Cart"}),(0,d.jsxs)(G,{children:[h," ",1===h?"item":"items"]})]}),(0,d.jsx)("div",{children:e.map((e=>(0,d.jsx)(T,{item:e},e.id)))}),(0,d.jsx)(Q,{children:(0,d.jsx)(B,{onClick:()=>{window.confirm("Are you sure you want to clear your cart?")&&(r(),n({type:"info",title:"Cart Cleared",message:"All items have been removed from your cart."}))},children:"Clear Cart"})})]}),(0,d.jsxs)(Z,{children:[(0,d.jsx)(O,{children:"Order Summary"}),(0,d.jsxs)(R,{children:[(0,d.jsxs)(W,{children:["Subtotal (",h," items)"]}),(0,d.jsxs)(D,{children:["$",m.toFixed(2)]})]}),(0,d.jsxs)(R,{children:[(0,d.jsx)(W,{children:"Shipping"}),(0,d.jsx)(D,{children:"Free"})]}),(0,d.jsxs)(R,{children:[(0,d.jsx)(W,{children:"Tax"}),(0,d.jsxs)(D,{children:["$",x.toFixed(2)]})]}),(0,d.jsxs)(R,{children:[(0,d.jsx)(W,{children:"Total"}),(0,d.jsxs)(D,{children:["$",p.toFixed(2)]})]}),(0,d.jsx)(E,{onClick:()=>{0!==e.length&&(r(),n({type:"success",title:"Order Placed!",message:"Thank you for your purchase. Your order has been confirmed."}),c("/checkout-success"))},children:"Proceed to Checkout"}),(0,d.jsx)(a.$,{variant:"outline",fullWidth:!0,onClick:u,style:{marginTop:"12px"},children:"Continue Shopping"})]})]})}}}]);
//# sourceMappingURL=421.ff4adf60.chunk.js.map