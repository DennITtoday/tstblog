const About = () => {
  return (
    <div className="grid place-items-center pt-6">
      <div className="card w-1/3 bg-base-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="/Big_brain_pic.jpg" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title">О авторе!</h1>
          <p>
            Меня зовут Лупанов Денис Вадимович и я учусь на 4 курсе нашего
            замечательного института.{' '}
          </p>
          <p>
            Среди моих интересов можно выделить: настольный теннис,
            чтение/прослушивание разнообразных книг по психологии или
            саморазвитию.
          </p>
          <p>
            К разработке веб-приложений я пришёл абсолютно случайно (просто не
            знал чем заниматься и с чего начать, а в последствии товарищ
            посоветовал мне заняться этой отраслью разработки)
          </p>
          <p>
            В основном я писал веб-приложения не с использованием React, а с
            использованием фреймворка основанного на React. Этот фреймвок
            называется NEXT JS.
          </p>
          <p>
            Также попробовал несколько библиотек помогающих создать
            пользовательский интерфейс в приложении (chakra ui, material ui).
            Однако остановился на tailwindcss. Считаю что он наиболее гибкий
            среди перечисленных, но и более сложный в понимании чем
            перечисленные.
          </p>
          <p>
            Был также опыт написания backend части для приложения. Это оказалось
            для меня более сложно для понимания. Писал такжа на Typscript. А
            среди библиотек использовался Nest JS. Эта библиотека основана на
            Node js.
          </p>
          <div className="card-actions"></div>
        </div>
      </div>
    </div>
  )
}
export default About
