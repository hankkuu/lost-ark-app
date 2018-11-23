
// 여기 추가하는게 일이다.... 
const resources = {
    "splash": require('../../assets/images/splash.png'),
    "login": require('../../assets/images/login.png'),
    "stoveLogo": require("../../assets/images/Smilegate_Stove.png"),
    "rpgLogo": require("../../assets/images/Smilegate_RPG.png"),
    "banner1": require("../../assets/images/banner/shop_banner1.png"),
    "banner2": require("../../assets/images/banner/shop_banner2.png"),
    "banner3": require("../../assets/images/banner/shop_banner3.png"),
}

export function getAssetByFilename(filename) {
    if (resources.hasOwnProperty(filename)) {
        return resources[filename];
    }
    return null;
}

export function getAllofAsset() {
    try {
        //const json = JSON.parse(resources);
        const arr = [];
        for(let x in resources) {
            arr.push(resources[x]);
        }
        return arr;
    } catch(error) {
        console.log(`image file load error: ${error}`);
    }
}