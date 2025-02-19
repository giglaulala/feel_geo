import Card from "./Card.jsx";
import styles from "./Main.module.css";
import SubHeader from "./SubHeader.jsx";

function Main() {
  return (
    <>
      <SubHeader />

      <div className={styles.mainDiv}>
        <Card
          img={"sea-7375377_1280.jpg"}
          name={"Tour"}
          description={"Travel around the world"}
          price={500}
        />
        <Card
          img={"sea-7375377_1280.jpg"}
          name={"Tour"}
          description={"Travel around the world"}
          price={500}
        />
        <Card
          img={"sea-7375377_1280.jpg"}
          name={"Tour"}
          description={"Travel around the world"}
          price={500}
        />
        <Card
          img={"sea-7375377_1280.jpg"}
          name={"Tour"}
          description={"Travel around the world"}
          price={500}
        />
        <Card
          img={"sea-7375377_1280.jpg"}
          name={"Tour"}
          description={"Travel around the world"}
          price={500}
        />
        <Card
          img={"sea-7375377_1280.jpg"}
          name={"Tour"}
          description={"Travel around the world"}
          price={500}
        />
        <Card
          img={"sea-7375377_1280.jpg"}
          name={"Tour"}
          description={"Travel around the world"}
          price={500}
        />
        <Card
          img={"sea-7375377_1280.jpg"}
          name={"Tour"}
          description={"Travel around the world"}
          price={500}
        />
        <Card
          img={"sea-7375377_1280.jpg"}
          name={"Tour"}
          description={"Travel around the world"}
          price={500}
        />
        <Card
          img={"sea-7375377_1280.jpg"}
          name={"Tour"}
          description={"Travel around the world"}
          price={500}
        />
      </div>
    </>
  );
}

export default Main;
