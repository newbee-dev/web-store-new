import authSlice from "./authSlice";

describe("authSlice", () => {
  it("should handle loginSuccess", () => {
    const initialState = {
      users: [{ username: "testUser", password: "password" }],
      user: null,
      isLoggedIn: false,
    };

    const action = {
      type: "auth/loginSuccess",
      payload: { username: "testUser" },
    };

    const newState = authSlice(initialState, action);

    expect(newState).toEqual({
      users: [{ username: "testUser", password: "password" }],
      user: { username: "testUser", password: "password" },
      isLoggedIn: true,
    });
  });
});
