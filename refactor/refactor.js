class Item{
    constructor(name,sellIn,quality){
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    correctQuality(){
        if(this.quality<0) this.quality=0;
        if(this.quality>50) this.quality=50;
    }

    pastSellIn(){
        return this.sellIn && this.sellIn<0;
    }

    decreaseDays(){
        this.sellIn--;
    }

    write(){
        let list = document.getElementById("item_list");
        list.innerHTML += this.name + " | sellIn: " + this.sellIn + " | Quality: " + this.quality + "<br/>";
    }
}

class Standard extends Item{
    constructor(name,sellIn,quality){
        super(name,sellIn,quality);
    }

    changeQuality(){
        if(super.pastSellIn()) this.quality-=2;
        else this.quality--;
    }
}

class Backstage extends Item{
    constructor(name,sellIn,quality){
        super(name,sellIn,quality);
    }

    changeQuality(){
        if(this.sellIn>10) this.quality++;
        else if(this.sellIn>=5 && this.sellIn<=10) this.quality+=2;
        else if(this.sellIn>=0 && this.sellIn<=4) this.quality+=3;
        else this.quality=0;

    }
}

class Legendary extends Item{
    constructor(name,sellIn,quality){
        super(name,sellIn,quality);
    }
    
    changeQuality(){
        return false;
    }

    decreaseDays(){
        return false;
    }
}

class Cheese extends Item{
    constructor(name,sellIn,quality){
        super(name,sellIn,quality);
    }

    changeQuality(){
        if(super.pastSellIn()) this.quality+=2;
        else this.quality++;
    }
}

class Conjured extends Item{
    constructor(name,sellIn,quality){
        super(name,sellIn,quality);
    }

    changeQuality(){
        if(super.pastSellIn()) this.quality-=4;
        else this.quality-=2;
    }
}

var shop_items = [
    new Standard("+5 Dexterity Vest",10,20),
    new Cheese("Aged Brie",2,0),
    new Standard("Elixir of the Mongoose",5,7),
    new Legendary("Sulfuras, Hand of Ragnaros",0,80),
    new Legendary("Sulfuras, Hand of Ragnaros",-1,80),
    new Backstage("Backstage passes to a TAFKAL80ETC concert",15,20),
    new Backstage("Backstage passes to a TAFKAL80ETC concert",10,7),
    new Backstage("Backstage passes to a TAFKAL80ETC concert",5,10),
    new Conjured("Conjured Mana Cake",12,50)
]

class Shop{
    constructor(products){
        this.products = products;
        this.days = 0;
    }

    update(times){
        for(var i=1;i<=times;i++){
            for(var j in this.products){
                this.products[j].decreaseDays();
                this.products[j].changeQuality();
                this.products[j].correctQuality();
                this.products[j].write();
               
            }
            $("#item_list").append("<br/><br/>");
        }
    }

}
