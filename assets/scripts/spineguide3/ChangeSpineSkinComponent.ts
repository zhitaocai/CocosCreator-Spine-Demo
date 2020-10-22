const { ccclass, property } = cc._decorator;

@ccclass
export default class ChangeSpineSkinComponent extends cc.Component {
    @property({
        type: sp.Skeleton,
        tooltip: "哥布林",
    })
    goblin: sp.Skeleton = null;

    private isSkinChanged = false;

    onChangeSpineSkinBtnClick() {
        this.isSkinChanged = !this.isSkinChanged;
        this.goblin.setSkin(this.isSkinChanged ? "goblingirl" : "goblin");
    }
}
