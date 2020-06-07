// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component{

    state={
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video:{
                resolution: '1080p'
            }
        }
    }

    bitrateClick = () => {
        this.setState(prevState=>{
            if (prevState.settings.bitrate === 8){
                return{
                settings: {...prevState.settings, bitrate: 12}
                }
            } else{
                return{
                    settings: {...prevState.settings, bitrate: 8}
                }
            }
            // switch case practice. Probably only worth it in... different circumstances
                // switch(prevState.settings.bitrate){
                //     case 8:
                //         return{
                //             settings: {...prevState.settings, bitrate: 12}
                //         }

                //     case 12:
                //         return{
                //             settings: {...prevState.settings, bitrate: 8}
                //         }
                //     default:
                //         return{
                //             settings: {...prevState.settings, bitrate: 8}
                //         }
                // }

        })
    }

    resolutionClick = () =>{
        this.setState(prevState=>{
            // this would probably be a better place for a switch case
            if (prevState.settings.video.resolution === '1080p'){
                return {
                    settings: {...prevState.settings, video:{resolution:'720p'}}
                }
            } else {
                return {
                    settings: {...prevState.settings, video:{resolution:'1080p'}}
                }
            }
        })
    }

    render(){
        return(
        <div>
            <button 
            className='bitrate' 
            onClick={this.bitrateClick}>
                Current Bitrate: {this.state.settings.bitrate}
            </button>

            <button 
            className='resolution'
            onClick={this.resolutionClick}>
                Current Resolution: {this.state.settings.video.resolution}
            </button>
        </div>
        )
    }
}