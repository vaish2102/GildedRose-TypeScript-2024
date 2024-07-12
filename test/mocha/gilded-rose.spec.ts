import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('items should have name, sellIn and quality', () => {
    const itemName = 'someItem';
    const gildedRose = new GildedRose([new Item(itemName, 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal(itemName);
    expect(items[0].sellIn).not.to.be.null;
    expect(items[0].quality).not.to.be.null;
  });

  it('SellIn and Quality of items should be lowered aftser .updateQuality', () => {
    const itemSellIn = 15;
    const itemQuality = 10;
    const gildedRose = new GildedRose(
      [new Item('someItem', itemSellIn, itemQuality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.be.lessThan(itemSellIn);
    expect(items[0].quality).to.be.lessThan(itemQuality);
  });

  it.only('Quality degrades twice as fast once SellIn date has passed', () => {
    const itemSellIn = 0;
    const itemQuality = 10;
    const expectedItemQuality = 8;
    const gildedRose = new GildedRose(
      [new Item('someItem', itemSellIn, itemQuality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(expectedItemQuality);
  })

  it ('Quality of an item cannot be negative', () => {
    const itemQuality = 1;
    const gildedRose = new GildedRose(
      [new Item('someItem', 10, itemQuality)]);
    
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(0);
  })

  it ('Aged Brie increases in Quality over time', () => {
    const itemQuality = 1;
    const gildedRose = new GildedRose(
      [new Item('Aged Brie', 10, itemQuality)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(2);
  })

  it ('Quality of an item cannot be increased to go over 50', () => {
    const itemQuality = 49;
    const gildedRose = new GildedRose(
      [new Item('Aged Brie', 10, itemQuality)]);

    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(50);
  })

  it('Sulfuras never has to be soled', () => {
    const itemSellIn = 10;
    const gildedRose = new GildedRose(
      [new Item('Sulfuras, Hand of Ragnaros', itemSellIn, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(itemSellIn);
  });

  it('Sulfuras always has a quality of 80', () => {
    const itemQuality = 80;
    const gildedRose = new GildedRose(
      [new Item('Sulfuras, Hand of Ragnaros', 10, itemQuality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(itemQuality);
  });

  it('Sulfuras always has a quality of 80', () => {
    const itemQuality = 80;
    const gildedRose = new GildedRose(
      [new Item('Sulfuras, Hand of Ragnaros', 10, itemQuality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(itemQuality);
  });

  it('Sulfuras always has a quality of 80', () => {
    const itemQuality = 80;
    const gildedRose = new GildedRose(
      [new Item('Sulfuras, Hand of Ragnaros', 10, itemQuality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(itemQuality);
  });

  it('Backstage Passes quality increases by 1 if it has 11 or more sellIn days', () => {
    const itemSellIn = 11;
    const itemQuality = 30;
    const gildedRose = new GildedRose(
      [new Item('Backstage passes to a TAFKAL80ETC concert', itemSellIn, itemQuality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(itemQuality + 1);
  });

  it('Backstage Passes quality increases by 2 if it has between 6-10 sellIn days', () => {
    const firstItemSellIn = 10;
    const secondItemSellIn = 6;
    const itemQuality = 30;
    const expectedItemQuality = 32;
    const firstItem = new Item('Backstage passes to a TAFKAL80ETC concert', firstItemSellIn, itemQuality);
    const secondItem = new Item('Backstage passes to a TAFKAL80ETC concert', secondItemSellIn, itemQuality);
    const gildedRose = new GildedRose(
      [firstItem, secondItem]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(expectedItemQuality);
    expect(items[1].quality).to.equal(expectedItemQuality);
  });



  
  // Backstage Passes 
  // -- Quality increases by 3 when <= 5 days SellIn
  // -- Quality is 0 after the concert
  // -- Quality can't go over 50

  
  // TODO stop skipping after Conjured items have been implemented

  it.skip('Conjured increases in Quality over time', () => {
    const itemQuality = 6;
    const gildedRose = new GildedRose(
      [new Item('Conjured', 10, itemQuality)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(4);
  })

});
