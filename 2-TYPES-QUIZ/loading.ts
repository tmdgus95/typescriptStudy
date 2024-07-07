{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network

  function printLoginState(state: ResourceLoadState) {
    if (state.state === "loading") {
      console.log(state.state);
    } else if (state.state === "success") {
      console.log(state.response.body);
    } else if (state.state === "fail") {
      console.log(state.reason);
    }
  }
}
