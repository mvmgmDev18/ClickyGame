(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Balrog.222fcdaa.png"},function(e,t,a){e.exports=a.p+"static/media/Blanka.f605dedc.png"},function(e,t,a){e.exports=a.p+"static/media/ChunLi.fc3ce4ab.png"},function(e,t,a){e.exports=a.p+"static/media/Dhalsim.3b8562c7.png"},function(e,t,a){e.exports=a.p+"static/media/Ehonda.5f7e83e7.png"},function(e,t,a){e.exports=a.p+"static/media/Guile.6d4874e7.png"},function(e,t,a){e.exports=a.p+"static/media/Ken.9d40fc9d.png"},function(e,t,a){e.exports=a.p+"static/media/MBison.a295bc53.png"},function(e,t,a){e.exports=a.p+"static/media/Ryu.5fdf4e54.png"},function(e,t,a){e.exports=a.p+"static/media/Sagat.79c1e1b5.png"},function(e,t,a){e.exports=a.p+"static/media/Vega.986d4875.png"},function(e,t,a){e.exports=a.p+"static/media/Zangief.271431ae.png"},,,function(e,t,a){e.exports=a(39)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),s=a.n(r),i=a(4),o=a(5),l=a(19),u=a(6),h=a(20),f=a(1),p=(a(27),function(e){return c.a.createElement("div",{className:"navbar "},c.a.createElement("div",null,"Street Fighter II Clicky Game"),c.a.createElement("div",{className:e.navMsgColor},e.navMessage),c.a.createElement("div",null,"Score: ",e.score," ",c.a.createElement("span",{className:"pipe"},"|")," High Score: ",e.highScore))}),d=(a(29),a(31),function(e){return c.a.createElement("div",{className:"card",onClick:function(t){return e.clickEvent(t.target.src)}},c.a.createElement("img",{className:"card-img-top card-height",src:e.name,alt:""}))}),m=function(e){return c.a.createElement("div",{className:e.shake?"container d-flex flex-wrap justify-content-center shake":"container d-flex flex-wrap justify-content-center"},e.characters.map(function(t,a){return c.a.createElement(d,{name:t,key:a,clickEvent:e.clickEvent})}))},g=(a(33),function(){return c.a.createElement("div",{className:"footer text-center"},"\xa9 Copyright 2018 Michael Sayson")}),v=(a(35),function(){return c.a.createElement("div",{className:"banner text-center d-flex align-items-center justify-content-center"},c.a.createElement("p",{className:"m-0"},"Click on an image to earn points, but don't click on any more than once!"))}),k=a(7),C=a.n(k),E=a(8),x=a.n(E),y=a(9),b=a.n(y),M=a(10),w=a.n(M),S=a(11),j=a.n(S),N=a(12),O=a.n(N),A=a(13),B=a.n(A),I=a(14),G=a.n(I),J=a(15),D=a.n(J),F=a(16),H=a.n(F),K=a(17),L=a.n(K),R=a(18),T=a.n(R),V=[C.a,x.a,b.a,w.a,j.a,O.a,B.a,G.a,D.a,H.a,L.a,T.a],Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={score:0,highScore:0,navMsgColor:"",navMessage:"Click an image to start!",allCharacters:a.shuffleArray(),wasClicked:[],shake:!1},a.clickEvent=a.checkClicked.bind(Object(f.a)(Object(f.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"shuffleArray",value:function(){for(var e=V.slice(),t=[];e.length>0;)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);return t}},{key:"checkClicked",value:function(e){var t=this,a=this.state.wasClicked.slice(),n=this.shuffleArray(),c=this.state.score,r=this.state.highScore;if(this.state.wasClicked.includes(e)||(c===r?(c++,r++):c++,a.push(e)),this.state.wasClicked.includes(e)){return this.setState({score:0,highScore:r,navMsgColor:"incorrect",navMessage:"Incorrect guess!",allCharacters:n,wasClicked:[],shake:!0})}return this.setState({score:c,highScore:r,navMsgColor:"correct",navMessage:"You Guessed Correctly!",allCharacters:n,wasClicked:a,shake:!1}),setTimeout(function(){return t.setState({navMsgColor:""})},500)}},{key:"render",value:function(){var e=this.state;return c.a.createElement("div",null,c.a.createElement(p,{score:e.score,highScore:e.highScore,navMessage:e.navMessage,navMsgColor:e.navMsgColor}),c.a.createElement(v,null),c.a.createElement(m,{shake:e.shake,characters:e.allCharacters,clickEvent:this.clickEvent}),c.a.createElement(g,null))}}]),t}(n.Component);a(37);s.a.render(c.a.createElement(Y,null),document.getElementById("root"))}],[[21,2,1]]]);
//# sourceMappingURL=main.cf048d7d.chunk.js.map