(function(){var t;t=function($,t){var e;return e=this,this.$field=t,this.$opener=t.find(".opener-button"),this.$button=t.find(".opener-button a"),this.$text=t.find(".opener-button a span"),this.$download=t.find(".opener-button a.opener-download"),this.useDownloadLink=this.$opener.hasClass("download"),this.delay=parseInt(this.$opener.attr("data-delay")),this.jsoncode=String(this.$opener.attr("data-jsoncode")),this.jsonmessage=String(this.$opener.attr("data-jsonmessage")),this.jsonfileurl=String(this.$opener.attr("data-jsonfileurl")),this.l={default:this.$text.attr("data-textdefault"),progress:this.$text.attr("data-textprogress"),success:this.$text.attr("data-textsuccess"),error:this.$text.attr("data-texterror")},this.parseResult=function(t){200===t[this.jsoncode]?e.hasSuccess(t[this.jsonmessage],t[this.jsonfileurl]):e.hasError(t.error,t[this.jsonmessage])},this.hasError=function(t,n){void 0===n&&(n=e.l.error),void 0!==n&&0!==n.length||(n=t),e.$button.addClass("btn-negative").children("span").text(n),setTimeout(function(){return e.$button.removeClass("btn-negative"),e.$button.children("span").text(e.l.default),e.$download.attr("href",""),e.$download.attr("download","")},e.delay)},this.hasSuccess=function(t,n){var s;void 0===t&&(t=e.l.success),e.$button.addClass("btn-positive"),e.$button.children("span").text(t),void 0!==n&&n.trim().length>0&&(e.useDownloadLink?(s=n.split("/").pop(),e.$download.attr("href",n),e.$download.attr("download",s),e.$download[0].click()):window.open(n)),setTimeout(function(){return e.$button.removeClass("btn-positive"),e.$button.children("span").text(e.l.default),e.$download.attr("href",""),e.$download.attr("download","")},e.delay)},this.init=function(){},this.$field.find("a.opener").click(function(t){var n;t.preventDefault(),e.$opener.hasClass("no-ajax")?window.open(e.$button.attr("href")):(n=$(this).attr("name"),$.fn.OpenerAjax(e,$(this).attr("href")+"/panel:1"))}),this.init()},function($){return $.fn.OpenerAjax=function(t,e){void 0!==t.$field&&(t.$field.hasClass("ajax")||(t.$field.addClass("ajax"),document.body.style.cursor="wait",t.$button.children("span").text(t.l.progress),$.ajax({url:e,type:"GET",success:function(e){return t.parseResult(e)},error:function(e,n,s){return t.hasError(n+s)},complete:function(){return t.$field.removeClass("ajax"),document.body.style.cursor="default"}})))},$.fn.opener=function(){return new t($,this)}}(jQuery)}).call(this);