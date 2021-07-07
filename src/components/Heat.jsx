function Heat(props) {
  let heat = "";

  for (let i = 0; i < props.hotLevels; i += 1) {
    heat += " 🔥 ";
  }

  return (
    <p
      style={{
        margin: "0",
      }}
    >
      {heat}{" "}
    </p>
  );
}

export default Heat;
