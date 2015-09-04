var V = Backbone.View.extend({
  el: 'body',
    
    render: function() {
        
        var data = { lon : 153 };
        
        var template = _.template("<%= lon %>")(data);
        this.$el.html(template);    
        
        return this;
    }
});
var v = new V();

v.render();

                    
    
