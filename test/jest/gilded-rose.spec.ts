import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  //All items should have quality greater than or equal to zero
  it('should not allow any item that has quality less than 0', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 4),new Item('Backstage passes to a TAFKAL80ETC concert',3, 6)]);
    const items = gildedRose.updateQuality();
      expect(items[0].quality).toBeGreaterThanOrEqual(0);
  });
});

describe('Gilded Rose', () => {
  //Quality should go down by one for all items except Aged Brie, Sulfuras and Backstage
  it('should decrease the quality by one for all items except Aged Brie, Sulfuras and Backstage passes to a TAFKAL80ETC concert', () => {
    const gildedRose = new GildedRose([new Item('ItemOne', 10, 5)]);
    const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(4);
  });
});

describe('Gilded Rose', () => {
  //Quality should go up by two for Backstage if sell in less than or equal to 10 days
  it('should increase the quality by two for Backstage passes to a TAFKAL80ETC concert if sell in less than or equal to 10 days', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 5)]);
    const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(7);
  });
});