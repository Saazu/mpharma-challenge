import { act, renderHook } from "@testing-library/react-hooks";
import useProductHistoryList from "../useProductHistoryList";

describe("handle the logic for getting product list data", () => {
  const { result, waitForNextUpdate } = renderHook(() => useProductHistoryList());

  test("get data", async () => {
    //assert initial state
    expect(result.current.productList).toBeInstanceOf(Array);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toEqual(false);


    await waitForNextUpdate({ timeout: 5000 });
    expect(result.current.productList).toBeInstanceOf(Array);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toEqual(false);

    //start quiz
    const numProducts = result.current.productList.length;
    act(() => {
      const newProduct = {
        name: "Wormplex 400",
        price: 11.3,
      }
      result.current.addNewProduct(newProduct);
    });

    //add product price
    expect(result.current.productList.length).toBe((numProducts + 1));
    expect(result.current.productList[numProducts].name).toBe("Wormplex 400");
    expect(result.current.productList[numProducts].price).toBe(11.3);
    expect(result.current.productList[numProducts].deleted).toBe(false);

    // delete product price
    const lastProductId = result.current.productList.length;
    act(() => {
      result.current.deleteProduct(lastProductId);
    });
    expect(result.current.productList[lastProductId - 1].deleted).toBe(true);

    // Edit a product details
    act(() => {
      const newDetails = {
        name: "Wormplex 500"
      };
      result.current.editProduct(lastProductId, newDetails);
    });
    expect(result.current.productList[lastProductId - 1].name).toBe("Wormplex 500");
  });
});
