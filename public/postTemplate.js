(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['post'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"post\" data-price=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":39}}}) : helper)))
    + "\" data-city=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":1,"column":52},"end":{"line":1,"column":60}}}) : helper)))
    + "\" data-condition=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"condition") || (depth0 != null ? lookupProperty(depth0,"condition") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"condition","hash":{},"data":data,"loc":{"start":{"line":1,"column":78},"end":{"line":1,"column":91}}}) : helper)))
    + "\">\r\n    <div class=\"post-contents\">\r\n        <div class=\"post-image-container\">\r\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":4,"column":22},"end":{"line":4,"column":29}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":4,"column":36},"end":{"line":4,"column":44}}}) : helper)))
    + "\">\r\n        </div>\r\n        <div class=\"post-info-container\">\r\n            <a href=\"#\" class=\"post-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":7,"column":43},"end":{"line":7,"column":51}}}) : helper)))
    + "</a> <span class=\"post-price\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":7,"column":81},"end":{"line":7,"column":90}}}) : helper)))
    + "</span> <span class=\"post-city\">("
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":7,"column":123},"end":{"line":7,"column":131}}}) : helper)))
    + ")</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
})();