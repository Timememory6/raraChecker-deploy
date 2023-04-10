function ProcessForm(formObject){
  const userProperties = PropertiesService.getUserProperties();
  try{
    ProcessForm(userProperties, formObject);
  }catch(error){
    console.log(error)
    console.log("failed to getLastTime");
  }
  console.log(formObject)
}

function Interval(){
  console.log("interval");
  const userProperties = PropertiesService.getUserProperties();
  let lastTime;
  try{
    lastTime = getLastTime(userProperties);
  }catch(error){
    console.log(error)
    console.log("failed to getLastTime");
  }

  try{
    checkAll(userProperties, lastTime);
  }catch(error){
    console.log(error)
    console.log("failed to checkAll");
  }

  try{
    setLastTime(userProperties);
  }catch(error){
    console.log(error)
    console.log("failed to setLastTime");
  }
}

function Delete(){
  const userProperties = PropertiesService.getUserProperties();
 
  try{
    Delete(userProperties);
  }catch(error){
    console.log(error)
    console.log("failed to setLastTime");
  }
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

