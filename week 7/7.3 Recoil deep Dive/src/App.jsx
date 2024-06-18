import React, { useEffect } from "react";
import {
  RecoilRoot,
  atomFamily,
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import {
  NotificationAtom,
  NotificationSelector,
  asyncSelector,
  todoAtomFamily,
} from "./atom";

const App = () => {
  return (
    <RecoilRoot>
      {/* <NotificationButton/> */}
      {/* <AsyncCall/> */}
      {/* <AsyncSelector/> */}

      <Todo id={1} />
      {/* <Todo id={12}/>
      <Todo id={20}/>
      <Todo id={32}/> */}
    </RecoilRoot>
  );
};
function NotificationButton() {
  const [value, setNetwork] = useRecoilState(NotificationAtom);
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/notifications").then(async (res) => {
      const ans = await res.json();
      console.log("ans", ans);
      setNetwork(ans);
    });
  }, []);
  return (
    <>
      <button>Home({value.network})</button>

      <button>Likes({value.jobs})</button>
      <button>Chat({value.notifications})</button>
    </>
  );
}

function AsyncCall() {
  const [state, setSTate] = useRecoilState(NotificationSelector);
  console.log("state", state);
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/notifications").then(async (res) => {
      const ans = await res.json();
      console.log("ans", ans);
      setSTate(ans);
    });
  }, []);
  return (
    <>
      <button>Network{state.network}</button>
      <button>Notifications{state.notifications}</button>
      <button>Jobs{state.jobs}</button>
    </>
  );
}

function AsyncSelector() {
  const selector = useRecoilValue(asyncSelector);
  useEffect(() => {
    console.log(selector);
  }, []);

  return !selector === null ? (
    "loading"
  ) : (
    <>
      <button>Network{selector.network}</button>
      <button>Jobs{selector.jobs}</button>
      <button>Notifications{selector.notifications}</button>
    </>
  );
}

function Todo({ id }) {
  const todoload = useRecoilValueLoadable(todoAtomFamily(id));
  if (todoload.state === "loading") {
    <div>Loading</div>;
  }
  if (todoload.state === "hasError") {
    <div> Error</div>;
  }
  const todos = todoload.contents;
  console.log(todos);

  return !todos ? null : (
    <>
      <h1>{todos.title}</h1>
      <p>{todos.description}</p>
      <button>{todos.completed ? "done" : "Mark as done"}</button>
    </>
  );
}
export default App;
