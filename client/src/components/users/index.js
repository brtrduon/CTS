import React from 'react' 
import { Link } from 'react-router-dom'
import './index.css'

class UserIndex extends React.Component {
    render(){
        return (
            <div>
                <div className='row centered banner'>
                    <div className='row centered title'>
                        <h1 className='title'>Carb Tech Solutions</h1>
                    </div>
                </div>
                <div className='ui grid'>
                    <h5 className='about'>
                        Carb Tech Solutions (CTS) is an online retailer and distributor that specializes in carburetor rebuild kits. These kits include (but are not limited to) metering and pump diaphragms, inlet needle values, and entire carburetor assemblies. Our goal is to provide high quality aftermarket alternatives comparable to those of original manufactured parts and accessories.
                    </h5>
                    <div className='success_stories'>
                        <h1>Success Stories</h1>
                        <h5>
                            "Carb Tech Solutions provides us with a do-it-yourself affordable types of products that allows us to fix our equipments without having to bring our equipments into repair shops. We are glad that there is an alternative to having to make that long trip to get our lawn equipments running again!"
                        </h5>
                        <h5>
                            "As a commercial gardener, these guys provide quality parts at a low price to quickly get our machines up and running. Shipping times may vary, but these guys typically ensure our orders get to us within three to five business days. Would definitely recommend to anyone who is willing to fix stuff themselves."
                        </h5>
                    </div>
                    <div className='row centered'>
                        <div className='five wide column items'>
                            <h5><Link className='link' to='/items'>View our affordable, quality items.</Link></h5>
                        </div>
                        <div className='five wide column contact'>
                            <h5><Link className='link' to='/contact'>Contact us</Link></h5>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='five wide column crack'>
                            <img src='./../../../assets/img/profile1.jpg' alt='profile1.jpg' />
                        </div>
                        <div className='eight wide column'>
                            <h5>
                                Founded in 1985, the idea of creating an online business specializing in carburetor rebuild kits came to Jeong-Yul Kim while he was operating and managing a local lawn equipment repair business. Having already been in the business several years prior, Mr. Kim realized that while original lawn equipment body and engine parts were easier to come by and purchase, finding proper carburetor rebuild kits for each respective carburetor style was much more difficult. As a result of the dot com boom in the mid-late 1990s and early 2000s, Mr. Kim decided to expand his business online to not only assist local homeowner and commercial customers, but to also provide service to other lawn equipment repair businesses internationally who may be experiencing the same difficulties that Mr. Kim himself experienced.
                            </h5>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='five wide column'>
                            <img src='./../../../assets/img/camera_shy.jpg' alt='camera_shy.jpg' />
                        </div>
                        <div className='eight wide column'>
                            <h5>
                                Born in Seoul, South Korea, and raised in Southern California, Jared Jiho Kim obtained his Bachelor's degree in financing at the University of Utah, and obtained his Master's degree in Business Administration at the University of California, Berkeley. Through previous career experiences and technological prowess, Jared appealed and expanded CTS to more diverse groups of lawn equipment users, ranging from small home users to commercial users. Building upon his idealogy of tactical execution, Jared continues to implement effective and innovative strategies to develop towards an alluent, yet friendly, company objective.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserIndex