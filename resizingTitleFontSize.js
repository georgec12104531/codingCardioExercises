const advertisers = [
			{
        		'advertiser_name': 'abc',
        		'campaign_names': [
              'cpn_name9','cpn_name8',
              ]
    		},
    		{
        		'advertiser_name': 'def',
        		'campaign_names': ['cpn_name0','cpn_name1','cpn_name2']
    		}
]

class TitleHtml {

  constructor(advertisers, maxHeight, adFontSize, campFontSize) {
    this.advertisers = advertisers
    this.maxHeight = maxHeight;
    this.adFontSize = adFontSize;
    this.campFontSize = campFontSize;
    this.adCount = 0;
    this.campCount = 0;    
    this.newCampFontSize = 0;
    this.newAdFontSize = 0;
  }

  getAdCampaignCount() {
    for (let advertiser of this.advertisers) {
      if (advertiser['advertiser_name']) {
        this.adCount += 1
      }
      if (advertiser['campaign_names']) {
        this.campCount += advertiser['campaign_names'].length;
      }
    }
  }

  getNewCampFontSize() {
    const ratio = this.adFontSize / this.campFontSize; 
    const campSum = (this.adCount * ratio) + this.campCount;
    this.newCampFontSize = this.maxHeight / campSum;

    if (this.newCampFontSize <= this.campFontSize) {
      this.newCampFontSize = this.newCampFontSize
    } else {;
      this.newCampFontSize = this.campFontSize;
    }

  }

  getNewAdFontSize() {
    this.newAdFontSize = (this.adFontSize * this.newCampFontSize) / this.campFontSize;

    if (this.newAdFontSize <= this.adFontSize) {
      this.newAdFontSize = this.newAdFontSize; 
    } else {
      this.newAdFontSize =  this.adFontSize;
    }
  }

  start() {
    this.getAdCampaignCount();
    this.getNewCampFontSize();
    this.getNewAdFontSize();
  }
}

let html = new TitleHtml(advertisers, 528, 44, 24);
html.start();

let advertisersTags = $(".page.title.cover-title-main-container .cover-title-container .cover-title-sub-container .advertiser-name");
let campaignTags = $(".page.title.cover-title-main-container .cover-title-container .cover-title-sub-container .campaign-name");

// get ad name element and change font size  
advertisersTags.each(function () {
  $(this).css({
      'font-size' : `${html.newAdFontSize}px`
  });
});

// get campaign element and change font size 
campaignTags.each(function () {
  $(this).css({
    'font-size' : `${html.newCampFontSize}px`
  });
});
