const shuffle = require("../src/shuffle");
const bots = require("../src/botsData");

describe("Shuffle Should...", () => {
  test("Return Array", () => {
    expect(shuffle()).toStrictEqual([])
  })
  test('Return Same Length Array', () => {
    expect(shuffle(bots)).toHaveLength(10)
  })
});
