import React from 'react'
import { Link } from 'react-router-dom'

function Blogs() {
  return (
    <>
    
    <section className="pt-4 pb-0">
	<div className="container">
		<div className="row">
			<div className="col-sm-6 col-lg-3">
				<div className="card mb-4">
					<div className="card-fold position-relative">
						<img className="card-img" src="/image/blogs/blog1.jpg" alt="Card image" />
					</div>
					<div className="card-body px-0 pt-3">
						<h4 className="card-title"><Link to ="/Singleblog" className="btn-link text-reset stretched-link fw-bold">How the Metaverse is Shaping the Future of Social Media? </Link></h4>
						<ul className="nav nav-divider align-items-center text-uppercase small">
							<li className="nav-item">
								<a href="#" className="nav-link text-start btn-link">By admin</a>
							</li>
							<li className="nav-item text-end">Mar 07, 2022</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="col-sm-6 col-lg-3">
				<div className="card mb-4">
					<div className="card-fold position-relative">
						<img className="card-img" src="/image/blogs/blog2.jpg" alt="Card image"/>
						<div className="card-img-overlay d-flex align-items-start flex-column p-3">
						</div>
					</div>
					<div className="card-body px-0 pt-3">
						<h4 className="card-title"><Link to="/Singleblog" className="btn-link text-reset stretched-link fw-bold">Tokenization of Real World Assets: A Comprehensive Guide</Link></h4>
						
						<ul className="nav nav-divider align-items-center text-uppercase small">
							<li className="nav-item">
								<a href="#" className="nav-link text-start btn-link">By admin</a>
							</li>
							<li className="nav-item text-end">Aug 15, 2022</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="col-sm-6 col-lg-3">
				<div className="card mb-4">
					<div className="card-fold position-relative">
						<img className="card-img" src="/image/blogs/blog3.jpg" alt="Card image"/>
					</div>
					<div className="card-body px-0 pt-3">
						<h4 className="card-title"><Link to="/Singleblog" className="btn-link text-reset stretched-link fw-bold">The Power of NFTs in the Travel Industry: Revolutionizing Experiences</Link></h4>
						<ul className="nav nav-divider align-items-center text-uppercase small">
							<li className="nav-item">
								<a href="#" className="nav-link text-start btn-link">By admin</a>
							</li>
							<li className="nav-item text-end">Jun 01, 2022</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="col-sm-6 col-lg-3">
				<div className="card mb-4">
					<div className="card-fold position-relative">
						<img className="card-img" src="/image/blogs/blog4.jpg" alt="Card image"/>
					</div>
					<div className="card-body px-0 pt-3">
						<h4 className="card-title"><Link to="/Singleblog" className="btn-link text-reset stretched-link fw-bold">NFT domains: The next generation of domain names</Link></h4>
						<ul className="nav nav-divider align-items-center text-uppercase small">
							<li className="nav-item">
								<a href="#" className="nav-link text-start btn-link">BY ADMIN</a>
							</li>
							<li className="nav-item text-end">Dec 07, 2022</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    <div className="margin-bottom"></div>
    </>
  )
}
export default Blogs