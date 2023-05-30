## React를 활용해 Html을 랜더링
```jsx

  function funcName() {
    let [cnt,setCnt] = React.useState(0);
  
  const handleClick1 = () =<{
    console.log("Clicked");
  }
  
  const handleClick2 = () =<{
    setCnt((current)=>current +1);
  }
  return(
     // HTML TAG
     <div>
      <h2> THIS iS HTML TAG OF H2 </h2>

      <button
        id = "btn1"
        onClick = {handleClick1}
      > THIS iS HTML TAG OF BUTTON 
      </button>

     </div>
    }
  )
```

+ ```return``` : 
