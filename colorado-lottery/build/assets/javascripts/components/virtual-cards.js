"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),VirtualCards=function(){function e(){var t=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];_classCallCheck(this,e),this.$el=$(t.el),this.$el.css({perspective:"500px"}),this.$cards=this.$el.find(".card"),this.magnitude=3,$(document).on("mousemove",this.onMouseMove.bind(this))}return _createClass(e,[{key:"onMouseMove",value:function(e){var t=e.clientY/window.innerHeight*this.magnitude,n=e.clientX/window.innerWidth*this.magnitude;this.$cards.css({transform:"rotateX("+(t-this.magnitude/2)+"deg) rotateY("+-1*(n-this.magnitude/2)+"deg)"})}}]),e}();Bindable.register("virtual-cards",VirtualCards);