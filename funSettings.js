// 本项目仅交流技术，玩耍使用，请勿商用！
 
// 第一个出现的水果 修改数字为 0-10  10为大西瓜
let firstFruit = 0;

// 修改游戏难度
const min_fruit_num = 0; // 生成随机水果最小值（0-10）
const max_fruit_num = 5; // 生成随机水果最大值（1-11）
let setFruits = {
  startFruits: [0, 0, 1, 2, 2, 2], // 指定前几次生成的水果，可填入任意数量的数字
  randomFunction: () => {
    return min_fruit_num + Math.floor(Math.random() * (max_fruit_num - min_fruit_num));
  }
}

// 下落速度 0-10
let fruitSlowDown = false;
// 水果弹性(0-1 0.9弹性很大 高难度)
let fruitTanXing = false;

let adLink = 'http://image.oldpan.me/qrcode_for_gh_2223dc9f159a_344.jpg';

// 修改网页标题
document.getElementsByTagName("title")[0].innerText = '合成大西瓜';

// 无敌模式(改为false则无敌) 
let is_wudi = true;