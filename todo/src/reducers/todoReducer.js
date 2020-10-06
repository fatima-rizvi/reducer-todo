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

// ...state,
//           item: action.payload,
//           completed: false,
//           id: new Date()
  
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
            // console.log("toggle state todo", state.todo);
            // return [
            //     todo: state.todo.map(item => 
            //         item.id === action.payload 
            //             ? {...item, completed: !item.completed} 
            //             : item 
            //     )
            // ]

            // case "TOGGLE_COMPLETED":
        
            // const toggle = () => {state.todo.map((task) => {
            //     //console.log("task", task)
            //     // console.log("task id", task.id)
            //     if (action.payload === task.id) {
            //       console.log("selected task", task);
            //       console.log("s task item", task.item);
            //       console.log("s task id", task.id);
            //       return {
            //         ...task,
            //         completed: true
            //       };
            //     }
            //     return task;
            // })}

            // const newTask = toggle();
            // console.log("updated task", newTask);
            // return {
            //     ...state,
            //         todo: [...state.todo,
            //         {item: action.payload,
            //         completed: !state.completed,
            //         id: new Date()}]
            //     };
      default:
        return state;
    }
  };

//   const toggleTask = (taskId) => {
//     console.log("id", taskId);
//     console.log("todos", state.todo);
//     //So, map over the array
//     //Once we find the task with an id that matches, toggle the completed field
//     //If it doens't match, return the task unchanged
    
//     state.todo.map((task) => {
//         console.log("task", task)
//         console.log("task id", task.id)
//         if (taskId === task.id) {
//           console.log("selected task", task);
//           return {
//             ...task,
//             completed: !task.completed
//           };
//         }
//         return task;
//       })
//     console.log("Updated state", state.todo);
//   };

// case "TOGGLE_COMPLETE":
//     console.log(action.payload);
//     return {
//         task: state.task.map((task) => {
//             console.log(task.id)
//             if (action.paylooad === task.id) {
//                 console.log(task);
//                 return {
//                     ...task,
//                     completed: !task.completed,
//                 };
//             } else return task
//         }),

//     };