(function () {
    
    var Rectangle = Backbone.Model.extend({});
    
    var RectangleView = Backbone.View.extend({
        tagName: "div",
        className: "rectangle",
        
        events: {
          'click':'shine'
            
        },
        
        shine: function() {
            this.$el.css('background-color',"red");   
            
        },
            
        
        render : function() {
         this.setDimension();   
         return this;
        },
        
        setDimension : function() {
        this.$el.css({
            width: this.model.get("width")+"px",
            height: this.model.get("height")+"px",
            left: this.model.get("position").x + "px",
            right: this.model.get("position").y +"px",
            position: "absolute",
            border: "4px black solid"
        });
    }
    });
    
    var rectangle = new Rectangle({
        width: "500",
        height: "200",
        position: {
            'x' :200,
            'y' :200
            
        }
    });
    
    var rectangleview = new RectangleView({ model: rectangle });
    $("#rectangle").append(rectangleview.render().el);
    
    
    
})();