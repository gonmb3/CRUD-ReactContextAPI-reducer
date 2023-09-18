import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import { CREATE, DELETE, UPDATE } from "./actions";

export const AppContext = createContext();

const initialState = {
    students: [
        {id: 1, name: "Jose", age: 25},
        {id: 2, name: "Carlos", age: 45}
    ]
}

export const AppProvider = ({children}) =>{

    //Reducer
    const [state, dispatch] =useReducer( reducer, initialState)

    const createStudent = (student) => dispatch({
        type:CREATE, payload:student
    })

    const updateStudent = (student) => dispatch({
        type:UPDATE, payload:student
    })

    const deleteStudent = (id) => dispatch({
        type:DELETE, payload:id   
     })

    return (
        <AppContext.Provider
            value={{
                students: state.students,
                createStudent,
                updateStudent,
                deleteStudent
            }}
        >
            {children}
        </AppContext.Provider>
    )
}



export const useAppContext = () => {
    return useContext(AppContext)
}