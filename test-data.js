
// const result = TrashName.find(element => element === "新聞紙");
// console.log(result)

const trash_ward = [
    {ward: "豊島区"},
    {ward: "渋谷区"},
    {ward: "文京区"},
  ];

  const trash_name = [
    {name: "新聞紙"},
    {name: "ダンボール"},
    {name: "パンフレット"},
  ];

  const trash_info = [
    {id: 1, type: "資源", about: "縛って"},
    {id: 2, type: "可燃", about: "燃やせ"},
    {id: 3, type: "不燃", about: "燃やすな"},
  ];


// 入力欄
const searchInput = document.querySelector("#search-input");
const searchInputTrash = document.querySelector("#search-input-trashName");
const searchInputTrashType = document.querySelector("#search-input-trashType");

// 出力欄
const searchResult_trashWard = document.querySelector("#search-result");
const searchResult_trashName = document.querySelector("#search-result-name");
const searchResult_trashType = document.querySelector("#search-result-type");
const searchResult_trashAbout = document.querySelector("#search-result-about");


searchInput.addEventListener("keyup", (e) => {
    const trashId = (e.target.value);
    findWard(trashId);
  });

searchInputTrash.addEventListener("keyup", (e) => {
    const trashName = (e.target.value);
    findTrashName(trashName);
　});

// 基準になる区
function findWard(trashId){
        const results = trash_ward.find((data) => data.ward === trashId);
        if(results == null){
            searchResult_trashWard.textContent = "なし";
            return;
        }
        searchResult_trashWard.textContent = results.ward;
    }

// 捨てるものの名称
function findTrashName(trashName) {
    const results = trash_name.find((data) => data.name === trashName);
    if(results == null){
        searchResult_trashName.textContent = "なし";
        return;
    }
    searchResult_trashName.textContent = results.name;
}

// 各区ごとの分別一覧
function clickBtn() {
    if (findWard = "豊島区") {
        const results = trash_info.find((data) => data.id == 1);
        if(results == null){
            searchResult_trashType.textContent = "なし";
            searchResult_trashAbout.textContent = "なし";
            return;
        }
        searchResult_trashType.textContent = results.type;
        searchResult_trashAbout.textContent = results.about;
    }
}

// 2入力すると、infoが表示されなくなった