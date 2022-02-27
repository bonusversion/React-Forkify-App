import { useCallback, useReducer, useState } from "react";

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      status: "pend",
      data: null,
      error: null,
    };
  }
  if (action.type === "SUCCESS") {
    return {
      status: "completed",
      data: action.responseData,
      error: null,
    };
  }
  if (action.type === "ERROR") {
    return {
      status: "completed",
      data: null,
      error: action.errorMessage,
    };
  }
  return state;
};

const useHttp = (requestFunction) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);

        dispatch({
          type: "SUCCESS",
          responseData: responseData.data,
        });
      } catch (error) {
        const errorMessage = error.message;
        dispatch({
          type: "ERROR",
          errorMessage,
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
