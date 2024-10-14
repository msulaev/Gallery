import {expect, Page, test} from "@playwright/test";
import {step} from "../helpers/allureHelper";

export abstract class BasePage {
    protected constructor(
        protected page: Page,
        protected url?: string
    ) {
    }

    @step("Visit page")
    public async visit() {
            await this.page.goto(this.url)
    }
}