const advertisers = [
			{
        		'advertiser_name': 'abc',
        		'campaign_names': [
              'cpn_name9','cpn_name8',
              'cpn_name7','cpn_name0',
              'cpn_name1','cpn_name2', 
              'cpn_name0','cpn_name1',
              ]
    		},
    		{
        		'advertiser_name': 'def',
        		'campaign_names': ['cpn_name0','cpn_name1','cpn_name2']
    		}
]
const maxHeight = 700;
const adHeight = 100;
const campHeight = 60;

function isLessThanOrEqualMaxHeight(count, height, maxHeight) {
  count += height;
  if (count <= maxHeight) {
    return true;
  };
  return false;
}

function isFirstEl(el, arr) {
  return arr[0] === el;
}

function addEllipsisToAdsObj(arr, maxHeight, adHeight, campHeight) {
  let pxCount = 0;
  let copy = [];

  for (let i = 0; i < arr.length; i++) {
    let ad = arr[i];
    let newObj = {};
    let prev = newObj[i - 1];
    
    if (ad['advertiser_name']) {
      if (isLessThanOrEqualMaxHeight(pxCount, adHeight, maxHeight)) {
        newObj['advertiser_name'] = ad['advertiser_name'];
        pxCount += adHeight;
        // If adding the height of this element is greater than the height of the container, find the last element and replace it with an ellipsis.
      } else {
        prev['campaign_names'][prev['campaign_names'].length - 1] = "...";
        copy.push(newObj);
        return copy;
      }
    } 
    if (ad['campaign_names']) {
      let newArr = [];

      for (let j = 0; j < ad['campaign_names'].length; j++) {
        // Copy array
        if (isLessThanOrEqualMaxHeight(pxCount, campHeight, maxHeight)) {
          newArr.push(ad['campaign_names'][j]);
          pxCount += campHeight;
        // If adding the height of this element is greater than the height of the container, find the last element and replace it with an ellipsis.
        } else {
          if (isFirstEl(ad['campaign_names'][j], ad['campaign_names'])) {
            newObj['advertiser_name'] = "...";
          } else {
            newArr[j - 1] = "...";
            newObj['campaign_names'] = newArr;
          }
          copy.push(newObj);
          return copy;
        }
      }
      newObj['campaign_names'] = newArr
    }
    copy.push(newObj);
  }
  return copy;
} 

console.log(addEllipsisToAdsObj(advertisers, maxHeight, adHeight, campHeight))
