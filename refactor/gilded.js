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
    updateQuality() {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].quality > 0) {
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
              this.items[i].quality = this.items[i].quality - 1;
            }
            if(this.items[i].name.includes("Conjured")){
                this.items[i].quality--;
            }
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].sellIn < 11) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
              if (this.items[i].sellIn < 6) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
            }
          }
        }
        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].sellIn = this.items[i].sellIn - 1;
        }
        if (this.items[i].sellIn < 0) {
          if (this.items[i].name != 'Aged Brie') {
            if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].quality > 0) {
                if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                  this.items[i].quality = this.items[i].quality - 1;
                }
                if(this.items[i].name.includes("Conjured")){
                    this.items[i].quality--;
                }
              }
            } else {
              this.items[i].quality = this.items[i].quality - this.items[i].quality;
            }
          } else {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
        }
      }
  
      return this.items;
    }
    
    write_items(wanted_days){
        
        var name, quality, sellin;
        var day = 0;
        while(day<wanted_days){
            document.writeln("<br/>DAY "+day+"<br/>");
            document.writeln("Name Quality Sellin<br/>");
            for(var i in this.items){
                name = this.items[i].name;
                quality = this.items[i].quality;
                sellin = this.items[i].sellIn;
                
                document.writeln(name+" "+quality+" "+sellin+" <br/>");
            }
            day++;
            this.updateQuality();
      }
    }
  }
  
  
  
  var sklep = new Shop(shop_items);
