import { connect } from "react-redux";
import CreateTodo from "./CreateTodo";
import DisplayTodo from "./DisplayTodo";

function App() {
  return (
    <div className="text-center mt-10 border-2 w-1/2 mx-auto py-2">
      <CreateTodo/>
      <DisplayTodo/>
    </div>
  );
}



export default connect()(App);
