import { getMatrix } from './matrix';
import Cell from './cell';

//连连看区域 642 x 462
const left_width = 176;
const middle_width = 682;
const right_width = 273;
const height = 630;

//连连看游戏大小
const rows = 10;
const cols = 14;
const num = 7;

//Aliases
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

class Init {
    loadImg() {
        let assets = [
            {name: 'icon_1', url: require('../assets/red.png')},
            {name: 'icon_2', url: require('../assets/blue.png')},
            {name: 'icon_3', url: require('../assets/brown.png')},
            {name: 'icon_4', url: require('../assets/gray.png')},
            {name: 'icon_5', url: require('../assets/green.png')},
            {name: 'icon_6', url: require('../assets/yellow.png')},
            {name: 'icon_7', url: require('../assets/purple.png')},
        ]
        for (let item of assets) {
            loader.add(item.name, item.url);
        }
        loader.on('progress', this.loadProgress);
        loader.on('complete', this.initPixi);
        loader.load();
    }

    loadProgress(loader, resources) {
        console.log('loading...' + loader.progress + '%');
        console.log('loading: ' + resources.url);
    }

    initPixi() {
        console.log('完成加载,开始初始化...');
        let app = new Application({
            width: middle_width,
            height: height,
            backgroundColor: 0x0d87f6,
            resolution: 1,
            antialias: true,
            // roundPixels: true
        });
        document.querySelector('.pixi-container').appendChild(app.view);
        let cells = new Container();
        app.stage.addChild(cells);
        cells.position.set(-20, 30);
        cells.width = 642;
        cells.height = 462;
        //创建cell类
        let matrix = getMatrix(rows, cols, num);
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                matrix[i][j] = new Cell(matrix[i][j], i, j);
                cells.addChild(matrix[i][j].sprite);
            }
        }
        // console.log(matrix);
    }
}

export default new Init();