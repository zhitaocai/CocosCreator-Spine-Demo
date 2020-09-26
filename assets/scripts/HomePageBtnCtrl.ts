const { ccclass, property } = cc._decorator;

@ccclass
export default class HomePageBtnCtrl extends cc.Component {
    onLoad() {
        this.node.on("click", this._onBtnClick, this);
    }

    private _onBtnClick() {
        if (cc.director.getScene().name == "MainScene") {
            return;
        }
        cc.director.loadScene("MainScene");
    }
}
