import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { sliceActions, sliceSelectors } from "./app/slice";
import { otherSliceActions } from "./app/otherSlice";

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* Should rerender all components */}
      <button onClick={() => dispatch(sliceActions.toggleIsFetchingFields())}>
        Toggle fields
      </button>
      {/* Should rerender only FieldsObject component */}
      <button
        onClick={() => dispatch(sliceActions.toggleIsFetchingCountries())}
      >
        Toggle countries
      </button>
      {/* Should rerender only FieldsObject component */}
      <button onClick={() => dispatch(otherSliceActions.toggleOtherValue())}>
        Toggle value in other slice
      </button>
    </div>
  );
};

// Should rerender when isFetchingFields changes in the store
const Fields = () => {
  console.log(`Rendering Fields`);
  const isFetchingFields = useSelector(sliceSelectors.selectIsFetchingFields);

  return <div>{isFetchingFields ? "true" : "false"}</div>;
};

// Should rerender when isFetchingFields changes in the store
const FieldsMemoed = () => {
  console.log(`Rendering FieldsMemoed`);
  const isFetchingFields = useSelector(sliceSelectors.mSelectIsFetchingFields);

  return <div>{isFetchingFields ? "true" : "false"}</div>;
};

// Should rerender when anything changes in the store
const FieldsObject = () => {
  console.log(`Rendering FieldsObject`);
  const { isFetchingFields } = useSelector(
    sliceSelectors.selectIsFetchingFieldsAsObject
  );

  return <div>{isFetchingFields ? "true" : "false"}</div>;
};

// Should rerender when isFetchingFields changes in the store
const FieldsObjectMemoed = () => {
  console.log(`Rendering FieldsObjectMemoed`);
  const { isFetchingFields } = useSelector(
    sliceSelectors.mSelectIsFetchingFieldsAsObject
  );

  return <div>{isFetchingFields ? "true" : "false"}</div>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Buttons />
        <Fields />
        <FieldsMemoed />
        <FieldsObject />
        <FieldsObjectMemoed />
      </header>
    </div>
  );
}

export default App;
