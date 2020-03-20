import { Scene } from './view/Scene.js';
import { MainController } from './controller/MainController.js';
import { ChangeRegionService } from './service/ChangeRegionService.js';

let scene = new Scene();
let changeRegionService = new ChangeRegionService();
let mainController = new MainController(scene, changeRegionService);
mainController.start();
