
### 랜더링하기 
```jsx
  const root = document.qureySelector("#root");  
  ReactDOM.render(<App/>,root);
```

+ root 에  ```<App/>``` 을 그려줘 

### state 사용하기
```jsx
  const init = 0;
  const [value,setValue] = React.useState(init);
  
  const [boolValue,setBoolValue] = React.useState(true);
  
```
+ ```init``` : value의 초기값
+ ```React.useState()```를 호출하면 반환값으로 길이가 2인 배열을 반환한다.
+ 첫 번째 인덱스인 value 는 값의 이름을 나타낸다.
+ 두 번째 인덱스인 setValue 는 value값을 수정하고 랜더링까지하는 수정함수이다.
+ state값은 여러개 생성, 활용 가능하다.
+ 
### state 활용하기 1.

```jsx
  
  const resetValue = () =>{
    setValue((current) => init);
  }

```

### state 활용하기 2.
```jsx
  
  const addOneValue = () =>{
    setValue((current) => current + 1);
  }

```
### state 활용하기 3.
```jsx
  
  const changeBoolValue = () =>{
    setBoolValue((current) => !current);
  }

```
