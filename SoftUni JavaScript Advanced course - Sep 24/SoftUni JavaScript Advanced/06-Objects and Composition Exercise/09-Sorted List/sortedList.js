function createSortedList(params) {
    return {
        add(element) {
            if (typeof(element) !== "number") {
                return;
            }       
            this._sortList.push(element);
            this.size = this._sortList.length;
            this._sortList.sort(this._sort);
        },
        remove(index) {
            if (index < 0 || index >= this.size) {
                return;
            }
            this._sortList.splice(index, 1);
            this._sortList.sort(this._sort);
            this.size = this._sortList.length;
        },
        get(index) {
            if (index < 0 || index >= this.size) {
                return;
            }
            return this._sortList[index];
        },
        size: 0,
        _sortList: [],
        _sort: (a, b) => a - b
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));