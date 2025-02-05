import Card from "./Card.jsx";

function Main() {
  return (
    <div>
      <Card
        img={"https://placehold.co/600x400"}
        name={"Tour"}
        description={"Travel around the world"}
        price={500}
      />
    </div>
  );
}

export default Main;
