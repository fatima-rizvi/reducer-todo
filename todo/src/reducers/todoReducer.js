export const initialState = {
    todo: [
        {
            item: 'Finish knitting scarf for Amy',
            completed: false,
            id: 12252020
        },
        {
            item: 'Bake brownies! For fun! Or cornbread',
            completed: false,
            id: 11172020
        },
        {
            item: 'Watch Star Wars episode VI',
            completed: false,
            id: 10112020
        }
    ]
};
  
  export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_NEW_TASK":
            return {
                    ...state,
                        todo: [...state.todo,
                        {item: action.payload,
                        completed: false,
                        id: new Date()}]
                    };
        case "TOGGLE_COMPLETED":
            console.log(action.payload);
            return {
                todo: state.todo.map((task) => {
                    console.log(task.id)
                    if (action.payload === task.id) {
                        console.log(task);
                        return {
                            ...task,
                            completed: !task.completed,
                        };
                    } else return task
                }),
            };
        case "CLEAR_COMPLETE":
            console.log("Clearing complete");
            return {
                todo: state.todo.filter((task) => task.completed === false
            )
            };    
        

      default:
        return state;
    }
  };
