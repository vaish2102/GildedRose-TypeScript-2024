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
//TO DO:
//Sulfuras- quality to be 80

//Update Quality
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      //Quality goes down for all items other than Aged Brie , Sulfuras,Backstage pass
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        //if (this.items[i].quality > 0) {
            this.reduceQualityForOtherItems(this.items[i]);
        //  }
      } else {// Aged Brie or Backstage pass
        if (this.items[i].quality < 50) {
          this.increaseQualityForAgedBrieAndBackStage(this.items[i]);
          //Backstage pass
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
              this.increaseQualityForBackstage(this.items[i]);
          }
        }
      }
      //For all items except Sulfuras - sellIn decreases by 1
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      //SellIn has expired
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            //Quality is never negative
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                //All items other than Aged Brie , Sulfuras,Backstage pass,after sell by date,quality decreases by 2 (1 has been decreased above)
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else { //Backstage pass - quality drops to 0 after concert (sell by date)
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {//Aged Brie - increases in quality after sell by date(quality maintained up to 50)
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }

    return this.items;
  }

   // quality shd never be greater than 50
   checkQualityBounds(item:Item){
    let quality = item.quality;
    if (quality < 0 || quality > 50){
      return false;
    }
    return true;
  }


  reduceQualityForOtherItems(item:Item){
    item.quality = item.quality === 0?item.quality:item.quality - 1;
  }



  increaseQualityForBackstage(item:Item){
    let sellIn = item.sellIn;
    //Backstage pass - sellIn less than or equal to 10 days , quality increases by 2
    if (sellIn < 11) {
      if (this.checkQualityBounds(item)) {
        item.quality = item.quality + 1;
      }
    }
    //Backstage pass - sellIn less than or equal to 5 days, quality increases by 3
    if (sellIn < 6) {
      if (this.checkQualityBounds(item)) {
        item.quality = item.quality + 1;
      }
    }
    if(sellIn == 0){
      item.quality = 0;
    }
  }

  //Aged Brie and backstage- increase quality by 1
  increaseQualityForAgedBrieAndBackStage(item:Item){
    item.quality = item.quality === 50 ? item.quality : item.quality + 1;
  }

}