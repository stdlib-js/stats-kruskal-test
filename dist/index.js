"use strict";var j=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var I=j(function(ur,F){
var A=require('@stdlib/assert-is-array/dist'),W=require('@stdlib/assert-is-number/dist').isPrimitive,z=require('@stdlib/assert-is-plain-object/dist'),G=require('@stdlib/assert-is-nan/dist'),R=require('@stdlib/assert-has-own-property/dist'),T=require('@stdlib/error-tools-fmtprodmsg/dist');function H(a,i){return z(i)?R(i,"alpha")&&(a.alpha=i.alpha,!W(a.alpha)||G(a.alpha))?new TypeError(T('1Lb8P',"alpha",a.alpha)):R(i,"groups")&&(a.groups=i.groups,!A(a.groups))?new TypeError(T('1Lb8Z',"groups",a.groups)):null:new TypeError(T('1Lb2V',i));}F.exports=H
});var C=j(function(or,B){
var J=require('@stdlib/assert-is-positive-integer/dist'),L=require('@stdlib/assert-is-plain-object/dist'),Q=require('@stdlib/assert-is-boolean/dist').isPrimitive,N=require('@stdlib/assert-has-own-property/dist'),S=require('@stdlib/math-base-special-roundn/dist'),k=require('@stdlib/error-tools-fmtprodmsg/dist');function U(a){var i,s,e;if(s=4,i=!0,arguments.length>0){if(!L(a))throw new TypeError(k('1Lb3L',a));if(N(a,"digits")){if(!J(a.digits))throw new TypeError(k('1Lb3P',"digits",a.digits));s=a.digits}if(N(a,"decision")){if(!Q(a.decision))throw new TypeError(k('1Lb2o',"decision",a.decision));i=a.decision}}return e="",e+=this.method,e+="\n\n",e+="Null hypothesis: the medians of all groups are the same",e+="\n\n",e+="    pValue: "+S(this.pValue,-s)+"\n",e+="    statistic: "+S(this.statistic,-s),e+="    df: "+this.df,e+="\n\n",i&&(e+="Test Decision: ",this.rejected?e+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":e+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",e+="\n"),e}B.exports=U
});var M=j(function(lr,K){
var X=require('@stdlib/assert-is-collection/dist'),Y=require('@stdlib/assert-is-plain-object/dist'),g=require('@stdlib/utils-define-read-only-property/dist'),Z=require('@stdlib/utils-count-by/dist'),D=require('@stdlib/utils-keys/dist'),_=require('@stdlib/stats-ranks/dist'),V=require('@stdlib/math-base-special-pow/dist'),$=require('@stdlib/stats-base-dists-chisquare-cdf/dist'),rr=require('@stdlib/utils-identity-function/dist'),er=require('@stdlib/array-base-incrspace/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),ar=I(),ir=C();function tr(){var a,i,s,e,P,h,l,w,x,b,u,y,v,f,o,E,c,t,r,q,m,p,n,O;if(e=arguments.length,u={},Y(arguments[e-1])&&(P=arguments[e-1],e-=1,E=ar(u,P),E))throw E;if(i={},m={},u.groups){if(n=arguments[0],n.length!==u.groups.length)throw new RangeError(d('1Lb9p',"opts.groups"));for(m=Z(u.groups,rr),h=D(m),e=h.length,r=0;r<e;r++)c=h[r],i[c]=0;if(e<2)throw new Error(d('1Lb8W',"groups",h));a=u.groups}else{if(n=[],a=[],e<2)throw new Error(d('1Lb9q',o));for(r=0;r<e;r++){if(o=arguments[r],!X(o))throw new TypeError(d('1Lb8X',o));if(o.length===0)throw new Error(d('1Lb8Y',o));for(m[r]=o.length,i[r]=0,q=0;q<m[r];q++)a.push(r),n.push(o[q])}h=er(0,e,1)}if(u.alpha===void 0?l=.05:l=u.alpha,l<0||l>1)throw new RangeError(d('1Lb9r',"alpha",l));for(p=n.length,x=_(n),f={},r=0;r<p;r++)i[a[r]]+=x[r],n[r]in f?f[n[r]]+=1:f[n[r]]=1;for(v=0,r=0;r<e;r++)c=h[r],v+=V(i[c],2)/m[c];for(v=12/(p*(p+1))*v-3*(p+1),s=0,b=D(f),r=0;r<b.length;r++)O=f[b[r]],s+=V(O,3)-O;return v/=1-s/(V(p,3)-p),w=e-1,y=1-$(v,w),t={},g(t,"rejected",y<=l),g(t,"alpha",l),g(t,"df",w),g(t,"pValue",y),g(t,"statistic",v),g(t,"method","Kruskal-Wallis Test"),g(t,"print",ir),t}K.exports=tr
});var nr=M();module.exports=nr;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
