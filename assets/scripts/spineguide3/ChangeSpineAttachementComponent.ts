const { ccclass, property } = cc._decorator;

/**
 * 官方Demo示例，Spine局部换装
 */
@ccclass
export default class ChangeSpineAttachementComponent extends cc.Component {
    @property({
        type: sp.Skeleton,
        tooltip: "显示给用户看的哥布林（用于显示换装后的效果）",
    })
    goblinForShow: sp.Skeleton = null;

    @property({
        type: sp.Skeleton,
        tooltip: "背后隐藏的哥布林（用于获取待换装的部位）",
    })
    goblinForCopy: sp.Skeleton = null;

    /**
     * 需要切换的部位
     *
     * 这是根据生成的挂点中的Slot的名字的出来的
     */
    private changeSlots = ["left-shoulder", "left-arm", "left-hand"];

    /**
     * 是否可以换装
     */
    private _enableToChangeAttacment: boolean = false;

    onChangeSpineAttachmentBtnClick() {
        this._enableToChangeAttacment = !this._enableToChangeAttacment;
        if (this._enableToChangeAttacment) {
            // 换装
            for (let i = 0; i < this.changeSlots.length; i++) {
                // 获取待复制皮肤下，指定部位的插槽的的挂件
                let goblinSlotForCopy = this.goblinForCopy.findSlot(this.changeSlots[i]);
                let goblinAttachmentForCopy = goblinSlotForCopy.getAttachment();

                // 找到显示给用户看的Spine的相同部位的插槽
                // 并替换插槽挂件为刚刚获取到的挂件
                let goblinSlotForShow = this.goblinForShow.findSlot(this.changeSlots[i]);
                goblinSlotForShow.setAttachment(goblinAttachmentForCopy);
            }
        } else {
            // 还原
            this.goblinForShow.setSkin("goblin");
            this.goblinForShow.setSlotsToSetupPose();
        }
    }
}
