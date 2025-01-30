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
      switch(this.items[i].name){
        case "Aged Brie":
        this.increaseQualityForAgedBrie(this.items[i]);
        break;
        case "Backstage passes to a TAFKAL80ETC concert":
        this.increaseQualityForBackstage(this.items[i]);
        break;
        case "Sulfuras, Hand of Ragnaros":
        default:
        this.updateValuesForOtherItems(this.items[i]);
        break;
      }
     
          
      //SellIn has expired
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            //Quality is never negative
          //  if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                //All items other than Aged Brie , Sulfuras,Backstage pass,after sell by date,quality decreases by 2 (1 has been decreased above)
              //  this.items[i].quality = this.items[i].quality - 1
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
 

    return this.items;
  }

  updateValuesForOtherItems(item:Item){
    item.quality = item.quality === 0 ? item.quality : item.quality - 1;
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0){
      item.quality = item.quality === 0 ? item.quality : item.quality - 1;
    }
  }



  increaseQualityForBackstage(item:Item){
    item.quality = item.quality === 50 ? item.quality : item.quality + 1;
    item.sellIn = item.sellIn - 1;

    let sellIn = item.sellIn;
    //Backstage pass - sellIn less than or equal to 10 days , quality increases by 2
    if (sellIn < 11) {
      item.quality = item.quality === 50 ? item.quality : item.quality + 1;
    }
    //Backstage pass - sellIn less than or equal to 5 days, quality increases by 3
    if (sellIn < 6) {
      item.quality = item.quality === 50 ? item.quality : item.quality + 1;
    }
    if(sellIn == 0){
      item.quality = 0;
    }
  }

  //Aged Brie - increase quality by 1
  increaseQualityForAgedBrie(item:Item){
    item.quality = item.quality === 50 ? item.quality : item.quality + 1;
    item.sellIn = item.sellIn - 1;

  }

}