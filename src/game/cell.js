let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

export default class Cell extends PIXI.Container {
    constructor(type, row, col) {
        super();
        this.type = type;        //元素类型
        this.row = row;          //行
        this.col = col;          //列
        this.seleted = false;    //选中状态
        this.disappear = false;  //消失状态
        this.sprite = null;      //精灵
        this.init();
    }

    init() {
        this.sprite = new Sprite(resources[`icon_${this.type}`].texture);
        this.sprite.position.x = 45 * (this.col + 1);
        this.sprite.position.y = 45 * (this.row + 1);
    }
}