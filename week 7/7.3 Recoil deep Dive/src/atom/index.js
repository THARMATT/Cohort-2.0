import { atom, atomFamily, selector } from "recoil";

export const NotificationAtom=atom({
    key:"NotificationAtom",
    default:{
    }
})

export const NotificationSelector=selector({
    key:'NotificationSelector',
    get:({get})=>{
        const list=get(NotificationAtom);
        return list
    },
    set: ({ set }, newValue) => {
      set(NotificationAtom, newValue);
    }
})
export const asyncSelector=selector({
    key:'asyncSelector',
    get:async({get})=>{
const response=await fetch('https://sum-server.100xdevs.com/notifications');
const ans=response.json();
return ans
    }
})

export const todmoAtomFamily=atomFamily({
    key:'todoAtomFamily',
    default:selector({
        key:"atomfamily",
        get:async({get})=>{
const res=await fetch('https://sum-server.100xdevs.com/todos');
const ans=await res.json()
return ans;
        }
    })
})

const fetchTodos = selector({
    key: 'fetchTodos',
    get: async () => {
      const response = await fetch('https://sum-server.100xdevs.com/todos');
      const data = await response.json();
     const todos=data.todos
      return todos
    },
  });
  
  // Define atomFamily using the fetched data
  export const todoAtomFamily = atomFamily({
    key: 'todoAtomFamily',
    default: (param) => selector({
      key: `todoAtomFamily/${param}`,
      get: ({ get }) => {
        const todos = get(fetchTodos);
        return todos.find(todo => todo.id === param) || null;
      },
    }),
  });