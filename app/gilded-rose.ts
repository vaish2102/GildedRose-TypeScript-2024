export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateAgedBrie = (item: Item): Item => {
    item.quality += 1
    item.sellIn -= 1
    return item
  }

  updateItem = (item: Item): Item => {
    item.sellIn > 0 ? item.quality -= 1 : item.quality -= 2
    item.sellIn -= 1
    return item
  }


  updateQuality() {
    this.items.forEach((item) => {
      switch (item.name) {
        case 'Aged Brie':
          item = this.updateAgedBrie(item)
          break;
        default:
          item = this.updateItem(item)
          break;
      }
      // do thing
    });

    return this.items
  }
}
  //   for (let i = 0; i < this.items.length; i++) {
    

  //     // const inBoundQuality = (itemQuality: number): boolean => {
  //     //   if(itemQuality > 0 && itemQuality < 50) {
  //     //     return true;
  //     //   } else {
  //     //     return false;
  //     //   }
  //     // }

  //     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //       if (this.items[i].quality > 0) {
  //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //           this.items[i].quality = this.items[i].quality - 1
  //         }
  //       }
  //     } else {
  //       if (this.items[i].quality < 50) {
  //         this.items[i].quality = this.items[i].quality + 1
  //         if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].sellIn < 11) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1
  //             }
  //           }
  //           if (this.items[i].sellIn < 6) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //       this.items[i].sellIn = this.items[i].sellIn - 1;
  //     }
  //     if (this.items[i].sellIn < 0) {
  //       if (this.items[i].name != 'Aged Brie') {
  //         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].quality > 0) {
  //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //               this.items[i].quality = this.items[i].quality - 1
  //             }
  //           }
  //         } else {
  //           this.items[i].quality = this.items[i].quality - this.items[i].quality
  //         }
  //       } else {
  //         if (this.items[i].quality < 50) {
  //           this.items[i].quality = this.items[i].quality + 1
  //         }
  //       }
  //     }
  //   }

  //   return this.items;
  // }
