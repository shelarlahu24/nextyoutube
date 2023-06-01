import React from 'react'
import Herosection from './components/Herosection'

const Home = () => {
  return (
    <Herosection
      title={`LET'S WATCH MOVIE TOGETHER`}
      content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam autem sed ad! At error doloribus neque quasi veritatis placeat veniam, molestiae ducimus odio, unde, mollitia reiciendis praesentium rerum adipisci?"}
      imageUrl={"/about1.svg"}
    />
  )
}

export default Home