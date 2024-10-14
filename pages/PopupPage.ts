import {BasePage} from "./BasePage";
import {Page} from "@playwright/test";
import {step} from "../helpers/allureHelper";

export class PopupPage extends BasePage {
    private readonly popupContainer = this.page.locator('.popup');
    private readonly popupInput = this.popupContainer.getByPlaceholder('Что вы ищете?');
    private readonly popupSearchBtn = this.popupContainer.getByRole('button', { name: 'Поиск', disabled: true });

    constructor(page: Page) {
        super(page);
    }

  @step('Fill search input: {0} and click search')
  async searchText(text: string) {
    await this.popupInput.fill(text);
    await this.popupSearchBtn.click();
  }

}