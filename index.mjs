// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-count-by@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-ranks@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chisquare-cdf@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-identity-function@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-incrspace@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.0-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as c}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@v0.1.0-esm/index.mjs";function u(s,e){return t(e)?f(e,"alpha")&&(s.alpha=e.alpha,!m(s.alpha)||j(s.alpha))?new TypeError(a("1Lb8P,GU","alpha",s.alpha)):f(e,"groups")&&(s.groups=e.groups,!h(s.groups))?new TypeError(a("1Lb8Z,GX","groups",s.groups)):null:new TypeError(a("1Lb2V,FD",e))}function b(s){var e,i,r;if(i=4,e=!0,arguments.length>0){if(!t(s))throw new TypeError(a("1Lb3L,Gc",s));if(f(s,"digits")){if(!g(s.digits))throw new TypeError(a("1Lb3P,Fv","digits",s.digits));i=s.digits}if(f(s,"decision")){if(!c(s.decision))throw new TypeError(a("1Lb2o,GE","decision",s.decision));e=s.decision}}return r="",r+=this.method,r+="\n\n",r+="Null hypothesis: the medians of all groups are the same",r+="\n\n",r+="    pValue: "+v(this.pValue,-i)+"\n",r+="    statistic: "+v(this.statistic,-i),r+="    df: "+this.df,r+="\n\n",e&&(r+="Test Decision: ",this.rejected?r+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":r+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",r+="\n"),r}function w(){var h,m,j,f,g,c,v,w,x,y,E,L,T,G,V,k,D,F,I,P,R,q,W,X;if(E={},t(arguments[(f=arguments.length)-1])&&(g=arguments[f-1],f-=1,k=u(E,g)))throw k;if(m={},R={},E.groups){if((W=arguments[0]).length!==E.groups.length)throw new RangeError(a("1Lb9p,IC","opts.groups"));for(R=i(E.groups,l),f=(c=r(R)).length,I=0;I<f;I++)m[D=c[I]]=0;if(f<2)throw new Error(a("1Lb8W,GY","groups",c));h=E.groups}else{if(W=[],h=[],f<2)throw new Error(a("1Lb9q,ID",V));for(I=0;I<f;I++){if(!s(V=arguments[I]))throw new TypeError(a("1Lb8X,GZ",V));if(0===V.length)throw new Error(a("1Lb8Y,Ga",V));for(R[I]=V.length,m[I]=0,P=0;P<R[I];P++)h.push(I),W.push(V[P])}c=p(0,f,1)}if((v=void 0===E.alpha?.05:E.alpha)<0||v>1)throw new RangeError(a("1Lb9r,IE","alpha",v));for(q=W.length,x=n(W),G={},I=0;I<q;I++)m[h[I]]+=x[I],W[I]in G?G[W[I]]+=1:G[W[I]]=1;for(T=0,I=0;I<f;I++)D=c[I],T+=o(m[D],2)/R[D];for(T=12/(q*(q+1))*T-3*(q+1),j=0,y=r(G),I=0;I<y.length;I++)X=G[y[I]],j+=o(X,3)-X;return T/=1-j/(o(q,3)-q),L=1-d(T,w=f-1),e(F={},"rejected",L<=v),e(F,"alpha",v),e(F,"df",w),e(F,"pValue",L),e(F,"statistic",T),e(F,"method","Kruskal-Wallis Test"),e(F,"print",b),F}export{w as default};
//# sourceMappingURL=index.mjs.map
