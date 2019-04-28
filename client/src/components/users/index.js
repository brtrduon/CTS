import React from 'react'
// import { Link } from 'react-router-dom'
import './index.css'

class UserIndex extends React.Component {
    render(){
        return (
            <div>
                <div className='row centered title'>
                    <h1>Carb Tech Solutions</h1>
                </div>
                <div className='row centered banner'>
                </div>
                <div className='ui middle aligned stackable grid container'>
                    <div className='row centered'>
                        <div className='three wide column black'>One</div>
                        <div className='three wide column'>Two</div>
                        <div className='three wide column'>Three</div>
                    </div>
                    <div className='row centered'>
                        Carb Tech Solutions (CTS) is an online retailer and distributor that specializes in carburetor rebuild kits. These kits include (but are not limited to) metering and pump diaphragms, inlet needle values, and entire carburetor assemblies. Our goal is to provide high quality aftermarket alternatives comparable to those of original manufactured parts and accessories.
                    </div>
                    <div className='row centered'>
                        <div className='three wide column black'>One</div>
                        <div className='three wide column'>Two</div>
                        <div className='three wide column'>Three</div>
                    </div>
                    <div className='row'>
                        <div className='five wide column'>
                            <img src='./../../../assets/img/profile1.jpg' alt='profile1.jpg' />
                        </div>
                        <div className='eight wide column'>
                            <p>
                                Founded in 1985, the idea of creating an online business specializing in carburetor rebuild kits came to Jeong-Yul Kim while he was operating and managing a local lawn equipment repair business. Having already been in the business several years prior, Mr. Kim realized that while original lawn equipment body and engine parts were easier to come by and purchase, finding proper carburetor rebuild kits for each respective carburetor style was much more difficult. As a result of the dot com boom in the mid-late 1990s and early 2000s, Mr. Kim decided to expand his business online to not only assist local homeowner and commercial customers, but to also provide service to other lawn equipment repair businesses internationally who may be experiencing the same difficulties that Mr. Kim himself experienced.
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='five wide column'>
                            <img src='./../../../assets/img/camera_shy.jpg' alt='camera_shy.jpg' />
                        </div>
                        <div className='eight wide column'>
                            <p>
                                Born in Seoul, South Korea, and raised in Southern California, Jared Jiho Kim obtained his Bachelor's degree in financing at the University of Utah, and obtained his Master's degree in Business Administration at the University of California, Berkeley. Through previous career experiences and technological prowess, Jared pioneered and appealed CTS to more diverse groups of lawn equipment users, ranging from homeowners to commercial users. Building upon his idealogy of tactical execution, Jared continues to implement innovative strategies to develop an alluent, yet friendly, company objective.
                            </p>
                        </div>
                    </div>
                    <div className='row centered'>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserIndex