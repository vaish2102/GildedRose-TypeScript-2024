import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  //All items should have quality greater than or equal to zero
  it('should not reduce the quality below 0', () => {
    const gildedRose = new GildedRose([new Item('ItemOne', 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeGreaterThanOrEqual(0);
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
});