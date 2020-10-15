const { ccclass, property } = cc._decorator;

@ccclass
export default class AddSpineAttachmentComponent extends cc.Component {
    @property({ type: sp.Skeleton })
    spine: sp.Skeleton = null;

    @property({ type: cc.MotionStreak })
    motionStreak: cc.MotionStreak = null;

    private isShowAttachmentParticles = true;

    onChangeMotionStreakVisableBtnClick() {
        this.isShowAttachmentParticles = !this.isShowAttachmentParticles;
        this.motionStreak.node.active = this.isShowAttachmentParticles;
    }
}
