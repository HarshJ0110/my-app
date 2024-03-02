// nanoid : use to get usique id for each array
// current : we can not access state of users directly in reducer we have 
// to use current(state.users) to access it
const { createSlice, nanoid, current, createAsyncThunk } = require("@reduxjs/toolkit")


const initialState = {
    userAPIData: [],
    // users: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
    // users: []
}

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data =  await result.json();
    return data;
})



const Slice = createSlice({
    // Name of a reducer
    name: "addUserSlice",
    initialState,
    //Action is to adduser deleteuser update user
    //reducer is the one which perform that task respectively
    reducers: {
        // Any action has two arguments state and action
        // state : Shows current state of it
        // Action : Shows what data we are going to fill it with 

        // addUser: (state, action) => {
        //     // Action that contains name
        //     const data = {
        //         id: nanoid(),
        //         name: action.payload
        //     }
        //     // pushing data in users data
        //     state.users.push(data);
        //     localStorage.setItem("users", JSON.stringify(state.users));
        // },
        // removeUser: (state, action) => {
        //     state.users = state.users.filter((user) => user.id !== action.payload);
        //     localStorage.setItem("users", JSON.stringify(state.users));
        // }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchApiUsers.fulfilled, (state, action)=>{
            state.isloading = false,
            state.userAPIData = action.payload;
        })
    }

})

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;

