import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const android=path.join(root,'android');
if(!fs.existsSync(android)) throw new Error('Android project not found. Run npx cap add android first.');

const iconMap={
  'mipmap-mdpi':48,
  'mipmap-hdpi':72,
  'mipmap-xhdpi':96,
  'mipmap-xxhdpi':144,
  'mipmap-xxxhdpi':192
};
for(const dir of Object.keys(iconMap)){
  const src=path.join(root,'resources','android',dir,'ic_launcher.png');
  const destDir=path.join(android,'app','src','main','res',dir);
  if(!fs.existsSync(src)) throw new Error(`Missing Android icon resource: ${src}`);
  fs.mkdirSync(destDir,{recursive:true});
  for(const name of ['ic_launcher.png','ic_launcher_round.png','ic_launcher_foreground.png']){
    fs.copyFileSync(src,path.join(destDir,name));
  }
}

const colorFile=path.join(android,'app','src','main','res','values','ic_launcher_background.xml');
if(fs.existsSync(colorFile)){
  fs.writeFileSync(colorFile,'<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#120B2D</color>\n</resources>\n');
}

for(const gradleName of ['build.gradle','build.gradle.kts']){
  const gradle=path.join(android,'app',gradleName);
  if(!fs.existsSync(gradle)) continue;
  let text=fs.readFileSync(gradle,'utf8');
  text=text.replace(/versionCode\s+\d+/,'versionCode 1401');
  text=text.replace(/versionName\s+["'].*?["']/,'versionName "0.14.1"');
  text=text.replace(/versionCode\s*=\s*\d+/,'versionCode = 1401');
  text=text.replace(/versionName\s*=\s*["'].*?["']/,'versionName = "0.14.1"');
  fs.writeFileSync(gradle,text);
}
console.log('Configured Android app icon and version metadata.');
