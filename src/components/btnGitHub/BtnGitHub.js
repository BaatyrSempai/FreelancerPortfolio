import React from 'react'
import './style.css'
import gitHubIcon from './gitHub-black.svg'


const BtnGitHub = ({ link }) => {
    return (
        <div>
            <a href={link} target='_blank' rel='noreferrer' className="btn-outline">
                <img src={gitHubIcon} alt="img"></img>
                GitHub repo
            </a>
        </div>
    )
}

export default BtnGitHub
