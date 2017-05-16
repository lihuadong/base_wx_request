//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    

    //put请求json
    wx.request({
        url: 'https://a86.cn/chishenme/ChishenmeDeciper',
        method: 'PUT',
        dataType: 'JSON',
        data: {iv:'this is json  data 这是一个中文数据'},
        header: {'content-type': 'application/json'},
        success: function (res) {
            console.log('this is put request result' + res.data)
        }
    })

    //put请求string
    wx.request({
        url: 'https://a86.cn/chishenme/ChishenmeDeciper',
        method:'PUT',
        dataType:'STRING',
        data:'this is strng data 这是一个中文数据',
        header: {'content-type': 'application/json'},
        success:function(res){
            console.log('this is put request result'+ res.data)
        }
    })


    //post请求 string  header 不同
    wx.request({
        url: 'https://a86.cn/chishenme/ChishenmeDeciper',
        method: 'POST',
        dataType: 'STRING',
        data:'this is  post  string data',
        header: {'content-type':'application/x-www-form-urlencoded'},
        success: function (res) {
            console.log('this is  post request result' + res.data)
        }
    })

    //get请求 string  header 不同
    wx.request({
        url: 'https://a86.cn/chishenme/ChishenmeDeciper',
        method: 'GET',
        dataType: 'STRING',
        data: 'this is  get  string data',
        header: { 'content-type': 'application/x-www-form-urlencoded'},
        success: function (res) {
            console.log('this is  get request result' + res.data)
        }
    })

    //get请求 string  header 不同
    wx.request({
        url: 'https://a86.cn/chishenme/ChishenmeDeciper',
        method: 'GET',
        dataType: 'STRING',
        data: 'this is  get  string data',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function (res) {
            console.log('this is  get request result' + res.data)
        }
    })

    //OPTIONS string  
    wx.request({
        url: 'https://a86.cn/chishenme/ChishenmeDeciper',
        method: 'OPTIONS',
        dataType: 'STRING',
        data: 'this is  OPTIONS  string data',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function (res) {
            console.log('this is  OPTIONS request result' + res.data)
        }
    })

    //TRACE请求 string
    wx.request({
        url: 'https://a86.cn/chishenme/ChishenmeDeciper',
        method: 'TRACE',
        dataType: 'STRING',
        data: 'this is  TRACE  string data',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function (res) {
            console.log('this is  TRACE request result' + res.data)
        }
    })

    //HEAD string  
    wx.request({
        url: 'https://a86.cn/chishenme/ChishenmeDeciper',
        method: 'HEAD',
        dataType: 'STRING',
        data: 'this is  HEAD  string data',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function (res) {
            console.log('this is  HEAD request result' + res.data)
        }
    })

  }
})


/////////////////////////////////////////服务端使用代码   aplication/json
// 读取请求内容
// BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream()));
// String line = null;
// StringBuilder sb = new StringBuilder();
// while ((line = br.readLine()) != null) {
//     sb.append(line);
// }

// 将资料解码
//String reqBody = sb.toString();
//logger.info("this is put method  inputstream to string"+ new String(reqBody.getBytes("ISO8859-1"),"UTF-8").toString());
//logger.info("this is put method  inputstream to string" + reqBody);


/////////////////////////////////////////服务端使用代码   application/x-www-form-urlencoded
///String  iv   = request.getParameter("iv");
///String  encryptedData   = request.getParameter("encryptedData");