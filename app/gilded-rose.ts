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

//Update Quality
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      switch(this.items[i].name){
        case "Aged Brie":
          this.updateValuesForAgedBrie(this.items[i]);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
        this.updateValuesForBackstage(this.items[i]);
        break;
        case "Sulfuras, Hand of Ragnaros":
        break;
        case "Conjured Mana Cake":
        this.updateValuesForConjured(this.items[i]);
        break;
        default:
        this.updateValuesForOtherItems(this.items[i]);
        break;
      }     
    }
    return this.items;
  }

  updateValuesForOtherItems(item:Item){
    item.sellIn = item.sellIn - 1;
    item.quality = item.quality === 0 ? item.quality : item.quality - 1;
    if (item.sellIn < 0){
      item.quality = item.quality === 0 ? item.quality : item.quality - 1;
    }
  }
  
  updateValuesForBackstage(item:Item){
    item.sellIn = item.sellIn - 1;
    let sellIn = item.sellIn;
    if(sellIn < 0){     //sellIn < 0 , quality set to 0 
      item.quality = 0;
    }
    else{
      item.quality = item.quality === 50 ? item.quality : item.quality + 1;
      //Backstage pass - sellIn less than or equal to 10 days , quality increases by 2
      if (sellIn < 11) {
        item.quality = item.quality === 50 ? item.quality : item.quality + 1;
      }
      //Backstage pass - sellIn less than or equal to 5 days, quality increases by 3
      if (sellIn < 6) {
        item.quality = item.quality === 50 ? item.quality : item.quality + 1;
      }
    }  
  }

  updateValuesForAgedBrie(item:Item){
    item.sellIn = item.sellIn - 1;
    item.quality = item.quality === 50 ? item.quality : item.quality + 1;
  }

  updateValuesForConjured(item:Item){
    item.sellIn = item.sellIn - 1;
    item.quality = item.quality === 0 ? item.quality : item.quality - 2;
    if (item.sellIn < 0){
      item.quality = item.quality === 0 ? item.quality : item.quality - 2;
    }
    
  }

}

//Aged Brie - sellIn goes down by 1
//Aged Brie - quality goes up by 1
//Aged Brie - quality shouldn't cross 50

//Backstage - sellIn goes down by 1
//Backstage - quality is 0 if sellIn < 0
//Backstage - quality goes up by 3 if sellIn = 0
//Backstage - quality goes up by 3 if sellIn < 6
//Backstage - quality goes up by 2 if sellIn > 5 and sellIn < 11
//Backstage - quality goes up by 1 if sellIn > 10
//Backstage - quality should not be more than 50

//Other items - sellIn goes down by 1
//Other items - quality goes down by 1 if sellin > 0
//Other items - quality goes down by 2 if sellIn < 0
//Other items - quality does down by 1 if sellIn = 0


//Conjured Mana cake - sellIn goes down by 1
//Conjured Mana cake - quality goes down by 2 if sellIn > 0
//Conjured Mana cake - quality goes down by 4 if sellIn < 0
//Conjured Mana cake - quality does down by 2 if sellIn = 0
//Conjured Mana cake - quality should not be less than 0
