import React from 'react'
import Footer from './Footer/Footer.jsx'
import TopBar from './TopBar/TopBar.jsx'
import ContentRowTop from './RowTop/ContentRowTop.jsx'
import ContentRowMain from './Main/ContentRowMain.jsx'

function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

			<div id="content">

                <TopBar />

				<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

                    <ContentRowTop />
	

					<ContentRowMain />
				</div>

			</div>

            <Footer />
		</div>
    )
};

export default ContentWrapper