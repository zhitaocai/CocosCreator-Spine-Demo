const { ccclass, property } = cc._decorator;

/**
 * 动态在某个挂点上添加内容
 */
@ccclass
export default class AddSpineAttachmentDynamicComponent extends cc.Component {
    @property({ type: sp.Skeleton })
    skeleton: sp.Skeleton = null;

    @property({ type: cc.Prefab })
    motionStreakPrefab: cc.Prefab = null;

    @property()
    targetAttachedName: string = "tail10";

    private isShowAttachmentParticles = false;

    onChangeMotionStreakVisableBtnClick() {
        this.isShowAttachmentParticles = !this.isShowAttachmentParticles;
        this.isShowAttachmentParticles ? this._generateSomeNodes() : this._destroySomeNodes();
    }

    /**
     * 生成指定骨骼名称节点树的方法
     */
    private _generateSomeNodes() {
        // 取得挂点工具
        let attachUtil = this.skeleton.attachUtil;
        // 因为同名骨骼可能不止一个，所以需要返回数组
        let boneNodes = attachUtil.generateAttachedNodes(this.targetAttachedName);
        // 取第一个骨骼作为挂点
        let boneNode = boneNodes[0];
        // 在挂点上添加自己的节点
        boneNode.addChild(cc.instantiate(this.motionStreakPrefab));
    }

    /**
     * 销毁指定骨骼名称节点的方法
     */
    private _destroySomeNodes() {
        let attachUtil = this.skeleton.attachUtil;
        attachUtil.destroyAttachedNodes(this.targetAttachedName);
    }
}
