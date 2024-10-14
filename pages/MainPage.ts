import {BasePage} from "./BasePage";
import {Page} from "@playwright/test";
import {step} from "../helpers/allureHelper";

export class MainPage extends BasePage{
    readonly headerContainer = this.page.locator('.header-top__actions');
    readonly searchBtn = this.headerContainer.getByLabel('Поиск');

    constructor(page: Page) {
        super(page, 'https://www.tretyakovgallery.ru/');
    }

    @step('Click on search button in header')
    async clickHeaderSearch(){
        await this.searchBtn.click();
    }


}