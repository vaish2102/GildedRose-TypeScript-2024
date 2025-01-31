import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  //Other items / Conjured Mana Cake - quality should not be less than 0
  it ('should not reduce the quality below 0', () => {
    const gildedRose = new GildedRose([new Item('ItemOne', 10, 0),new Item('ItemTwo', 0, 0),new Item('ItemThree', -3, 0), new Item('Conjured Mana Cake',5,0)]);
    const items = gildedRose.updateQuality();
    let results = items.map((elem)=> elem.quality)
    expect(results).toEqual([0,0,0,0]);
  });

  //Other items - quality goes down by 1 if sellin >= 0
  it('should decrease the quality by one for Other Items if sell in > = 0', () => {
    const gildedRose = new GildedRose([new Item('ItemOne', 10, 5),new Item('ItemTwo', 1, 3)]);
    const items = gildedRose.updateQuality();
    let results = items.map((elem) => elem.quality);
    expect(results).toEqual([4,2]);
  });

   //Other items - quality goes down by 2 if sellin < 0
   it('should decrease the quality by two for Other Items if sellin < 0', () => {
    const gildedRose = new GildedRose([new Item('ItemOne', 0, 5),new Item('ItemTwo', -1, 3)]);
    const items = gildedRose.updateQuality();
    let results = items.map((elem) => elem.quality);
    expect(results).toEqual([3,1]);
  });

  //Conjured Mana cake - quality goes down by 2 if sellIn >= 0
  it('should decrease the quality by two for sellIn greater than or equal to 0 for Conjured Mana Cake ' ,() =>{
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake',3,5),new Item('Conjured Mana Cake',1,4),]);
    const items = gildedRose.updateQuality();
    let results = items.map((elem) => elem.quality);
    expect(results).toEqual([3,2]);
  });

  //Conjured Mana cake - quality goes down by 4 if sellIn < 0
  it('should decrease the quality by four for sellIn less than 0 for Conjured Mana Cake ' ,() =>{
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake',0,6),new Item('Conjured Mana Cake',-2,4),]);
    const items = gildedRose.updateQuality();
    let results = items.map((elem) => elem.quality);
    expect(results).toEqual([2,0]);
    });

    
  //Aged Brie and Backstage - quality should not be more than 50
  it('should not increase the quality above 50' , () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50), new Item('Aged Brie', 15, 50)]);
    const items = gildedRose.updateQuality();
    let results = items.map((elem) => elem.quality);
    expect(results).toEqual([50,50]);
  });

  //Quality should go up by one for Aged Brie 
  it('should increase the quality by one for Aged Brie', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 20, 7),new Item('Aged Brie', -5, 30)]);
    const items = gildedRose.updateQuality();
    let results = items.map((elem) => elem.quality);
    expect(results).toEqual([8,31]);
  });

  //Quality should go up by one for Backstage if sell in greater than 11 days 
  it('should increase the quality by one for Backstage passes to a TAFKAL80ETC concert if sell in greater than 11 days', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 12, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(7);
  });

  //Quality should go up by two for Backstage if sell in greater than 5 days and less than 11 days
  it('should increase the quality by two for Backstage passes to a TAFKAL80ETC concert if sell in greater than 5 days and less than or equal to 10 days', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 9, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(7);
  });

  //Quality should go up by three for Backstage if sell in less than or equal to 5 days
  it('should increase the quality by three for Backstage passes to a TAFKAL80ETC concert if sell in less than or equal to 5 days', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 2, 15),new Item('Backstage passes to a TAFKAL80ETC concert', 1, 30)]);
    const items = gildedRose.updateQuality();
    let results = items.map((elem) => elem.quality);
    expect(results).toEqual([18,33]);
  });

  //Quality should go to 0 for Backstage if sell in is crossed
  it('Quality of Backstage drops to zero if sell in is less than 0', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0,15)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
    });

   //All items except sulfuras - sell in goes down by 1
   it('should decreases the sell-in by 1 for all items except sulfuras', () => {
    const gildedRose = new GildedRose([new Item('ItemOne', 10, 5),new Item('Conjured Mana Cake', 7, 4),new Item('Aged Brie', 3, 10), new Item('Backstage passes to a TAFKAL80ETC concert',5,5)]);
    const items = gildedRose.updateQuality();
    let results = items.map((elem)=> elem.sellIn)
    expect(results).toEqual([9,6,2,4]);
  });
  
});
