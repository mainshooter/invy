import { Scene } from './view/Scene.js';
import { MainController } from './controller/MainController.js';

let scene = new Scene();
let mainController = new MainController(scene);
mainController.start();
