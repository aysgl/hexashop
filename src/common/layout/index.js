import React from 'react'
import Header from './header'
import Footer from './footer'

function MainLayout(props) {

    return (
        <React.Fragment> {/* React Fragment bu şeklilde çağırabiliriz.  */}
            <Header />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default MainLayout