describe("My first suite tests E2E", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it("should have info about cancel subscription", async () => {
    const info = await element(by.text("Cancel anytime. Ofter terms apply."));

    await expect(info).toBeVisible();
  });

  it("should subscribe to the premium plan", async () => {
    const inputEmail = "input-email";

    await new Promise((r) => setTimeout(r, 1000));
    await element(by.id("option-premium")).tap();

    await element(by.id(inputEmail)).tap();
    await element(by.id(inputEmail)).typeText("davi@teste.com");

    await element(by.id("keyboard")).tap();
    await element(by.id("button-subscribe")).tap();

    await device.takeScreenshot('snapshot-premium-plan-test');
    await expect(element(by.id("confirmation-message"))).toBeVisible();
  });
});
