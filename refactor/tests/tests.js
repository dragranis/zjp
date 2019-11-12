


QUnit.test("gilded rose tests", function(assert) {
	let initial = JSON.parse(JSON.stringify(shop_items));
	change(10);

    for (var i in shop_items) {
        assert.ok(shop_items[i].quality >= 0, shop_items[i].name + " || quality is not negative");
        assert.ok(shop_items[i].quality <= 50, shop_items[i].name + " || quality is not over maximum");
        if (shop_items[i].is_backstage() && shop_items[i].sellIn < 0) {
            assert.ok(shop_items[i].quality == 0, shop_items[i].name + " || ticket become worthless")
        }
        if (shop_items[i].is_legendary()) {
            assert.ok(shop_items[i].sellIn == 0 || shop_items[i].sellIn == -1, shop_items[i].name + " || hadn't changed it's  sellIn value")
        }
		if(shop_items[i].is_increasing_quality()){
			assert.ok(shop_items[i].quality>initial[1].quality, shop_items[i].name+" || increased quality as expected");
		}

    }

});