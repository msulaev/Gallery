import {Page} from "@playwright/test";
import {BasePage} from "./BasePage";
import {step} from "../helpers/allureHelper";

export class ResultPage extends BasePage{
    resultitem = this.page.locator('.result-item');

    constructor(page: Page) {
    super(page);
    }

    takeUrl(){
        return this.page.url();
    }

}