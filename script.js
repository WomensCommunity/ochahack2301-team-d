'use strict';

//検索機能動作：　ボタンを押す --> かけた検索条件と関連のデータを持ってくる --> 画面に表示

//住んでいる区(A)のゴミ分別方法//
//ボタンを押す - ファイルを確認
window.addEventListener('load', function(){
    document.getElementById("住んでる区").onclick = search;
    readSearchData();
  });

//ファイルを確認 - かけた検索条件と関連のデータを持ってくる
function readSearchData() {
    var request = new XMLHttpRequest();
    request.open('GET', filePath, true);
    request.send();
    request.onload = function() { //リクエストの終了
      var lines = extractLine(request.responseText); //1行ずつ取り出し
      for(var i=0; i<lines.length; i++) {
          var items = tabSeparate(lines[i]);
          if(items.length == 17) { //項目数は17個であることをチェック
            var tmp = new School(items);
            searchData.push(tmp);
          }
        }
        console.log(取得したデータ)
    }
}

//関連データを結果に表示する
let text = document.getElementById('test').textContent; //宣言
        document.getElementById('test').textContent = '＊＊＊取得した情報の表示＊＊＊';


//検索したい区(B)のゴミ分別方法//
//ボタンを押す - ファイルを確認
window.addEventListener('load', function(){
    document.getElementById("検索したい区").onclick = search;
    readSearchData();
  });

//ファイルを確認 - かけた検索条件と関連のデータを持ってくる
function readSearchData() {
    var request = new XMLHttpRequest();
    request.open('GET', filePath, true);
    request.send();
    request.onload = function() { //リクエストの終了
      var lines = extractLine(request.responseText); //1行ずつ取り出し
      for(var i=0; i<lines.length; i++) {
          var items = tabSeparate(lines[i]);
          if(items.length == 17) { //項目数は17個であることをチェック
            var tmp = new School(items);
            searchData.push(tmp);
          }
        }
        console.log(取得したデータ)
    }
}

//関連データを結果に表示する --> let text を consoleしたほうがいいかも
let text = document.getElementById('test').textContent; //宣言
        document.getElementById('test').textContent = '＊＊＊取得した情報の表示＊＊＊';