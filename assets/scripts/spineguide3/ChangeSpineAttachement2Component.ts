const { ccclass, property } = cc._decorator;

/**
 * 另外一种Spine的局部换装方案
 *
 * 通过获取骨骼数据指定皮肤的插槽挂件，替换当前皮肤对应插槽的挂件
 */
@ccclass
export default class ChangeSpineAttachement2Component extends cc.Component {
    @property({
        type: sp.Skeleton,
        tooltip: "哥布林",
    })
    goblin: sp.Skeleton = null;

    /**
     * 需要切换的部位
     *
     * 这是根据生成的挂点中的Slot的名字的出来的
     */
    private changeSlots = ["left-shoulder", "left-arm", "left-hand"];

    /**
     * 当前皮肤下标
     */
    private _skinIndex = 0;

    onChangeSpineAttachmentBtnClick() {
        this._changeSpineAttachment();
    }

    /**
     * 局部换装
     */
    private _changeSpineAttachment() {
        // 获取骨骼数据
        let skeletonData: sp.spine.SkeletonData = this.goblin.skeletonData.getRuntimeData();

        // 找到要替换的皮肤（这里为找下一个皮肤）
        this._skinIndex++;
        this._skinIndex = this._skinIndex % skeletonData.skins.length;
        let targetSkinName = skeletonData.skins[this._skinIndex].name;

        // 获取目标皮肤（从骨骼数据中根据目标皮肤名字获取）
        let skin: sp.spine.Skin = skeletonData.findSkin(targetSkinName);

        this.changeSlots.forEach((slotName) => {
            // 获取需要换装的插槽下标（根据插槽名字找到插槽在骨骼数据中的索引下标）
            let slotIndex: number = skeletonData.findSlotIndex(slotName);

            // 获取目标皮肤的指定插槽下标的挂件
            let attachment: sp.spine.Attachment = skin.getAttachment(slotIndex, slotName);

            // 在当前插槽下切换挂件，从而实现换装
            this.goblin.findSlot(slotName).setAttachment(attachment);
        });
    }
}
