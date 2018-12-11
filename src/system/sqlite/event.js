const sqlite3 = require('sqlite3').verbose();

let db;
var fs = require('fs');
//  创建数据库
function onClick_CreateDatabase() {
    fs.exists('test.db',function(exists){
        if(exists) {
            fs.unlinkSync('test.db');
        }
        db = new sqlite3.Database('test.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
            if (err) {
                alert(err.message);
            } else {
                alert('成功连接test.db数据库!');

                let createTableSQL = `create table if not exists t_products(
                          id integer primary key autoincrement,
                          product_name varchar(100) not null,
                          price float not null
                      )`;
                db.run(createTableSQL, function(err) {
                    if (err) {
                        alert(err.message);
                    } else {

                        button_create.disabled = true;
                        button_insert.disabled = false;

                    }
                });

            }
        });
    })



}

function onClick_Insert() {
    if(db == undefined) return;
    let insertSQL = 'insert into t_products(product_name,price) select "iPhone10",10000 union all select "Android手机",8888 union all select "特斯拉",888888;'
    db.run(insertSQL, function(err) {
        if (err) {
            alert(err.message);
        } else {
            alert('成功插入记录');
            button_insert.disabled = true;
            button_query.disabled = false;
            button_update.disabled = false;
            button_delete.disabled = false;
        }
    });
}

function onClick_Query() {
    if(db == undefined) return;
    let selectSQL = 'select * from t_products';
    db.all(selectSQL, [],function(err,rows) {
        if (err) {
            alert(err.message);
        } else {
            label_rows.innerText = '';
            for(var i = 0; i < rows.length;i++) {
                label_rows.innerText += '\r\n产品ID:' + rows[i].id +
                                        '\r\n产品名称:' + rows[i].product_name +
                                        '\r\n产品价格:' + rows[i].price + '\r\n';

            }



        }
    });
}

function onClick_Update() {
    if(db == undefined) return;
    let updateSQL = 'update t_products set price = 999999 where id = 3';
    db.run(updateSQL, function(err) {
        if (err) {
            alert(err.message);
        } else {
            alert('成功更新记录');

        }
    });
}

function onClick_Delete() {
    if(db == undefined) return;
    let deleteSQL = 'delete from t_products where id = 2';
    db.run(deleteSQL, function(err) {
        if (err) {
            alert(err.message);
        } else {
            alert('成功删除记录');

        }
    });
}
