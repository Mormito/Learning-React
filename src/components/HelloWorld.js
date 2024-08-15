import Frase from "./Frase"
function HelloWorld(){


    return (
        <div>
            {/* Dentro do return coloca o HTML, até a porra do comentario tem que estar dentro da div, react troll
            alias, irei começar a utilizar o vite ao inves disso*/}
            <Frase />
            <h1>Primeira importação!</h1>
        </div>
    )
}

export default HelloWorld