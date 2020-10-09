// The MIT License (MIT)

// Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



!function($){"use strict";var Typed=function(el,options){this.el=$(el);this.options=$.extend({},$.fn.typed.defaults,options);this.isInput=this.el.is('input');this.attr=this.options.attr;this.showCursor=this.isInput?false:this.options.showCursor;this.elContent=this.attr?this.el.attr(this.attr):this.el.text()
this.contentType=this.options.contentType;this.typeSpeed=this.options.typeSpeed;this.startDelay=this.options.startDelay;this.backSpeed=this.options.backSpeed;this.backDelay=this.options.backDelay;this.strings=this.options.strings;this.strPos=0;this.arrayPos=0;this.stopNum=0;this.loop=this.options.loop;this.loopCount=this.options.loopCount;this.curLoop=0;this.stop=false;this.cursorChar=this.options.cursorChar;this.shuffle=this.options.shuffle;this.sequence=[];this.build();};Typed.prototype={constructor:Typed,init:function(){var self=this;self.timeout=setTimeout(function(){for(var i=0;i<self.strings.length;++i)self.sequence[i]=i;if(self.shuffle)self.sequence=self.shuffleArray(self.sequence);self.typewrite(self.strings[self.sequence[self.arrayPos]],self.strPos);},self.startDelay);},build:function(){if(this.showCursor===true){this.cursor=$("<span class=\"typed-cursor\">"+this.cursorChar+"</span>");this.el.after(this.cursor);}
this.init();},typewrite:function(curString,curStrPos){if(this.stop===true){return;}
var humanize=Math.round(Math.random()*(100-30))+this.typeSpeed;var self=this;self.timeout=setTimeout(function(){var charPause=0;var substr=curString.substr(curStrPos);if(substr.charAt(0)==='^'){var skip=1;if(/^\^\d+/.test(substr)){substr=/\d+/.exec(substr)[0];skip+=substr.length;charPause=parseInt(substr);}
curString=curString.substring(0,curStrPos)+curString.substring(curStrPos+skip);}
if(self.contentType==='html'){var curChar=curString.substr(curStrPos).charAt(0)
if(curChar==='<'||curChar==='&'){var tag='';var endTag='';if(curChar==='<'){endTag='>'}else{endTag=';'}
while(curString.substr(curStrPos).charAt(0)!==endTag){tag+=curString.substr(curStrPos).charAt(0);curStrPos++;}
curStrPos++;tag+=endTag;}}
self.timeout=setTimeout(function(){if(curStrPos===curString.length){self.options.onStringTyped(self.arrayPos);if(self.arrayPos===self.strings.length-1){self.options.callback();self.curLoop++;if(self.loop===false||self.curLoop===self.loopCount)
return;}
self.timeout=setTimeout(function(){self.backspace(curString,curStrPos);},self.backDelay);}else{if(curStrPos===0)
self.options.preStringTyped(self.arrayPos);var nextString=curString.substr(0,curStrPos+1);if(self.attr){self.el.attr(self.attr,nextString);}else{if(self.isInput){self.el.val(nextString);}else if(self.contentType==='html'){self.el.html(nextString);}else{self.el.text(nextString);}}
curStrPos++;self.typewrite(curString,curStrPos);}},charPause);},humanize);},backspace:function(curString,curStrPos){if(this.stop===true){return;}
var humanize=Math.round(Math.random()*(100-30))+this.backSpeed;var self=this;self.timeout=setTimeout(function(){if(self.contentType==='html'){if(curString.substr(curStrPos).charAt(0)==='>'){var tag='';while(curString.substr(curStrPos).charAt(0)!=='<'){tag-=curString.substr(curStrPos).charAt(0);curStrPos--;}
curStrPos--;tag+='<';}}
var nextString=curString.substr(0,curStrPos);if(self.attr){self.el.attr(self.attr,nextString);}else{if(self.isInput){self.el.val(nextString);}else if(self.contentType==='html'){self.el.html(nextString);}else{self.el.text(nextString);}}
if(curStrPos>self.stopNum){curStrPos--;self.backspace(curString,curStrPos);}
else if(curStrPos<=self.stopNum){self.arrayPos++;if(self.arrayPos===self.strings.length){self.arrayPos=0;if(self.shuffle)self.sequence=self.shuffleArray(self.sequence);self.init();}else
self.typewrite(self.strings[self.sequence[self.arrayPos]],curStrPos);}},humanize);},shuffleArray:function(array){var tmp,current,top=array.length;if(top)while(--top){current=Math.floor(Math.random()*(top+1));tmp=array[current];array[current]=array[top];array[top]=tmp;}
return array;},reset:function(){var self=this;clearInterval(self.timeout);var id=this.el.attr('id');this.el.after('<span id="'+id+'"/>')
this.el.remove();if(typeof this.cursor!=='undefined'){this.cursor.remove();}
self.options.resetCallback();}};$.fn.typed=function(option){return this.each(function(){var $this=$(this),data=$this.data('typed'),options=typeof option=='object'&&option;if(!data)$this.data('typed',(data=new Typed(this,options)));if(typeof option=='string')data[option]();});};$.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],typeSpeed:0,startDelay:0,backSpeed:0,shuffle:false,backDelay:500,loop:false,loopCount:false,showCursor:true,cursorChar:"|",attr:null,contentType:'html',callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}};}(window.jQuery);