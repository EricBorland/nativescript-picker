import * as observableModule from "tns-core-modules/data/observable";
import * as listViewModule from "tns-core-modules/ui/list-view";
import * as frameModule from "tns-core-modules/ui/frame";

export class ViewModel extends observableModule.Observable {
    private _info;

    constructor(selectionInfo) {
        super();
        this._info = selectionInfo;
        const itemsArr = [];
        for (let i = 0; i < this._info.options.length; i++) {
            const element = this._info.options[i];
            const item = { "title": element };
            itemsArr.push(item);

        }

        this.items = itemsArr;
    }

    set items(value: Array<string>) {
        this.set("myItems", value);
    }

    get items(): Array<string> {
        return this.get("myItems");
    }

    public selectRow(index) {
        const listView = <listViewModule.ListView>frameModule.topmost().getViewById("listView");
        listView.ios.selectRowAtIndexPathAnimatedScrollPosition(NSIndexPath.indexPathForItemInSection(index, 0), false, 0);
    }

    public onSelectedRow(row) {
        this._info.index = row.index;
        frameModule.topmost().goBack();
    }

    public onBackTap(args) {
        frameModule.topmost().goBack();
    }
}