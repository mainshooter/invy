import { Scene } from './view/Scene.js';
import { MainController } from './controller/MainController.js';
import { ChangeRegionService } from './service/ChangeRegionService.js';
import { SaveStoreService } from './service/SaveStoreService.js';

let scene = new Scene();
let changeRegionService = new ChangeRegionService();
let saveStoreService = new SaveStoreService();
let mainController = new MainController(scene, changeRegionService, saveStoreService);
mainController.start();
