import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  //All items should have quality greater than or equal to zero
  it('should not allow any item that has quality less than 0', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, -5),new Item('Backstage passes to a TAFKAL80ETC concert',3, 6)]);
    const items = gildedRose.updateQuality();
      expect(items[0].quality).toBeGreaterThanOrEqual(0);
  });
});

