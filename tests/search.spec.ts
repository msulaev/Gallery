import { test, expect } from '@playwright/test';
import {ComponentManager} from "../pages/ComponentManager";

test('Check search', async ({ page }) => {
    const cm = new ComponentManager(page);
    await cm.mainPage.visit();
    await cm.mainPage.clickHeaderSearch();
    await cm.popupPage.searchText('Пушкин');
    await expect(cm.resultPage.resultitem.nth(0)).toContainText('Кино 26.05.2023 — 26.05.2023 Дуэль и смерть Пушкина: киновзгляд');
    expect(cm.resultPage.takeUrl()).toContain('?query=%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD');
    await cm.mainPage.clickHeaderSearch();
    await cm.popupPage.searchText('Италия');
    expect(cm.resultPage.takeUrl()).toContain('query=%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F');
});