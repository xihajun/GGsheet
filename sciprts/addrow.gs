function addjun() 
{ 
  // get the sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet(); 
  const plan = ss.getSheetByName("IFNScape Plan");
  // get the A column and Background colors
  var cell = ss.getRange("A:A"); 
  var result = cell.getBackgrounds();
  
  
  var k = 0;
  // at the end of the sheet
  for (let i=0;i<=result.length;i++){
    k+=1
    if(result[i]=="#fbbc04"){
    }
  }
//   if you want to check the color
//   console.log(result[k-1]);
  plan.insertRowBefore(k-1);
  
}


function addizzy() 
{ 
  var ss = SpreadsheetApp.getActiveSpreadsheet(); 
  const plan = ss.getSheetByName("IFNScape Plan");

  var cell = ss.getRange("A:A"); 
  var result = cell.getBackgrounds();
  var k = 0;
  for (let i=0;i<=result.length;i++){
    k+=1
    if(result[i]=="#fbbc04"){
      break
    }
  }
  plan.insertRowBefore(k-1);
  //plan.getRange("A${k}:BQ${k}").copyTo(plan.getRange("A${k-1}:BQ${k-1}"));
  return result 
}

function addmaria() 
{ 
  var ss = SpreadsheetApp.getActiveSpreadsheet(); 
  const plan = ss.getSheetByName("IFNScape Plan");

  var cell = ss.getRange("A:A"); 
  var result = cell.getBackgrounds();
  var k = 0;
  for (let i=0;i<=result.length;i++){
    k+=1
    if(result[i]=="#a4c2f4"){
      break
    }
  }
  plan.insertRowBefore(k-1);
  //plan.getRange("A${k}:BQ${k}").copyTo(plan.getRange("A${k-1}:BQ${k-1}"));
}

function addelsa() 
{ 
  var ss = SpreadsheetApp.getActiveSpreadsheet(); 
  const plan = ss.getSheetByName("IFNScape Plan");

  var cell = ss.getRange("A:A"); 
  var result = cell.getBackgrounds();
  var k = 0;
  for (let i=0;i<=result.length;i++){
    k+=1
    if(result[i]=="#57bb8a"){
      break
    }
  }
  plan.insertRowBefore(k-1);
  //plan.getRange("A${k}:BQ${k}").copyTo(plan.getRange("A${k-1}:BQ${k-1}"));
}
