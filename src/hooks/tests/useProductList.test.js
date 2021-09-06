import { act, renderHook } from "@testing-library/react-hooks";
import useProductHistoryList from "../useProductHistoryList";

describe("allows user to play a quiz", () => {
  const { result, waitForNextUpdate } = renderHook(() => useProductHistoryList());

  test("play quiz", async () => {
    //assert initial state
    expect(result.current.productList).toBeInstanceOf(Array);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toEqual(false);


    await waitForNextUpdate({ timeout: 5000 });
    expect(result.current.productList).toBeInstanceOf(Array);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toEqual(false);

    // //start quiz
    // act(() => {
    //   result.current.startQuiz();
    // });

    //assert quiz started state
    // expect(result.current.quizStage).toBe("quiz-started");
    // expect(result.current.questionsLoading).toBe(false);
    // expect(result.current.currentQuestionIndex).toBe(0);
    // expect(result.current.questions.length).toBe(10);
    // expect(result.current.userAnswers).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    // //select false as answer to first question
    // act(() => {
    //   result.current.handleAnswerSelection(false);
    // });

    // expect(result.current.quizStage).toBe("quiz-started");
    // expect(result.current.questionsLoading).toBe(false);
    // expect(result.current.currentQuestionIndex).toBe(1);
    // expect(result.current.questions.length).toBe(10);
    // expect(result.current.userAnswers).toEqual([false, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    // //select true as answer to second question
    // act(() => {
    //   result.current.handleAnswerSelection(true);
    // })

    // expect(result.current.quizStage).toBe("quiz-started");
    // expect(result.current.questionsLoading).toBe(false);
    // expect(result.current.currentQuestionIndex).toBe(2);
    // expect(result.current.questions.length).toBe(10);
    // expect(result.current.userAnswers).toEqual([false, true, 0, 0, 0, 0, 0, 0, 0, 0]);

    // //select true for the rest of the questions
    // const numQuestionsLeft = result.current.numQuestions - result.current.currentQuestionIndex;
    // for (let i = 0; i < numQuestionsLeft; i++) {
    //   act(() => {
    //     result.current.handleAnswerSelection(true);
    //   })
    // }

    //   expect(result.current.quizStage).toBe("quiz-completed");
    //   expect(result.current.questionsLoading).toBe(false);
    //   expect(result.current.currentQuestionIndex).toBe(10);
    //   expect(result.current.userAnswers).toEqual([false, true, true, true, true, true, true, true, true, true]);

    //   //check correct answers
    //   const { results, numCorrectAnswers } = result.current.getQuizResult(result.current.userAnswers);
    //   expect(results.length).toBe(result.current.numQuestions);
    //   expect(numCorrectAnswers).toBeGreaterThanOrEqual(0);
    //   expect(numCorrectAnswers).toBeLessThanOrEqual(10);

    //   //start new quiz
    //   act(() => {
    //     result.current.playNewGame();
    //   })

    //   //assert new game state
    //   expect(result.current.questionsLoading).toBe(false);
    //   expect(result.current.quizStage).toBe("welcome-stage");
    //   expect(result.current.questions).toEqual([]);
    //   expect(result.current.userAnswers).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
});
