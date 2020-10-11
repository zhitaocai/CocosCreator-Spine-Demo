// const { ccclass, property } = cc._decorator;

// @ccclass
// export default class ChangeSpineAttachementComponent extends cc.Component {
//     @property({
//         type: sp.Skeleton,
//         tooltip: "哥布林",
//     })
//     goblin: sp.Skeleton = null;

//     /**
//      * 需要切换的部位
//      *
//      * 这是根据生成的挂点中的Slot的名字的出来的
//      */
//     private changeSlots = ["left-shoulder", "left-arm", "left-hand"];

//     onChangeSpineAttachmentBtnClick() {
//         // this.isSkinChanged = !this.isSkinChanged;
//         // for (let i = 0; i < this.changeSlots.length; i++) {
//         //     this.scheduleOnce(() => {
//         //         this._changeSpineSlotAttachement({
//         //             spine: this.goblin,
//         //             slot: this.changeSlots[i],
//         //             slotTargetSkin: this.isSkinChanged ? "goblingirl" : "goblin",
//         //             spineTargetSkin: "goblin",
//         //         });
//         //     });
//         // }
//     }

//     // /**
//     //  * 更换 Spine 指定插槽挂件
//     //  *
//     //  * 该插槽的挂件将从 指定的皮肤 换到 目标皮肤 的挂件
//     //  */
//     // private _changeSpineSlotAttachement(param: {
//     //     /**
//     //      * Spine
//     //      */
//     //     spine: sp.Skeleton;
//     //     /**
//     //      * 要更换的插槽名字
//     //      */
//     //     slot: string;
//     //     /**
//     //      * 插槽要更换到的目标皮肤
//     //      */
//     //     slotTargetSkin: string;
//     //     /**
//     //      * Spine 整体显示的皮肤
//     //      */
//     //     spineTargetSkin: string;
//     // }) {
//     //     // 1. 切换 Spine 到需要换装的插槽的皮肤
//     //     this.goblinBack.setSkin(param.slotTargetSkin);

//     //     // 2. 获取目标皮肤下，该插槽的挂件
//     //     let slotTargetAttchment = this.goblinBack.findSlot(param.slot).getAttachment();

//     //     // 3. 切换 Spine 为目标皮肤
//     //     this.goblinBack.setSkin(param.spineTargetSkin);

//     //     // 4. 切换 Spine 指定的插槽挂件为之前获取到的（从而实现局部换装）
//     //     this.goblinBack.findSlot(param.slot).setAttachment(slotTargetAttchment);
//     // }
// }
