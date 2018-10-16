//  使用纯JavaScript引擎（sql.js）操作SQLite数据库

/*
桌面级关系型数据库

Access



 */

let sql =  require('./sql.js');
//  内存数据库
let db = new sql.Database();
var fs = require('fs');
function writeDBToDisk(callback) {
    var binaryArray = db.export();
    fs.writeFile('test.db', binaryArray,'binary',function(err) {
       if(err) {
           if(callback != undefined){
               callback(err);
           }
       } else {
           if(callback != undefined) {
               callback('成功保存数据库文件');
           }
       }

    });

}
function onClick_CreateDatabase() {
    fs.exists('test.db',function(exists) {
        if(exists) {
            fs.unlinkSync('test.db'); //  删除数据库文件
        }
        let createTableSQL = `create table if not exists t_products (
                             id integer primary key autoincrement,
                             product_name varchar(100) not null,
                             price float not null)`;
        db.run(createTableSQL);
        writeDBToDisk((msg) => {
           button_create.disabled = true;
           button_insert.disabled = false;
           alert(msg);
        });
    })
}

function onClick_Insert() {
    if(db == undefined) return;
    let insertSQL = `insert into t_products(product_name,price) 
                     select "iPhone10", 10000 
                     union all 
                     select "Android手机",8888
                     union all
                     select "特斯拉电动车",888888;`
    db.run(insertSQL);

    writeDBToDisk((msg) => {
        alert(msg);
        button_insert.disabled = true;
        button_query.disabled = false;
        button_update.disabled = false;
        button_delete.disabled = false;
    })
}

function onClick_Query() {
    if(db == undefined) return;
    let selectSQL = 'select * from t_products';
    var rows = db.exec(selectSQL);

    label_rows.innerText = '';

    for(var i = 0; i < rows[0].values.length;i++) {
        label_rows.innerText += '\r\n产品ID：' + rows[0].values[i][0] +
            '\r\n产品名称：' + rows[0].values[i][1] +
            '\r\n产品价格：' + rows[0].values[i][2] + '\r\n';
    }
}

function onClick_Update() {
    if(db == undefined) return;
    let updateSQL = 'update t_products set price=999999 where id = 3';
    db.exec(updateSQL);
    writeDBToDisk((msg) =>{
        alert(msg);
    })
}

function onClick_Delete() {
    if(db == undefined) returnl;
    let deleteSQL = 'delete from t_products where id = 2;';
    db.exec(deleteSQL);
    writeDBToDisk((msg) => {
        alert(msg);
    })
}




