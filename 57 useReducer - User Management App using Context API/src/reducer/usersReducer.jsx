export const initialState = {
  users: [
    { id: 1, name: "Nayem Islam" },
    { id: 2, name: "John Wick" },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "DELETE_USER":
      const filteredUsers = state.users.filter(user => 
      user.id !== action.payload)

      return{
        ...state,
        users: filteredUsers
      }

    default:
      return state;
  }
};
