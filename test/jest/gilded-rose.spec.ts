import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  //Other items / Conjured Mana Cake - quality should not be less than 0
  it ('should not reduce the quality below 0', () => {
    const gildedRose = new GildedRose([new Item('ItemOne', 10, 0),new Item('ItemTwo', 0, 0),new Item('ItemThree', -3, 0), new Item('Conjured Mana Cake',5,0)]);
    const items = gildedRose.updateQuality();
    let results = items.map((elem)=> elem.quality)
    expect(results).toEqual([0,0,0,0]);
  });

  //Aged Brie and Backstage - quality should not be more than 50
  it('should not increase the quality above 50' , () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50), new Item('Aged Brie', 15, 50)]);
    const items = gildedRose.updateQuality();
    let results = items.map((elem) => elem.quality);
    expect(results).toEqual([50,50]);
  });


  //Quality should go down by one for all items except Aged Brie, Sulfuras and Backstage
  it('should decrease the quality by one for all items except Aged Brie, Sulfuras and Backstage passes to a TAFKAL80ETC concert', () => {
    const gildedRose = new GildedRose([new Item('ItemOne', 10, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
  });

  //Quality should go up by two for Backstage if sell in less than or equal to 10 days
  it('should increase the quality by two for Backstage passes to a TAFKAL80ETC concert if sell in less than or equal to 10 days', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 9, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(7);
  });

    //Quality should go up by three for Backstage if sell in less than or equal to 5 days
    it('should increase the quality by two for Backstage passes to a TAFKAL80ETC concert if sell in less than or equal to 5 days', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 2, 15)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(18);
    });

    //Quality should go to 0 for Backstage if sell in is crossed
    it('should increase the quality by two for Backstage passes to a TAFKAL80ETC concert if sell in less than or equal to 5 days', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0,15)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  
  //Quality should go up by one for Aged Brie 
  it('should increase the quality by one for Aged Brie', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 20, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });
  
  it('should decrease the quality by two for sellIn greater than or equal to 0 for Conjured Mana Cake ' ,() =>{
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake',3,5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });
});
