import "./app.css";
import Testimonio from "./components/Testimonio";

function App() {
  return (
    <div className="app">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

      <Testimonio
        imagen="Emma"
        nombre="Emma Bostian"
        pais="Suecia"
        cargo="Ingeniera de Software"
        empresa="Spotify"
        testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniera de software en Spotify."
      />

      <Testimonio
        imagen="Shara"
        nombre="Shawn Wang"
        pais="Singapur"
        cargo="Ingeniero de Software"
        empresa="Amazon"
        testimonio="No es exagerado decir que freeCodeCamp cambió mi vida. Me ayudó a pasar de no saber nada de programación a conseguir un trabajo como ingeniero de software en una empresa tecnológica. El enfoque paso a paso y los proyectos prácticos hacen que realmente aprendas."
      />

      <Testimonio
        imagen="Jhon"
        nombre="Sarah Chima"
        pais="Nigeria"
        cargo="Ingeniera de Software"
        empresa="ChatDesk"
        testimonio="freeCodeCamp fue la puerta de entrada a mi carrera en tecnología. Me dio la base sólida que necesitaba para desarrollarme como ingeniera de software y me permitió conseguir un trabajo donde ahora ayudo a otras personas a resolver problemas reales con código."
      />
    </div>
  );
}

export default App;
