import React from 'react'

import faceIt from '../images/faceIt.png'

function FaceIt() {
  return (
	 <main className='main faceIt'>
    <div className="container">
      <img className='faceit__img' src={faceIt} alt="face it" />

      <p className='faceit__text'>
        FACEIT is an esports platform founded in London in 2012. The company has administered leagues for games such as Counter-Strike: Global Offensive, League of Legends, Rocket League, Tom Clancy's Rainbow Six Siege, Dota 2 and Team Fortress 2.
      </p>
      <p className='faceit__text'>
        In April 2016, FACEIT announced the launch of their Counter-Strike: Global Offensive tournament, known as the Esports Championship Series . In April 2017, the company partnered with the video sharing platform YouTube for the series. ECS was one of the two premier Counter-Strike leagues, along with ESL Pro League.
      </p>
      <p className='faceit__text'>
        The series was discontinued in 2020, replaced by a franchise-based league called Flashpoint.It features 12 teams and a US$2,000,000 buy in spot, and offers co-ownership and revenue sharing to competing teams.
      </p>
      <p className='faceit__text'>
        In May 2022, FACEIT announced a multi-million dollar partnership agreement with the cryptocurrency fintech platform Cake DeFi. The agreement sees players participating in FACEIT matchups and tournaments to receive cryptocurrency rewards, with plans to pay more than half a million dollars to FACEIT users.
      </p>

      <p className='faceit__text'>
        On 22 February 2018 Valve, the developers and owners of the Counter-Strike series, announced that FACEIT would host the thirteenth Global Offensive major, the FACEIT Major: London 2018. The event began in mid-September and concluded on 23 September 2018. It was the first Major hosted by FACEIT and the first Major hosted in the United Kingdom. It had a US$1,000,000 prize pool and the playoff stage was held in Wembley Arena. In the finals, Astralis defeated Natus Vincere to win its second Major title.
      </p>

    </div>

   </main>
  )
}

export default FaceIt