import React from 'react';
import Faze from '../images/faze/faze.jpg';
import karrigan from '../images/faze/karrigan.jpg';
import rain from '../images/faze/rain.webp';
import twistzz from '../images/faze/Twistzz.webp';
import ropz from '../images/faze/ropz.jpg';
import broky from '../images/faze/broky.jpg';
import navi from '../images/navi/navi.jpg';
import s1mple from '../images/navi/s1mple.jpg';
import electronic from '../images/navi/electronic.jpg';
import sdy from '../images/navi/sdy.jpg';
import perfecto from '../images/navi/perfecto.webp';
import b1t from '../images/navi/b1t.jpg';
import cloud from '../images/cloud9/cloud9.webp';
import hobbit from '../images/cloud9/hobbit.jpg';
import interz from '../images/cloud9/interz.jpg';
import ax1le from '../images/cloud9/ax1le.jpg';
import shiro from '../images/cloud9/shiro.jpg';
import nafany from '../images/cloud9/nafany.jpg';


function TopTeams() {

  const topTeams = [
    {
      id: 1,
      teamName: 'FaZe Clan',
      rank: '#1 team in the world',
      teamImg: Faze,
      members: [
        {
          id: 1,
          img: karrigan,
          name: 'Karrigan',
        },
        {
          id: 2,
          img: rain,
          name: 'Rain',
        },
        {
          id: 3,
          img: twistzz,
          name: 'Twistzz',
        },
        {
          id: 4,
          img: ropz,
          name: 'Ropz',
        },
        {
          id: 5,
          img: broky,
          name: 'Broky',
        },
      ],
    },
    {
      id: 2,
      teamName: 'NAVI',
      rank: '#2 team in the world',
      teamImg: navi,
      members: [
        {
          id: 1,
          img: s1mple,
          name: 'S1mple',
        },
        {
          id: 2,
          img: electronic,
          name: 'ElectroNic',
        },
        {
          id: 3,
          img: sdy,
          name: 'SDY',
        },
        {
          id: 4,
          img: perfecto,
          name: 'Perfecto',
        },
        {
          id: 5,
          img: b1t,
          name: 'B1t',
        },
      ],
    },
    {
      id: 1,
      teamName: 'Cloud9',
      rank: '#3 team in the world',
      teamImg: cloud,
      members: [
        {
          id: 1,
          img: hobbit,
          name: 'Hobbit',
        },
        {
          id: 2,
          img: interz,
          name: 'Interz',
        },
        {
          id: 3,
          img: ax1le,
          name: 'Ax1le',
        },
        {
          id: 4,
          img: shiro,
          name: 'Shiro',
        },
        {
          id: 5,
          img: nafany,
          name: 'Nafany',
        },
      ],
    },
  ]

  return (
	 <main className='main'>
    <a className='info_source' href="https://www.hltv.org/ranking/teams/2022/august/15">
      for more information about top teams of CS GO please 
      <span>click here</span> 
    </a>

      {topTeams.map((team) => {
        const {teamName, members, teamImg, rank} = team;
        return (

          <div key={teamName} className='topTeams__items'>
            <div className='topTeams__team'>
              <img className='team__img' src={teamImg} alt={teamName} />
              <p className='team__rank'>{rank}</p>
              <p className='team__name'>{teamName}</p>
            </div>

            <div className='topTeams__members'>
              {
                  members.map(member => {
                  const {name, id, img} = member;
                  return (
                    <div key={id} className='topTeams__member'>
                        <img className='memeber__img' style={{width: '200px'}} src={`${img}`} alt={name} />
                        <p className="memeber__name">{name}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>

        )
    })}
   </main>
  )
}

export default TopTeams