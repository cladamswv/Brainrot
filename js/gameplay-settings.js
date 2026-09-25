export const gameplaySettings = {
  battle: {
    id:'battle',
    name:'Brain Battle',
    shortLabel:'BATTLE',
    subject:null,
    icon:'🧠',
    description:'Pick any subject and make Glorp rage with correct answers.',
    meterTitle:'GLORP RAGE'
  },
  pizza: {
    id:'pizza',
    name:"Glorp's Pizza Party",
    shortLabel:'PIZZA PARTY',
    subject:'math',
    icon:'🍕',
    description:'Solve math questions to build, bake, and feed Glorp a ridiculous pizza.',
    meterTitle:'PIZZA PROGRESS'
  },
  milkshake: {
    id:'milkshake',
    name:"Glorp's Milkshake Machine",
    shortLabel:'MILKSHAKE',
    subject:'spelling',
    icon:'🥤',
    description:'Spell words correctly to load the blender and make Glorp a giant milkshake.',
    meterTitle:'SHAKE PROGRESS'
  }
};

export const gameplaySettingList = Object.values(gameplaySettings);

export function gameplaySetting(id='battle'){
  return gameplaySettings[id] || gameplaySettings.battle;
}

export function activityLayerCount(id){
  return id==='pizza' ? 6 : id==='milkshake' ? 6 : 0;
}

export function earnedActivityLayers(id,score,total){
  const layers=activityLayerCount(id);
  if(!layers||!score||!total)return 0;
  return Math.min(layers,Math.ceil((score/total)*layers));
}

export function activityProgressName(id,layers){
  const names={
    pizza:['DOUGH','SAUCE','CHEESE','TOPPINGS','BAKING','READY!'],
    milkshake:['ICE CREAM','MILK','FLAVOR','WHIPPED CREAM','SPRINKLES','BLEND!']
  };
  const bank=names[id];
  if(!bank)return '';
  if(layers<=0)return id==='pizza'?'HUNGRY':'EMPTY CUP';
  return bank[Math.min(bank.length-1,layers-1)];
}
