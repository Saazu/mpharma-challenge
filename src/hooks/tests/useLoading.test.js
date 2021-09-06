import { act, renderHook } from "@testing-library/react-hooks";
import useLoadingState from '../../hooks/useLoadingState';



describe("initialise loading and change loading states", () => {
  test("intial state is default value(true)", async () => {
    const { result } = renderHook(() => useLoadingState());

    //default initial loading state
    expect(result.current.isLoading).toBe(true);

    //start loading
    act(() => { result.current.stopLoading(); });
    expect(result.current.isLoading).toBe(false);

    //restart loading
    act(() => { result.current.startLoading(); });
    expect(result.current.isLoading).toBe(true);

    //stop reloading
    act(() => { result.current.stopLoading(); });
    expect(result.current.isLoading).toBe(false);
  });

  test("intial state is false", async () => {
    const { result } = renderHook(() => useLoadingState(false));

    //default initial loading state
    expect(result.current.isLoading).toBe(false);

    //start loading
    act(() => { result.current.startLoading(); });
    expect(result.current.isLoading).toBe(true);

    //stop loading
    act(() => { result.current.stopLoading(); });
    expect(result.current.isLoading).toBe(false);

    //start reloading
    act(() => { result.current.startLoading(); });
    expect(result.current.isLoading).toBe(true);

    //stop reloading
    act(() => { result.current.stopLoading(); });
    expect(result.current.isLoading).toBe(false);
  });

})