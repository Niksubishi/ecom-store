"use strict";(self.webpackChunkecom_store=self.webpackChunkecom_store||[]).push([[462],{230:(e,t,r)=>{r.d(t,{Z:()=>s});r(43);var o=r(464),i=r(579);const n=o.Ay.div`
  border-radius: 8px;
  transition: all 0.3s ease;

  ${e=>{let{variant:t}=e;return(e=>{switch(e){case"outlined":return o.AH`
        background-color: transparent;
        border: 1px solid #e0e0e0;
        box-shadow: none;
      `;case"elevated":return o.AH`
        background-color: ${e=>{let{theme:t}=e;return t.colors.white}};
        border: none;
        box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
      `;default:return o.AH`
        background-color: ${e=>{let{theme:t}=e;return t.colors.white}};
        border: none;
        box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
      `}})(t)}}
  ${e=>{let{padding:t}=e;return(e=>{switch(e){case"none":return o.AH`padding: 0;`;case"small":return o.AH`padding: 12px;`;case"large":return o.AH`padding: 24px;`;default:return o.AH`padding: 16px;`}})(t)}}

  ${e=>{let{hover:t}=e;return t&&o.AH`
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
    }
  `}}

  ${e=>{let{onClick:t}=e;return t&&o.AH`
    cursor: pointer;
  `}}
`,s=e=>{let{children:t,variant:r="default",padding:o="medium",hover:s=!1,className:l,onClick:a}=e;return(0,i.jsx)(n,{variant:r,padding:o,hover:s,className:l,onClick:a,children:t})}},462:(e,t,r)=>{r.r(t),r.d(t,{default:()=>G});var o=r(43),i=r(464),n=r(900),s=r(230),l=r(579);const a=(0,i.Ay)(s.Z)`
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
  }
`,c=i.Ay.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  position: relative;
`,d=i.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  background-color: ${e=>{let{theme:t}=e;return t.colors.lightGray}};

  ${a}:hover & {
    transform: scale(1.05);
  }
`,h=i.Ay.div`
  width: 100%;
  height: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.colors.lightGray}};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
  font-size: 0.875rem;
`,u=i.Ay.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`,p=i.Ay.h3`
  font-size: 1.1rem;
  margin-bottom: 8px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,m=i.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
`,x=i.Ay.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,g=i.Ay.span`
  font-size: 0.9rem;
  text-decoration: line-through;
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
`,f=i.Ay.span`
  background-color: ${e=>{let{theme:t}=e;return t.colors.secondary}};
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
  text-transform: uppercase;
`,y=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
  font-size: 0.875rem;
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
`,w=i.Ay.span`
  color: #ffc107;
`,b=(0,i.Ay)(n.N_)`
  display: block;
  background-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  color: white;
  text-align: center;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.875rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-top: auto;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary}}dd;
  }

  &:focus-visible {
    outline: 2px solid ${e=>{let{theme:t}=e;return t.colors.primary}};
    outline-offset: 2px;
  }
`,j=e=>{var t;let{product:r,className:i}=e;const[n,s]=(0,o.useState)(!1),j=(0,o.useMemo)((()=>{const e=r.price!==r.discountedPrice;return{hasDiscount:e,discountPercentage:e?Math.round((r.price-r.discountedPrice)/r.price*100):0}}),[r.price,r.discountedPrice]),v=(0,o.useMemo)((()=>({discounted:r.discountedPrice.toFixed(2),original:r.price.toFixed(2)})),[r.discountedPrice,r.price]),$=(0,o.useMemo)((()=>{if(!r.rating)return null;const e=Math.floor(r.rating),t=r.rating%1!==0;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(w,{children:["\u2605".repeat(e),t&&"\u2606","\u2606".repeat(5-e-(t?1:0))]}),(0,l.jsxs)("span",{children:["(",r.rating,")"]})]})}),[r.rating]);return(0,l.jsxs)(a,{className:i,padding:"none",hover:!0,children:[(0,l.jsx)(c,{children:!n&&null!==(t=r.image)&&void 0!==t&&t.url?(0,l.jsx)(d,{src:r.image.url,alt:r.image.alt||r.title,loading:"lazy",onError:()=>{s(!0)}}):(0,l.jsx)(h,{children:"No Image Available"})}),(0,l.jsxs)(u,{children:[(0,l.jsx)(p,{children:r.title}),r.rating&&(0,l.jsx)(y,{children:$}),(0,l.jsxs)(m,{children:[(0,l.jsxs)(x,{children:["$",v.discounted]}),j.hasDiscount&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(g,{children:["$",v.original]}),(0,l.jsxs)(f,{children:[j.discountPercentage,"% OFF"]})]})]}),(0,l.jsx)(b,{to:`/product/${r.id}`,children:"View Product"})]})]})},v=(0,o.memo)(j);const $=i.Ay.div`
  position: relative;
  margin-bottom: 24px;
  width: 100%;
  max-width: 500px;
`,A=i.Ay.input`
  width: 100%;
  padding: 12px 16px 12px 44px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  background-color: ${e=>{let{theme:t}=e;return t.colors.white}};

  &:focus {
    border-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
    box-shadow: 0 0 0 3px ${e=>{let{theme:t}=e;return t.colors.primary}}22;
  }

  &::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
  }
`,k=i.Ay.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
  pointer-events: none;
`,P=i.Ay.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.lightGray}};
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
  }

  &:focus-visible {
    outline: 2px solid ${e=>{let{theme:t}=e;return t.colors.primary}};
    outline-offset: 2px;
  }
`,C=e=>{let{onSearch:t,placeholder:r="Search products...",delay:i=300,className:n}=e;const[s,a]=(0,o.useState)(""),c=function(e,t){const[r,i]=(0,o.useState)(e);return(0,o.useEffect)((()=>{const r=setTimeout((()=>{i(e)}),t);return()=>{clearTimeout(r)}}),[e,t]),r}(s,i),d=(0,o.useRef)(null);(0,o.useEffect)((()=>{t(c)}),[c,t]);const h=()=>{var e;a(""),null===(e=d.current)||void 0===e||e.focus()};return(0,l.jsxs)($,{className:n,children:[(0,l.jsx)(k,{"aria-hidden":"true",children:(0,l.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:(0,l.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})})}),(0,l.jsx)(A,{ref:d,type:"text",placeholder:r,value:s,onChange:e=>{a(e.target.value)},onKeyDown:e=>{"Escape"===e.key&&h()},"aria-label":"Search products"}),s&&(0,l.jsx)(P,{onClick:h,"aria-label":"Clear search",type:"button",children:"\xd7"})]})},T=(0,o.memo)(C);var z=r(441),E=r(555),H=r(542);const S=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,L=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,N=i.Ay.h1`
  font-size: 2rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}) {
    font-size: 1.5rem;
  }
`,M=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
`,F=i.Ay.div`
  text-align: center;
  padding: 60px 20px;
`,I=i.Ay.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,D=i.Ay.p`
  font-size: 1.1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
  margin: 0;
`,R=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
`,Y=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,B=i.Ay.p`
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
  font-size: 0.9rem;
  margin: 0;
`,G=()=>{const{products:e,filteredProducts:t,isLoading:r,error:i,searchTerm:n,filterProducts:s,retry:a}=function(){const[e,t]=(0,o.useState)({products:[],filteredProducts:[],isLoading:!0,error:null}),[r,n]=(0,o.useState)(""),s=(0,o.useCallback)((async()=>{try{t((e=>({...e,isLoading:!0,error:null})));const e=await(0,H.j0)();t((t=>({...t,products:e,filteredProducts:e,isLoading:!1})))}catch(i){const r=i;t((e=>({...e,isLoading:!1,error:r.message||"Failed to fetch products"})))}}),[]),l=(0,o.useCallback)((e=>{n(e),""===e.trim()?t((e=>({...e,filteredProducts:e.products}))):t((t=>({...t,filteredProducts:t.products.filter((t=>t.title.toLowerCase().includes(e.toLowerCase())||t.description.toLowerCase().includes(e.toLowerCase())||t.tags.some((t=>t.toLowerCase().includes(e.toLowerCase())))))})))}),[]),a=(0,o.useCallback)((()=>{s()}),[s]);return(0,o.useEffect)((()=>{s()}),[s]),{...e,searchTerm:r,filterProducts:l,retry:a}}(),c=(0,o.useMemo)((()=>Array.from({length:8},((e,t)=>(0,l.jsxs)(Y,{children:[(0,l.jsx)(z.E,{height:200}),(0,l.jsx)(z.E,{height:20,width:"80%"}),(0,l.jsx)(z.E,{height:16,width:"60%"}),(0,l.jsx)(z.E,{height:40,width:"100px"})]},t)))),[]),d=(0,o.useMemo)((()=>n.trim()?`Showing ${t.length} results for "${n}"`:`Showing ${t.length} products`),[t.length,n]);return r?(0,l.jsxs)(S,{children:[(0,l.jsxs)(L,{children:[(0,l.jsx)(z.E,{height:40,width:"200px"}),(0,l.jsx)(z.E,{height:48,width:"500px"})]}),(0,l.jsx)(R,{children:c})]}):i?(0,l.jsxs)(S,{children:[(0,l.jsx)(L,{children:(0,l.jsx)(N,{children:"All Products"})}),(0,l.jsx)(E.x,{error:i,onRetry:a})]}):(0,l.jsxs)(S,{children:[(0,l.jsxs)(L,{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(N,{children:"All Products"}),!r&&(0,l.jsx)(B,{children:d})]}),(0,l.jsx)(T,{onSearch:s})]}),0===t.length?(0,l.jsxs)(F,{children:[(0,l.jsx)(I,{children:n.trim()?"No products found":"No products available"}),(0,l.jsx)(D,{children:n.trim()?`Try adjusting your search term "${n}"`:"Please check back later for new products."})]}):(0,l.jsx)(M,{children:t.map((e=>(0,l.jsx)(v,{product:e},e.id)))})]})}},542:(e,t,r)=>{r.d(t,{eH:()=>s,j0:()=>n});const o="https://v2.api.noroff.dev/online-shop";const i=new class{async fetchWithErrorHandling(e){try{const t=await fetch(e);if(!t.ok){throw{message:`HTTP ${t.status}: ${t.statusText}`,status:t.status,statusText:t.statusText}}return await t.json()}catch(t){if(t instanceof TypeError&&t.message.includes("fetch"))throw{message:"Network error. Please check your internet connection.",status:0};if(t&&"object"===typeof t&&"message"in t)throw t;throw{message:"An unexpected error occurred",status:500}}}async fetchProducts(){try{const e=await this.fetchWithErrorHandling(o);if(!e.data||!Array.isArray(e.data))throw{message:"Invalid response format: expected array of products",status:500};return e.data}catch(e){throw console.error("Error fetching products:",e),e}}async fetchProductById(e){try{if(!e||"string"!==typeof e)throw{message:"Invalid product ID provided",status:400};const t=await this.fetchWithErrorHandling(`${o}/${e}`);if(!t.data)throw{message:"Product not found",status:404};return t.data}catch(t){throw console.error(`Error fetching product with id ${e}:`,t),t}}},n=()=>i.fetchProducts(),s=e=>i.fetchProductById(e)},555:(e,t,r)=>{r.d(t,{x:()=>d});r(43);var o=r(464),i=r(388),n=r(579);const s=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  min-height: 200px;
`,l=o.Ay.div`
  font-size: 3rem;
  margin-bottom: 16px;
  color: ${e=>{let{theme:t}=e;return t.colors.secondary}};
`,a=o.Ay.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,c=o.Ay.p`
  font-size: 1rem;
  margin-bottom: 24px;
  color: ${e=>{let{theme:t}=e;return t.colors.lightText}};
  max-width: 400px;
`,d=e=>{let{error:t="Something went wrong. Please try again.",onRetry:r,showRetry:o=!0}=e;return(0,n.jsxs)(s,{children:[(0,n.jsx)(l,{children:"\u26a0\ufe0f"}),(0,n.jsx)(a,{children:"Oops!"}),(0,n.jsx)(c,{children:t}),o&&r&&(0,n.jsx)(i.$,{onClick:r,variant:"outline",children:"Try Again"})]})}}}]);
//# sourceMappingURL=462.4611ddd1.chunk.js.map