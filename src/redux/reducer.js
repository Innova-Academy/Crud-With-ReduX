 
const statez = {
    user:[]
};

export  const ServicesReducer = (state = statez, action ) => {
    const { type, payload } = action;
    switch( type) {
        case   "GET_ALL_SERVICES_SUCCEED" :
            return {
                ...state,
                user: payload 
              }
              case   "ADD_SERVICE_SUCCED":
                return {
                    ...state,
                    user: [...state.user, payload]
              
                   }
                   case   "DELETE_SERVICES_SUCCED":
                    
                    return    {
                       
                       ...state,
                       user: state.user.filter(data => data.id !=  payload  ) 
                      }
              
             
    }
    
return state
};