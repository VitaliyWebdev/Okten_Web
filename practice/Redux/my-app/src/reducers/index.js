const initialState = {
    user: []
};

export const reducer = (state = initialState.user, action) => {
    switch (action.type) {
        case  'ADD_USER': {
            state.push(action.payload)
            return [...state]
        }
        case "DELETE_USER":{

            const filter = state.filter(value=>value.id !== action.payload);
            console.log(action.payload);
            return [...filter];

        }
        default :{
            return state;
        }
    }
}


