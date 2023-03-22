
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
    {id: 1, type: "資源", about: "新聞紙をひとまとめに紐で十字に縛ってください(折込チラシ含む)"},
    {id: 2, type: "資源", about: "新聞紙をひとまとめに紐で十字に縛ってください(折込チラシ含む"},
    {id: 3, type: "資源", about: "新聞紙をひとまとめに紐で束ねてください(折込チラシ含む)"},
    {id: 4, type: "資源", about: "粘着テープを外してください(2枚以上の場合は開いて十字に縛ってください)"},
    {id: 5, type: "資源", about: "ダンボールのみで束ねて出してください"},
    {id: 6, type: "資源", about: "ダンボール紙をひとまとめに紐で束ねてください（伝票、粘着テープ、金具ははずす）"},
    {id: 1, type: "資源", about: "縛って"},
    {id: 1, type: "資源", about: "縛って"},
    
  ];


// 入力欄
const searchInput = document.querySelector("#search-input");
const searchInput2 = document.querySelector("#search-input2");
const searchInputTrash = document.querySelector("#search-input-trashName");
const searchInputTrashType = document.querySelector("#search-input-trashType");

// 出力欄
const searchResult_trashWard = document.querySelector("#search-result");
const searchResult_trashWard2 = document.querySelector("#search-result2");
const searchResult_trashName = document.querySelector("#search-result-name");
const searchResult_trashType = document.querySelector("#search-result-type");
const searchResult_trashAbout = document.querySelector("#search-result-about");
const searchResult_trashType2 = document.querySelector("#search-result-type2");
const searchResult_trashAbout2 = document.querySelector("#search-result-about2");


searchInput.addEventListener("keyup", (e) => {
    const trashId = (e.target.value);
    findWard(trashId);
  });

searchInput2.addEventListener("keyup", (e) => {
    const trashId2 = (e.target.value);
    findWard2(trashId2);
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

// 比較する区
function findWard2(trashId2){
        const results2 = trash_ward.find((data) => data.ward === trashId2);
        if(results2 == null){
            searchResult_trashWard2.textContent = "なし";
            return;
        }
        searchResult_trashWard2.textContent = results2.ward;
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
し
// 各区ごとの分別一覧
function clickBtn() {
    if (findWard = "豊島区") {
        if (trash_info.find((data) => data.id == 1)) {
            const results = trash_info.find((data) => data.id == 1);
            if(results == null){
                searchResult_trashType.textContent = "なし";
                searchResult_trashAbout.textContent = "なし";
                return;
            }
            searchResult_trashType.textContent = results.type;
            searchResult_trashAbout.textContent = results.about;
        }
        // if (trash_info.find((data) => data.id == 4)) {
        //     const results = trash_info.find((data) => data.id == 4);
        //     if(results == null){
        //         searchResult_trashType.textContent = "なし";
        //         searchResult_trashAbout.textContent = "なし";
        //         return;
        //     }
        //     searchResult_trashType.textContent = results.type;
        //     searchResult_trashAbout.textContent = results.about;
        // }
    }
    

    if (findWard2 = "渋谷区") {
        const results2 = trash_info.find((data) => data.id == 2);
        if(results2 == null){
            searchResult_trashType2.textContent = "なし";
            searchResult_trashAbout2.textContent = "なし";
            return;
        }
        searchResult_trashType2.textContent = results2.type;
        searchResult_trashAbout2.textContent = results2.about;
    }
    
}

// 2入力すると、infoが表示されなくなった