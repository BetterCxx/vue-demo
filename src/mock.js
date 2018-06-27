/**
 * Created by Administrator on 2018/6/8.
 */
// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
let secondData = [];
for (let i = 0; i < 50; i++) {
    let newSecondObject = {
        address: Random.county(true), //  Random.csentence( min, max )
        name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
        date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    secondData.push(newSecondObject)
}
const produceSecondData = function(options) {
    return {
        secondData: secondData
    }
};
const produceSecondData2 = function(options) {
    let res=JSON.parse(options.body);
    const filter= function(arr){
        if(res.name===""){
            return arr.name!==res.name
        }else{
            return arr.name===res.name
        }
    };
    let newData=secondData.filter(filter);
    return {
        secondData: newData
    }
};
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/second/index', 'get', produceSecondData);
Mock.mock('/second/index', 'post', produceSecondData2);