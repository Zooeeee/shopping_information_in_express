//express_demo.js 文件
let express = require('express')
let app = express();
let json = require('./data.json') //引用json文件

//express应用使用回调函数的参数，request和response来处理请求和响应

//----
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
// 创建 application/x-www-form-urlencoded 编码解析



app.use(bodyParser.json());//不加数据传不过来
app.use(bodyParser.urlencoded({extended: false}));
//-----
app.use(express.static('public'))




//添加一个新的商品
let id = 2 ; //给新加的商品一个id
app.post('/post',urlencodedParser, function(req, res) {
    console.log(req.body) // {name:'123'}
    id = id +1 ;
    json.data = [...json.data,{id:id,name:req.body.name}]
    console.log(json.data)
    res.send('已收到请求，并添加了数据，可点击获取全部商品查看结果');
  });



//获取全部id
app.get('/data', function (req, res) {
    console.log(req.hostname)
    res.send(json);
    res.end()
})

//获取单个id
app.get('/data*', function (req, res) {
    index = req.path.slice(5)
    res.send(json.data[index]);
    res.end()
})

//删除单个id
app.post('/delete',urlencodedParser, function (req, res) {
    //console.log(req.body.data)
    
    let index = find_index(req.body.data,json.data)
    console.log(index)
    json.data.splice(index,1)
    res.send("收到请求");
    res.end()
})

//更新数据
app.put('/put',urlencodedParser, function(req, res) {
    console.log(req.body)//{ id: '1', name: '2' }
    let index = find_index(req.body.id,json.data)//1
    json.data[index].name = req.body.name
    res.send('已收到请求');
});



//通过id 返回index
function find_index(a,b){
    let index = -1 
    for (let i of b){
        index ++
        if (i.id == a)
            return index
    }
}

let server = app.listen(8081, function () {
    let host = server.address().address
    let port = server.address().port
    console.log(`应用实例3，访问地址为 http://localhost:${port}`)
})