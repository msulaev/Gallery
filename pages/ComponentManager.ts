import {Page} from "@playwright/test";
import {MainPage} from "./MainPage";
import {PopupPage} from "./PopupPage";
import {ResultPage} from "./ResultPage";

export class ComponentManager{
    page: Page;
    mainPage: MainPage;
    popupPage: PopupPage;
    resultPage: ResultPage;

    constructor(page: Page){
        this.page = page;
        this.mainPage = new MainPage(page);
        this.popupPage = new PopupPage(page);
        this.resultPage = new ResultPage(page);
    }
}