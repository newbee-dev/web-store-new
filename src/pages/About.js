import Figure from "react-bootstrap/Figure";
import "../styles/About.css";

function About() {
  return (
    <div>
      <Figure className="my-figure">
        <Figure.Image
          className="img"
          width={181}
          height={190}
          alt=""
          src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3N8ZW58MHx8MHx8fDA%3D"
        />
        <Figure.Caption>
          <p className="text">
            Comfortable, high-quality, locally produced. <hr /> 100% organic
            cotton. <hr /> Established in 2001.
          </p>
        </Figure.Caption>
        <Figure.Image
          className="img"
          width={380}
          height={360}
          alt="171x180"
          src="https://images.unsplash.com/photo-1531450664978-9be7f46cb497?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D"
        />
        <Figure.Image
          className="img"
          width={380}
          height={360}
          alt="171x180"
          src="https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Figure>
      <div></div>
    </div>
  );
}

export default About;
