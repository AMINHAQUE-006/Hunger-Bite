import React from 'react'
import Profile from './ProfileClass'
import ProfileRepoClass from './ProfileRepoClass'

function About() {
  return (
    <div style={{ display: 'flex'}}>
        <Profile />
        <ProfileRepoClass />
    </div>
  )
}

export default About