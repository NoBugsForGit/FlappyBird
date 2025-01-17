import { _decorator, Component, Node, Input, input, EventKeyboard, KeyCode, Vec3, sp, EventTouch, Prefab, instantiate } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    @property
    public SPEED_ADD: number = 100;  //速度增加值
    @property
    public GRIV: number = 10; //重力加速度
    @property
    public speedY: number = 1000;
    @property
    public initPositionX: number = -500;
    @property
    public speedMultiple: number = 5;


    start() {
        this.node.setPosition(this.initPositionX, 0);
        input.on(Input.EventType.TOUCH_START, this.ifTouch, this);
    }

    protected onDestroy(): void {
        input.off(Input.EventType.TOUCH_START, this.ifTouch, this);
    }

    ifTouch(event: EventTouch) {
        if (event != null) {
            this.speedY += this.SPEED_ADD;
        }
    }

    update(deltaTime: number) {
        this.speedY -= this.GRIV;
        let position = new Vec3;
        this.node.getPosition(position);
        position.y += this.speedY * this.speedMultiple * deltaTime;

        this.node.setPosition(position);

    }
}


