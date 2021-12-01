# Selectors playground

Repo for testing when selectors will trigger a rerender

## Components

### Fields

Uses regular selectors, should only rerender when value returned is changed

### FieldsMemoed

Uses createSelector, should only rerender when value returned is changed

### FieldsObject

Uses regular selectors but creates a new object, should rerender every time anything changes in the store

### FieldsObjectMemoed

Uses regular selectors but creates a new object, should only rerender when value returned is changed
