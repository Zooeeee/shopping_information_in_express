//获取全部信息
function get_all(){
    axios.get('http://localhost:8081/data')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });   
    }

//获取某个id的商品信息
function get_one(){
    let id = document.getElementById("get_one_id").value;
    console.log("想要获取商品的id："+id)
    axios.get('http://localhost:8081/data'+id)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });   
}


//添加一个商品的信息
function add_one(){
    let value = document.getElementById("add_one_id").value;
    axios.post('http://localhost:8081/post', {name:value})
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

}

//删除某个id的商品信息
function delete_one(){
    let id = document.getElementById("delete_one_id").value;
    console.log("想要删除商品的id："+id)
    axios.post('http://localhost:8081/delete',{data:id})
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });   
}

//修改某个id的商品title信息
function put_one(){
    let id = document.getElementById("put_one_id").value;
    let name = document.getElementById("put_one_name").value;
    console.log("想要修改商品的id："+id+'\n新的名称：'+name)
    axios.put('http://localhost:8081/put',
    {
        id:id,
        name:name
    }
    )
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });   
}