function MinsToHours() {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => {
    setAmount(0);
  };
  const onFilp = () => {
    reset();
    setInverted((current) => !current);
  };
  return (
    <div>
      <div>
        <label htmlFor="mins">Mins</label>

        <input
          id="mins"
          value={inverted ? amount * 60 : amount}
          placeholder="Mins"
          type="number"
          onChange={onChange}
          disabled={inverted}
        />
      </div>

      <h4> You want to convert : {amount}</h4>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          id="hours"
          value={inverted ? amount : parseInt(amount / 60)}
          placeholder="Hours"
          type="number"
          onChange={onChange}
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFilp}>
        {inverted ? "Hour to Min" : "Min to Hour"}
      </button>
    </div>
  );
}

function KmToMiles() {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  };

  const Invert = () => {
    Reset();
    setInverted((current) => !current);
  };

  const Reset = () => {
    setAmount((current) => 0);
  };
  return (
    <div>
      <div>
        <label htmlFor="km">Km</label>
        <input
          id="km"
          placeholder="write "
          type="number"
          value={inverted ? amount * 1.609 : amount}
          onChange={onChange}
          disabled={inverted}
        />
      </div>

      <h4> You want to convert : {amount}</h4>

      <div>
        <label htmlFor="mile">Mile</label>
        <input
          id="mile"
          placeholder="write "
          type="number"
          value={inverted ? amount : amount / 1.609}
          onChange={onChange}
          disabled={!inverted}
        />
      </div>
      <button onClick={Reset}>reset</button>
      <button onClick={Invert}>
        {!inverted ? "Mile to Km" : "Km to Mile"}
      </button>
    </div>
  );
}

function App() {
  const [index, setIndex] = React.useState(1);
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>

      {index === "0" ? <MinsToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
