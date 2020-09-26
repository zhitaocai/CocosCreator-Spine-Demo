const { ccclass, property } = cc._decorator;

@ccclass
export default class MainSceneCtrl extends cc.Component {
    onBtnClick(event: cc.Event.EventTouch, customEventData: string) {
        const sceneName = customEventData;
        cc.director.loadScene(sceneName);
    }
}
