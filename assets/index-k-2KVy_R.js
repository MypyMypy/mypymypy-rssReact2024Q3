import{u as p,r as i,j as e,L as g,a as j}from"./index-DMJZudTn.js";import{u as h,a as b}from"./users.hooks-B9ONn1nc.js";const x=t=>{const s={};for(const[n,r]of t.entries())s[n]=r;return s},d=()=>{const[t,s]=p(),[n,r]=i.useState({});return i.useEffect(()=>{const c=x(t);r(c)},[t]),{queryObject:n,queryParams:t,setQueryParams:s}},v=({id:t,firstName:s,lastName:n,country:r,age:c,email:a})=>{const{queryParams:o}=d();return e.jsx("article",{children:e.jsxs(g,{to:`/user/${t}?`+o,children:[e.jsxs("h3",{children:[s," ",n]}),c&&e.jsxs("p",{children:["Age: ",c]}),r&&e.jsxs("p",{children:["Country: ",r]}),a&&e.jsxs("p",{children:["Email: ",a]})]})})},y={"users-list":"_users-list_196x9_1"},C=({Pagination:t})=>{const[s,n]=i.useState(!1),{state:r}=j(),{users:c,status:a}=r.users,{getUsers:o}=h(),{queryParams:u}=d();i.useEffect(()=>{const l=x(u);o(l)},[u]),i.useEffect(()=>{if(s)throw new Error("Yo Ho Ho!")},[s]);const f=l=>{l.preventDefault(),n(!0)};return e.jsxs("div",{children:[e.jsx("button",{onClick:f,children:"Throw Error"}),a==="loading"?e.jsx("div",{children:"Loading..."}):e.jsx("ul",{className:y["users-list"],children:c.map((l,m)=>e.jsx("li",{children:e.jsx(v,{...l})},m))}),t&&e.jsx(t,{})]})},S=({setSearchRow:t})=>{const{qUser:s}=b(),[n,r]=i.useState(""),c=o=>{const u=o.target.value;t(u),r(u)},a=o=>{o.preventDefault(),s&&(r(s),t(s))};return e.jsxs("div",{children:[e.jsx("input",{placeholder:"enter search",onChange:o=>{c(o)},value:n}),s&&e.jsx("div",{children:e.jsx("button",{onClick:()=>a,children:s})})]})},q=({qUser:t})=>{const{getUsers:s}=h(),n=r=>{r.preventDefault(),s({q:t})};return e.jsx("button",{onClick:r=>n(r),children:"Search"})},P=()=>{const[t,s]=i.useState(""),{getUsers:n}=h(),r=c=>{c.preventDefault(),n({q:t})};return e.jsxs("form",{onSubmit:r,children:[e.jsx(S,{setSearchRow:s}),e.jsx(q,{qUser:t})]})},U=({pageNumber:t})=>{const{queryObject:s,setQueryParams:n}=d(),r=c=>{c.preventDefault(),n(a=>({...a,page:t}))};return e.jsx("button",{onClick:r,style:{backgroundColor:s.page===t.toString()?"green":"inherit"},children:t})},k=()=>{const{state:t}=j(),{total:s,limit:n}=t.users,[r,c]=i.useState(1);i.useEffect(()=>{s&&n&&c(Math.floor(s/n))},[s,n]);const a=i.useCallback(()=>{const o=[];for(let u=1;u<=r;u++)o.push(e.jsx(U,{pageNumber:u},u));return o},[r]);return e.jsx("div",{children:a()})},w=()=>e.jsxs(e.Fragment,{children:[e.jsx("header",{children:e.jsx("div",{className:"container",children:e.jsx(P,{})})}),e.jsx("main",{children:e.jsx("section",{children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"Users"}),e.jsx(C,{Pagination:k})]})})})]});export{w as Home};
