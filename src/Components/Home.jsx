import React from "react";
export const Home = () => {
  const [str, setStr] = React.useState("");
  const [check, setCheck] = React.useState(0);
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(0);

  const handleChange = (e) => {
    setStr(e.target.value);

    var map = new Map([["happy", "😀"],["sad","😭"]]); 

    if (
      e.target.value[e.target.value.length - 1] === ":" &&
      e.target.value[e.target.value.length - 2] === ":"
    ) {
      setCheck(check + 1);
    }

    if (check === 1) {
      setStart(e.target.value.length - 1);
      setCheck(12);
    }

    if (check === 13) {
      setEnd(e.target.value.length - 4);
      setCheck(0);
    }

    for (let [key, value] of map) {
      if (e.target.value.slice(start, end + 1) === key) {
        var ras = e.target.value.replace(
          `::${e.target.value.slice(start, end + 1)}::`,
        value
        );
        setStr(ras);
      }
    }
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <input type="submit" />

      <h1>{str}</h1>

      <h1> </h1>
    </div>
  );
};
