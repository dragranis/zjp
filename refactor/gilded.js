class Item {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }


  
  var shop_items = [
      new Item("+5 Dexterity Vest",10,20),
      new Item("Aged Brie",2,0),
      new Item("Elixir of the Mongoose",5,7),
      new Item("Sulfuras, Hand of Ragnaros",0,80),
      new Item("Sulfuras, Hand of Ragnaros",-1,80),
      new Item("Backstage passes to a TAFKAL80ETC concert",15,20),
      new Item("Backstage passes to a TAFKAL80ETC concert",10,49),
      new Item("Backstage passes to a TAFKAL80ETC concert",5,49),
      new Item("Conjured Mana Cake",12,50)
  ]
  
  
  class Shop {
    constructor(items=[]){
      this.items = items;
    }
      
     backstage_value(product){
         if(product.sellIn<=10)   return -2;
         if(product.sellIn<=5) return -3;
         if(product.sellIn<0) return 0;
     }
      
    changed_by(product){
        let value = 1;
        if(this.days_passed(product)) value++;
        if(this.is_increasing_quality(product)) value*=-1;
        if(this.is_backstage(product)) value = this.backstage_value(product);
        if(this.is_conjured(product)) value*=2;
    }
    
    days_passed(product){
        return product.sellIn && product.sellIn>=0;      
    }
      
    change_quality(product){
        product.quality-=this.changed_by(product);
    }
      
    is_negative(product){
       (product.quality<0) ? product.quality = 0 : null;   
    }
    
    is_maximum(product){
        (product.quality<=50) ? null : product.quality=50;
    }
      
    is_legendary(product){
        return product.name.includes("Sulfuras");   
    }
      
    is_conjured(product){
        return product.name.includes("Conjured");
    }
    
    is_increasing_quality(product){
        return product.name.includes("Brie") || product.name.includes("Backstage");
    }
      
      
     update(days){
        for(var i=1;i<=days;i++){
            document.writeln("Day: "+i+"<br/>");
            for(var j in this.items){
               document.writeln(this.items[j].name+","+this.items[j].sellIn+","+this.items[j].quality+"<br/>");
                this.change_quality(this.items[j]);
            }
        }
     }
  }
  
  
  
  var sklep = new Shop(shop_items);
