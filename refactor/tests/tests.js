


QUnit.test("gilded rose tests", function(assert) {
    let my_shop = new Shop(shop_items);
    let initial = JSON.parse(JSON.stringify(my_shop))
    my_shop.update(10);
    for(var i in my_shop.products){
        assert.ok(my_shop.products[i].quality>=0, my_shop.products[i].name+" || is not negative");
        assert.ok(my_shop.products[i].quality<=50, my_shop.products[i].name+" || is not over maximum");
        if(my_shop.products[i] instanceof Backstage && my_shop.products[i].sellIn<0){
           assert.ok(my_shop.products[i].quality==0,my_shop.products[i].name+" || quality set to 0 on negative sellIn ")
        }
        if(my_shop.products[i] instanceof Legendary){
            assert.ok(my_shop.products[i].sellIn == initial.products[i].sellIn, my_shop.products[i].name+" || is not changing it's sellIn")
        }
        if(my_shop.products[i] instanceof Cheese){
            assert.ok(my_shop.products[i].quality>initial.products[i].quality,my_shop.products[i].name+" || increasing quality correctly")
        }

        if(my_shop.products[i] instanceof Conjured){
            assert.ok(my_shop.products[i].quality<=initial.products[i].quality-2,my_shop.products[i].name+" || conjured is working")
        }
    }
});