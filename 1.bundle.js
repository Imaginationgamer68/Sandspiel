(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(e,n,t){"use strict";t.r(n);var r=t(2),i=t(3),o=t(6),a=t(7),u=t(8),c=t(4),s=t.n(c),l=t(10),f=t.n(l);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,n,t){return n&&m(e.prototype,n),t&&m(e,t),e}function x(e,n){return!n||"object"!==v(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,n){return(y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var g=document.getElementById("sand-canvas"),E=function(e,n){return Math.sqrt(Math.pow(e.clientX-n.clientX,2)+Math.pow(e.clientY-n.clientY,2),2)},w=function(e){var n=function(e){return Math.sqrt(Math.pow(e.clientX,2)+Math.pow(e.clientY,2),2)}(e);return{clientX:e.clientX/n,clientY:e.clientY/n}},_=function(e,n){return{clientX:e.clientX*n,clientY:e.clientY*n}},T=function(e,n){return{clientX:e.clientX+n.clientX,clientY:e.clientY+n.clientY}},R=function(e,n){return{clientX:e.clientX-n.clientX,clientY:e.clientY-n.clientY}},S=!1,D=null,b=null;function A(e){b=window.setInterval(function(){return L(e)},100);var n={clientX:e.clientX,clientY:e.clientY};if(S){var t=I[window.UI.state.size],r=0;if(L(n),D)for(;E(n,D)>t/2;){var i=E(n,D);if(n=T(n,_(w(R(D,e)),Math.min(t/2,i))),++r>1e3)break;L(n)}D=e}}g.addEventListener("mousedown",function(e){e.preventDefault(),S=!0,clearInterval(b),b=window.setInterval(function(){return L(e)},100),L(e),D=e}),g.addEventListener("mouseup",function(e){e.preventDefault(),D=null,clearInterval(b),S=!1}),g.addEventListener("mousemove",function(e){clearInterval(b),A(e)}),g.addEventListener("mouseleave",function(e){clearInterval(b),D=null}),g.addEventListener("touchstart",function(e){e.preventDefault(),S=!0,D=e,F(e)}),g.addEventListener("touchend",function(e){e.preventDefault(),D=null,S=!1,clearInterval(b)}),g.addEventListener("touchmove",function(e){e.preventDefault(),clearInterval(b),F(e)});var F=function(e){var n=Array.from(e.touches);1==n.length?A(n[0]):n.forEach(L)},L=function(e){if(S){var n=g.getBoundingClientRect(),t=g.width/window.devicePixelRatio/n.width,r=g.height/window.devicePixelRatio/n.height,i=(e.clientX-n.left)*t,o=(e.clientY-n.top)*r,a=Math.min(Math.floor(i),Z-1),u=Math.min(Math.floor(o),$-1);window.UI.state.selectedElement<0||Q.paint(a,u,I[window.UI.state.size],window.UI.state.selectedElement)}},I=[2,5,10,18,30,45],U=function(e){function n(e){var t;return d(this,n),(t=x(this,h(n).call(this,e))).state={paused:!1,size:2,selectedElement:r.a.Water},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&y(e,n)}(n,s.a.Component),p(n,[{key:"playPause",value:function(){this.state.paused?ue():(cancelAnimationFrame(window.animationId),window.animationId=null),this.setState({paused:!this.state.paused})}},{key:"setSize",value:function(e,n){e.preventDefault(),this.setState({size:n})}},{key:"reset",value:function(){Q.reset()}},{key:"render",value:function(){var e=this,n=this.state,t=(n.size,n.paused),i=n.selectedElement;return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{onClick:function(){return e.reset()}},"Reset"),s.a.createElement("button",{onClick:function(){return e.playPause()}},t?"▶︎":s.a.createElement("svg",{height:"10",width:"10",id:"d",viewBox:"0 0 300 300"},s.a.createElement("polygon",{id:"shape1",points:"0,0 110,0 110,300 0,300"}),s.a.createElement("polygon",{id:"shape2",points:"190,0 300,0 300,300 190,300"}))),t&&s.a.createElement("button",{onClick:function(){return Q.tick()}},"Tick"),s.a.createElement("span",null,I.map(function(n,t){return s.a.createElement("button",{key:t,className:t==e.state.size?"selected":"",onClick:function(n){return e.setSize(n,t)},style:{padding:"0px"}},s.a.createElement("svg",{height:"24",width:"24",id:"d",viewBox:"0 0 100 100"},s.a.createElement("circle",{cx:"50",cy:"50",r:2+n})))})),Object.keys(r.a).map(function(n){return function(e,n,t){var i=r.a[e];return s.a.createElement("button",{className:i==n?"selected":"",key:e,onClick:function(){t(i)}},"  ",e,"  ")}(n,i,function(n){return e.setState({selectedElement:n})})}),s.a.createElement("button",{className:-1==i?"selected":"",key:name,onClick:function(){e.setState({selectedElement:-1})}},"Wind"))}}]),n}();f.a.render(s.a.createElement(U,{ref:function(e){window.UI=e}}),document.getElementById("ui"));var C=new(function(){function e(){d(this,e),this.fps=document.getElementById("fps"),this.frames=[],this.lastFrameTimeStamp=performance.now()}return p(e,[{key:"render",value:function(){var e=performance.now(),n=e-this.lastFrameTimeStamp;this.lastFrameTimeStamp=e;var t=1/n*1e3;this.frames.push(t),this.frames.length>30&&this.frames.shift();for(var r=1/0,i=-1/0,o=0,a=0;a<this.frames.length;a++)o+=this.frames[a],r=Math.min(this.frames[a],r),i=Math.max(this.frames[a],i);var u=o/this.frames.length;this.fps.textContent="\n FPS:".concat(Math.round(u),"\n    ").trim()}}]),e}()),P=t(14),B=t(15),M=t(16),z=t(17),O=t(18),N=t(19),G=t(20),X=t(21),k=t(22),Y=t(23),V=t(24),H=t(25);var j=4;function W(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}window.devicePixelRatio>1&&(j=3);var q=document.getElementById("fluid-canvas"),K=document.getElementById("sand-canvas"),J=(document.getElementById("ui").offsetHeight,[1,1,1]);t.d(n,"renderLoop",function(){return ue}),t.d(n,"canvas",function(){return ee}),t.d(n,"width",function(){return Z}),t.d(n,"height",function(){return $}),t.d(n,"universe",function(){return Q}),t.d(n,"ratio",function(){return j}),window.safari&&(history.pushState(null,null,location.href),window.onpopstate=function(e){history.go(1)});var Q=r.b.new(250,250),Z=Q.width(),$=Q.height(),ee=document.getElementById("sand-canvas"),ne=document.getElementById("fluid-canvas");ee.height=$*window.devicePixelRatio,ee.width=Z*window.devicePixelRatio,document.getElementById("background").addEventListener("touchmove",function(e){e.preventDefault()});var te=document.getElementById("ui"),re=window.innerWidth,ie=te.offsetHeight,oe="";re>window.innerHeight-ie?re-window.innerHeight<225?(oe="height: ".concat(window.innerHeight,"px; margin:3px"),te.style="width: ".concat(re-window.innerHeight-11,"px; margin: 3px;")):(oe="height: ".concat(window.innerHeight,"px"),te.style="width: ".concat((re-window.innerHeight)/2-7,"px; margin: 3px;")):oe="width: ".concat(re,"px; bottom:3px;"),ee.style=oe,ne.style=oe;var ae=function(e){var n=e.universe;q.width=n.width(),q.height=n.height();var t={TEXTURE_DOWNSAMPLE:0,DENSITY_DISSIPATION:.98,VELOCITY_DISSIPATION:.99,PRESSURE_DISSIPATION:.8,PRESSURE_ITERATIONS:25,CURL:30,SPLAT_RADIUS:.005},r=[],o=[],a=function(e){var n,t,r={alpha:!1,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!0},i=e.getContext("webgl2",r),o=!!i;o||(i=e.getContext("webgl",r)||e.getContext("experimental-webgl",r)),o?(i.getExtension("EXT_color_buffer_float"),t=i.getExtension("OES_texture_float_linear")):(n=i.getExtension("OES_texture_half_float"),t=i.getExtension("OES_texture_half_float_linear")),i.clearColor(0,0,0,0);var a,u,c,s=o?i.HALF_FLOAT:n.HALF_FLOAT_OES;return o?(a=w(i,i.RGBA16F,i.RGBA,s),u=w(i,i.RG16F,i.RG,s),c=w(i,i.R16F,i.RED,s)):(a=w(i,i.RGBA,i.RGBA,s),u=w(i,i.RGBA,i.RGBA,s),c=w(i,i.RGBA,i.RGBA,s)),{gl:i,ext:{formatRGBA:a,formatRG:u,formatR:c,halfFloatTexType:s,supportLinearFiltering:t}}}(q),u=a.gl,c=a.ext,s=function(e){function n(n,t){var r=e.createShader(n);if(e.shaderSource(r,t),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw e.getShaderInfoLog(r);return r}return{baseVertexShader:n(e.VERTEX_SHADER,B),clearShader:n(e.FRAGMENT_SHADER,M),displayShader:n(e.FRAGMENT_SHADER,z),splatShader:n(e.FRAGMENT_SHADER,O),advectionManualFilteringShader:n(e.FRAGMENT_SHADER,N),advectionShader:n(e.FRAGMENT_SHADER,G),divergenceShader:n(e.FRAGMENT_SHADER,X),curlShader:n(e.FRAGMENT_SHADER,k),vorticityShader:n(e.FRAGMENT_SHADER,Y),pressureShader:n(e.FRAGMENT_SHADER,V),gradientSubtractShader:n(e.FRAGMENT_SHADER,H)}}(u),l=s.baseVertexShader,f=s.clearShader,v=s.displayShader,d=s.splatShader,m=s.advectionManualFilteringShader,p=s.advectionShader,x=s.divergenceShader,h=s.curlShader,y=s.vorticityShader,g=s.pressureShader,E=s.gradientSubtractShader;function w(e,n,t,r){if(!function(e,n,t,r){var i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,n,4,4,0,t,r,null);var o=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.checkFramebufferStatus(e.FRAMEBUFFER)==e.FRAMEBUFFER_COMPLETE}(e,n,t,r))switch(n){case e.R16F:return w(e,e.RG16F,e.RG,r);case e.RG16F:return w(e,e.RGBA16F,e.RGBA,r);default:return null}return{internalFormat:n,format:t}}function _(){this.id=-1,this.x=0,this.y=0,this.dx=0,this.dy=0,this.down=!1,this.moved=!1,this.color=[30,300,30]}!function(){var e=new P.a({width:300});e.add(t,"TEXTURE_DOWNSAMPLE",{Full:0,Half:1,Quarter:2}).name("resolution").onFinishChange(te),e.add(t,"DENSITY_DISSIPATION",.9,1).name("density diffusion"),e.add(t,"VELOCITY_DISSIPATION",.9,1).name("velocity diffusion"),e.add(t,"PRESSURE_DISSIPATION",0,1).name("pressure diffusion"),e.add(t,"PRESSURE_ITERATIONS",1,60).name("iterations"),e.add(t,"CURL",0,50).name("vorticity").step(1),e.add(t,"SPLAT_RADIUS",1e-4,.01).name("splat radius"),e.add({fun:function(){o.push(parseInt(20*Math.random())+5)}},"fun").name("Random splats"),e.close()}(),r.push(new _);var T,R,S,D,b,A,F,L=function(){function e(n,t){if(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.uniforms={},this.program=u.createProgram(),u.attachShader(this.program,n),u.attachShader(this.program,t),u.linkProgram(this.program),!u.getProgramParameter(this.program,u.LINK_STATUS))throw u.getProgramInfoLog(this.program);for(var r=u.getProgramParameter(this.program,u.ACTIVE_UNIFORMS),i=0;i<r;i++){var o=u.getActiveUniform(this.program,i).name;this.uniforms[o]=u.getUniformLocation(this.program,o)}}return function(e,n,t){n&&W(e.prototype,n),t&&W(e,t)}(e,[{key:"bind",value:function(){u.useProgram(this.program)}}]),e}();te();var I=new L(l,f),U=new L(l,v),C=new L(l,d),j=new L(l,c.supportLinearFiltering?p:m),Q=new L(l,x),Z=new L(l,h),$=new L(l,y),ee=new L(l,g),ne=new L(l,E);function te(){T=u.drawingBufferWidth>>t.TEXTURE_DOWNSAMPLE,R=u.drawingBufferHeight>>t.TEXTURE_DOWNSAMPLE;var e=c.halfFloatTexType,n=c.formatRGBA,r=c.formatRG,i=c.formatR;S=ie(2,T,R,n.internalFormat,n.format,e,c.supportLinearFiltering?u.LINEAR:u.NEAREST),D=ie(0,T,R,r.internalFormat,r.format,e,c.supportLinearFiltering?u.LINEAR:u.NEAREST),b=re(4,T,R,i.internalFormat,i.format,e,u.NEAREST),A=re(5,T,R,i.internalFormat,i.format,e,u.NEAREST),F=ie(6,T,R,i.internalFormat,i.format,e,u.NEAREST)}function re(e,n,t,r,i,o,a){u.activeTexture(u.TEXTURE0+e);var c=u.createTexture();u.bindTexture(u.TEXTURE_2D,c),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,a),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,a),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),u.texImage2D(u.TEXTURE_2D,0,r,n,t,0,i,o,null);var s=u.createFramebuffer();return u.bindFramebuffer(u.FRAMEBUFFER,s),u.framebufferTexture2D(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,c,0),u.viewport(0,0,n,t),u.clear(u.COLOR_BUFFER_BIT),[c,s,e]}function ie(e,n,t,r,i,o,a){var u=re(e,n,t,r,i,o,a),c=re(e+1,n,t,r,i,o,a);return{get read(){return u},get write(){return c},swap:function(){var e=u;u=c,c=e}}}var oe=(u.bindBuffer(u.ARRAY_BUFFER,u.createBuffer()),u.bufferData(u.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),u.STATIC_DRAW),u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,u.createBuffer()),u.bufferData(u.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),u.STATIC_DRAW),u.vertexAttribPointer(0,2,u.FLOAT,!1,0,0),u.enableVertexAttribArray(0),function(e){u.bindFramebuffer(u.FRAMEBUFFER,e),u.drawElements(u.TRIANGLES,6,u.UNSIGNED_SHORT,0)}),ae=Date.now();ve(parseInt(20*Math.random())+5);var ue=n.winds(),ce=n.width(),se=n.height(),le=new Float32Array(i.d.buffer,ue,ce*se*4);function fe(e,n,t,r,i){C.bind(),u.uniform1i(C.uniforms.uTarget,D.read[2]),u.uniform1f(C.uniforms.aspectRatio,q.width/q.height),u.uniform2f(C.uniforms.point,e/q.width,1-n/q.height),u.uniform3f(C.uniforms.color,t,-r,1),u.uniform1f(C.uniforms.radius,(window.UI.state.size+1)/700),oe(D.write[1]),D.swap(),u.uniform1i(C.uniforms.uTarget,S.read[2]),u.uniform3f(C.uniforms.color,i[0],i[1],i[2]),oe(S.write[1]),S.swap()}function ve(e){for(var n=0;n<e;n++){var t=J;fe(q.width*Math.random(),q.height*Math.random(),1e3*(Math.random()-.5),1e3*(Math.random()-.5),t)}}var de=K.getBoundingClientRect(),me=K.width/window.devicePixelRatio/de.width,pe=K.height/window.devicePixelRatio/de.height;return K.addEventListener("mousemove",function(e){var n=(e.clientX-de.left)*me,t=(e.clientY-de.top)*pe;r[0].moved=r[0].down,r[0].dx=10*(n-r[0].x),r[0].dy=10*(t-r[0].y),r[0].x=n,r[0].y=t}),K.addEventListener("touchmove",function(e){e.preventDefault();for(var n=e.targetTouches,t=0;t<n.length;t++){var i=r[t];i.moved=i.down;var o=(n[t].clientX-de.left)*me,a=(n[t].clientY-de.top)*pe;i.dx=10*(o-i.x),i.dy=10*(a-i.y),i.x=o,i.y=a}},!1),K.addEventListener("mousedown",function(){r[0].down=!0,r[0].color=J}),K.addEventListener("touchstart",function(e){e.preventDefault();for(var n=e.targetTouches,t=0;t<n.length;t++){t>=r.length&&r.push(new _);var i=(n[t].clientX-de.left)*me,o=(n[t].clientY-de.top)*pe;r[t].id=n[t].identifier,r[t].down=!0,r[t].x=i,r[t].y=o,r[t].color=J}}),window.addEventListener("mouseup",function(){r[0].down=!1}),window.addEventListener("touchend",function(e){for(var n=e.changedTouches,t=0;t<n.length;t++)for(var i=0;i<r.length;i++)n[t].identifier==r[i].id&&(r[i].down=!1)}),function(){var e=Math.min((Date.now()-ae)/1e3,.016);ae=Date.now(),u.viewport(0,0,T,R),o.length>0&&ve(o.pop()),j.bind(),u.uniform2f(j.uniforms.texelSize,1/T,1/R),u.uniform1i(j.uniforms.uVelocity,D.read[2]),u.uniform1i(j.uniforms.uSource,D.read[2]),u.uniform1f(j.uniforms.dt,e),u.uniform1f(j.uniforms.dissipation,t.VELOCITY_DISSIPATION),oe(D.write[1]),D.swap(),u.uniform1i(j.uniforms.uVelocity,D.read[2]),u.uniform1i(j.uniforms.uSource,S.read[2]),u.uniform1f(j.uniforms.dissipation,t.DENSITY_DISSIPATION),oe(S.write[1]),S.swap();for(var n=0;n<r.length;n++){var i=r[n];i.moved&&window.UI.state.selectedElement<0&&(fe(i.x,i.y,i.dx,i.dy,i.color),i.moved=!1)}Z.bind(),u.uniform2f(Z.uniforms.texelSize,1/T,1/R),u.uniform1i(Z.uniforms.uVelocity,D.read[2]),oe(A[1]),$.bind(),u.uniform2f($.uniforms.texelSize,1/T,1/R),u.uniform1i($.uniforms.uVelocity,D.read[2]),u.uniform1i($.uniforms.uCurl,A[2]),u.uniform1f($.uniforms.curl,t.CURL),u.uniform1f($.uniforms.dt,e),oe(D.write[1]),D.swap(),Q.bind(),u.uniform2f(Q.uniforms.texelSize,1/T,1/R),u.uniform1i(Q.uniforms.uVelocity,D.read[2]),oe(b[1]),I.bind();var a=F.read[2];u.activeTexture(u.TEXTURE0+a),u.bindTexture(u.TEXTURE_2D,F.read[0]),u.uniform1i(I.uniforms.uTexture,a),u.uniform1f(I.uniforms.value,t.PRESSURE_DISSIPATION),oe(F.write[1]),F.swap(),ee.bind(),u.uniform2f(ee.uniforms.texelSize,1/T,1/R),u.uniform1i(ee.uniforms.uDivergence,b[2]),a=F.read[2],u.uniform1i(ee.uniforms.uPressure,a),u.activeTexture(u.TEXTURE0+a);for(var s=0;s<t.PRESSURE_ITERATIONS;s++)u.bindTexture(u.TEXTURE_2D,F.read[0]),oe(F.write[1]),F.swap();ne.bind(),u.uniform2f(ne.uniforms.texelSize,1/T,1/R),u.uniform1i(ne.uniforms.uPressure,F.read[2]),u.uniform1i(ne.uniforms.uVelocity,D.read[2]),oe(D.write[1]),u.readPixels(0,0,ce,se,c.formatRGBA.format,u.FLOAT,le),D.swap(),u.viewport(0,0,u.drawingBufferWidth,u.drawingBufferHeight),U.bind(),u.uniform1i(U.uniforms.uTexture,S.read[2]),oe(null)}}({universe:Q}),ue=function e(){C.render(),Q.tick(),ae(),window.animationId=requestAnimationFrame(e)};!function(e){var n=e.canvas,t=e.universe,r=o({canvas:n}),c=r.texture(),s=t.cells(),l=t.width(),f=t.height(),v=new Uint8Array(i.d.buffer,s,l*f*4),d=r.texture({width:l,height:f,data:v}),m=r({frag:a,uniforms:{t:function(e){return e.tick},data:function(){return d({width:l,height:f,data:v})},resolution:function(e){return[e.viewportWidth,e.viewportHeight]},dpi:2*window.devicePixelRatio,backBuffer:c},vert:u,attributes:{position:[[-1,4],[-1,-1],[4,-1]]},count:3});r.frame(function(e){m()})}({canvas:ee,universe:Q}),ue()},function(e,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"c",function(){return s}),t.d(n,"b",function(){return l}),t.d(n,"d",function(){return m});var r=t(3);function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}var u=Object.freeze({Empty:0,Wall:1,Powder:2,Water:3,Gas:4,Clone:5,Fire:6,Wood:7,Lava:8,Ice:9,Sink:10,Plant:11,Acid:12,Stone:13,Dust:14,Mite:15}),c=Math.random.bind(Math)||function(){throw new Error("wasm-bindgen: Math.random.bind(Math) does not exist")};function s(){return c()}var l=function(){function e(){i(this,e)}return a(e,[{key:"free",value:function(){var e=this.ptr;this.ptr=0,function(e){r.b(e)}(e)}},{key:"reset",value:function(){return r.i(this.ptr)}},{key:"tick",value:function(){return r.j(this.ptr)}},{key:"width",value:function(){return r.k(this.ptr)}},{key:"height",value:function(){return r.f(this.ptr)}},{key:"cells",value:function(){return r.e(this.ptr)}},{key:"winds",value:function(){return r.l(this.ptr)}},{key:"paint",value:function(e,n,t,i){return r.h(this.ptr,e,n,t,i)}}],[{key:"__wrap",value:function(n){var t=Object.create(e.prototype);return t.ptr=n,t}},{key:"new",value:function(n,t){return e.__wrap(r.g(n,t))}}]),e}();var f=new TextDecoder("utf-8"),v=null;function d(e,n){return f.decode((null!==v&&v.buffer===r.d.buffer||(v=new Uint8Array(r.d.buffer)),v).subarray(e,e+n))}function m(e,n){throw new Error(d(e,n))}},function(e,n,t){"use strict";var r=t.w[e.i];e.exports=r;t(2);r.m()},,,,function(e,n){e.exports="precision highp float;\n#define GLSLIFY 1\nuniform float t;\nuniform float dpi;\nuniform vec2 resolution;\nuniform sampler2D backBuffer;\nuniform sampler2D data;\n\nvarying vec2 uv;\n\n// clang-format off\nvec3 hsv2rgb_3_0(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\n\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_1(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1_1(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1_2(vec4 x) {\n     return mod289_1_1(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1_3(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1_4(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_1_5 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_1_6 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_1_6;\n  vec3 i1 = min( g_1_6.xyz, l.zxy );\n  vec3 i2 = max( g_1_6.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_1_5.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1_1(i);\n  vec4 p = permute_1_2( permute_1_2( permute_1_2(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_1_5.wyz - D_1_5.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_1_7 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1_8 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_1_7.xy,h.z);\n  vec3 p3 = vec3(a1_1_7.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1_3(vec4(dot(p0_1_8,p0_1_8), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1_8 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1_8,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_2_9(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_2_9(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute_2_10(vec3 x) {\n  return mod289_2_9(((x*34.0)+1.0)*x);\n}\n\nfloat snoise_2_11(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289_2_9(i); // Avoid truncation effects in permutation\n  vec3 p = permute_2_10( permute_2_10( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n\n\nhighp float random_4_12(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\n\n\n// clang-format on\n\nvoid main() {\n  vec3 color;\n  //   float r = abs(sin(t / 25.));\n  //   if (length(uv) < r && length(uv) > r - 0.1) {\n  // color = hsv2rgb(vec3(sin(t * 0.01), 0.5, 0.5));\n\n  vec2 textCoord = (uv * vec2(0.5, -0.5)) + vec2(0.5);\n  vec4 data = texture2D(data, textCoord);\n  int type = int((data.r * 255.) + 0.1);\n  float hue = 0.0;\n  float saturation = 0.6;\n  float lightness = 0.3 + data.g * 0.5;\n  float noise = snoise_1_4(vec3(floor(uv * resolution / dpi), t * 0.05));\n  float a = 1.0;\n\n  if (type == 0) {\n    hue = 0.1;\n    saturation = 0.1;\n    lightness = 0.1;\n    a = 0.1;\n  } else if (type == 1) {\n    hue = 0.1;\n    saturation = 0.1;\n    lightness = 0.4;\n  } else if (type == 2) {\n    hue = 0.1;\n  } else if (type == 3) { // water\n    hue = 0.6;\n    lightness = 0.7 + data.g * 0.25 + noise * 0.1;\n  } else if (type == 4) {\n    hue = 0.5;\n    saturation = 0.5;\n  } else if (type == 5) { // clone\n    hue = 0.9;\n    saturation = 0.3;\n  } else if (type == 6) { // fire\n    hue = (data.g * 0.1);\n    lightness = 0.8 + data.g * 0.3 + noise * 0.1;\n  } else if (type == 7) { // wood\n    hue = (data.g * 0.1);\n    saturation = 0.3;\n    lightness = 0.3 + data.g * 0.3;\n  } else if (type == 8) { // lava\n    hue = (data.g * 0.1);\n    lightness = 0.7 + data.g * 0.25 + noise * 0.1;\n  } else if (type == 9) { // ice\n    hue = 0.6;\n    saturation = 0.4;\n    lightness = 0.7 + data.g * 0.5;\n  } else if (type == 10) { // sink\n    hue = 0.9;\n    saturation = 0.4;\n    lightness = 1.0;\n  } else if (type == 11) { // plant\n    hue = 0.4;\n    saturation = 0.4;\n  } else if (type == 12) { // acid\n    hue = 0.18;\n    saturation = 0.9;\n    lightness = 0.8 + data.g * 0.2 + noise * 0.05;\n  } else if (type == 13) { // stone\n    hue = 0.9;\n    saturation = 0.1;\n    // lightness = 0.2 + data.g * 0.5;\n  } else if (type == 14) { // dust\n    hue = (data.g * 1.5) + t * .0008;\n    saturation = 0.5;\n    lightness = 0.8;\n  } else if (type == 15) { // mite\n    hue = 0.8;\n    saturation = 0.3;\n    lightness = 0.8;\n  }\n  lightness *= (0.95 + snoise_2_11(floor(uv * resolution / dpi)) * 0.05);\n\n  color = hsv2rgb_3_0(vec3(hue, saturation, lightness));\n  gl_FragColor = vec4(color, a);\n}"},function(e,n){e.exports='\n// boring "pass-through" vertex shader\nprecision mediump float;\n#define GLSLIFY 1\nattribute vec2 position;\nvarying vec2 uv;\nvoid main() {\n  uv = position;\n  gl_Position = vec4(position, 0, 1);\n}'},,,,,,,function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\nuniform vec2 texelSize;\nvoid main() {\n  vUv = aPosition * 0.5 + 0.5;\n  vL = vUv - vec2(texelSize.x, 0.0);\n  vR = vUv + vec2(texelSize.x, 0.0);\n  vT = vUv + vec2(0.0, texelSize.y);\n  vB = vUv - vec2(0.0, texelSize.y);\n  gl_Position = vec4(aPosition, 0.0, 1.0);\n}\n"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nuniform sampler2D uTexture;\nuniform float value;\nvoid main() { gl_FragColor = value * texture2D(uTexture, vUv); }"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nuniform sampler2D uTexture;\nvoid main() {\n  vec3 color = texture2D(uTexture, vUv).rgb * 0.1;\n  color = min(color, 0.9);\n  color = vec3(1.0) - color;\n  color *= vec3(0.95, 0.9, 0.9);\n  gl_FragColor = vec4(color, 1.0);\n}\n"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nuniform sampler2D uTarget;\nuniform float aspectRatio;\nuniform vec3 color;\nuniform vec2 point;\nuniform float radius;\nvoid main() {\n  vec2 p = vUv - point.xy;\n  p.x *= aspectRatio;\n  vec3 splat = exp(-dot(p, p) / radius) * color;\n  vec3 base = texture2D(uTarget, vUv).xyz;\n  gl_FragColor = vec4(base + splat, 1.0);\n}"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nuniform sampler2D uVelocity;\nuniform sampler2D uSource;\nuniform vec2 texelSize;\nuniform float dt;\nuniform float dissipation;\nvec4 bilerp(in sampler2D sam, in vec2 p) {\n  vec4 st;\n  st.xy = floor(p - 0.5) + 0.5;\n  st.zw = st.xy + 1.0;\n  vec4 uv = st * texelSize.xyxy;\n  vec4 a = texture2D(sam, uv.xy);\n  vec4 b = texture2D(sam, uv.zy);\n  vec4 c = texture2D(sam, uv.xw);\n  vec4 d = texture2D(sam, uv.zw);\n  vec2 f = p - st.xy;\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\nvoid main() {\n  vec2 coord = gl_FragCoord.xy - dt * texture2D(uVelocity, vUv).xy;\n  gl_FragColor = dissipation * bilerp(uSource, coord);\n  gl_FragColor.a = 1.0;\n}"},function(e,n){e.exports="\nprecision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nuniform sampler2D uVelocity;\nuniform sampler2D uSource;\nuniform vec2 texelSize;\nuniform float dt;\nuniform float dissipation;\nvoid main() {\n  vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n  gl_FragColor = dissipation * texture2D(uSource, coord);\n  gl_FragColor.a = 1.0;\n}\n"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\nuniform sampler2D uVelocity;\nvec2 sampleVelocity(in vec2 uv) {\n  vec2 multiplier = vec2(1.0, 1.0);\n  if (uv.x < 0.0) {\n    uv.x = 0.0;\n    multiplier.x = -1.0;\n  }\n  if (uv.x > 1.0) {\n    uv.x = 1.0;\n    multiplier.x = -1.0;\n  }\n  if (uv.y < 0.0) {\n    uv.y = 0.0;\n    multiplier.y = -1.0;\n  }\n  if (uv.y > 1.0) {\n    uv.y = 1.0;\n    multiplier.y = -1.0;\n  }\n  return multiplier * texture2D(uVelocity, uv).xy;\n}\nvoid main() {\n  float L = sampleVelocity(vL).x;\n  float R = sampleVelocity(vR).x;\n  float T = sampleVelocity(vT).y;\n  float B = sampleVelocity(vB).y;\n  float div = 0.5 * (R - L + T - B);\n  gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n}\n"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\nuniform sampler2D uVelocity;\nvoid main() {\n  float L = texture2D(uVelocity, vL).y;\n  float R = texture2D(uVelocity, vR).y;\n  float T = texture2D(uVelocity, vT).x;\n  float B = texture2D(uVelocity, vB).x;\n  float vorticity = R - L - T + B;\n  gl_FragColor = vec4(vorticity, 0.0, 0.0, 1.0);\n}"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec2 vT;\nvarying vec2 vB;\nuniform sampler2D uVelocity;\nuniform sampler2D uCurl;\nuniform float curl;\nuniform float dt;\nvoid main() {\n  float T = texture2D(uCurl, vT).x;\n  float B = texture2D(uCurl, vB).x;\n  float C = texture2D(uCurl, vUv).x;\n  vec2 force = vec2(abs(T) - abs(B), 0.0);\n  force *= 1.0 / length(force + 0.00001) * curl * C;\n  vec2 vel = texture2D(uVelocity, vUv).xy;\n  gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n}"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\nuniform sampler2D uPressure;\nuniform sampler2D uDivergence;\nvec2 boundary(in vec2 uv) {\n  uv = min(max(uv, 0.0), 1.0);\n  return uv;\n}\nvoid main() {\n  float L = texture2D(uPressure, boundary(vL)).x;\n  float R = texture2D(uPressure, boundary(vR)).x;\n  float T = texture2D(uPressure, boundary(vT)).x;\n  float B = texture2D(uPressure, boundary(vB)).x;\n  float C = texture2D(uPressure, vUv).x;\n  float divergence = texture2D(uDivergence, vUv).x;\n  float pressure = (L + R + B + T - divergence) * 0.25;\n  gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n}"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\nuniform sampler2D uPressure;\nuniform sampler2D uVelocity;\nvec2 boundary(in vec2 uv) {\n  uv = min(max(uv, 0.0), 1.0);\n  return uv;\n}\nvoid main() {\n  float L = texture2D(uPressure, boundary(vL)).x;\n  float R = texture2D(uPressure, boundary(vR)).x;\n  float T = texture2D(uPressure, boundary(vT)).x;\n  float B = texture2D(uPressure, boundary(vB)).x;\n  vec2 velocity = texture2D(uVelocity, vUv).xy;\n  velocity.xy -= vec2(R - L, T - B);\n  gl_FragColor = vec4(velocity, 0.0, 1.0);\n}"}]]);