import React from 'react';
import './AdminHome.css';

function AdminHome() {
  return (
		<div>
			<div className="mainHomeWrapper">
				<div className="homeComponents">
					<div className="container">
						<div className="row">
							<div className="col-3">
								<nav className='nav'>
									<ul>
										<li>Dashboard</li>
										<li>Verify Publisher License Key</li>
										<li>View list of reader</li>
										<li>view list of publishers</li>
									</ul>
								</nav>
							</div>
							<div className="col-9 dashboard">
								<h2>Dashboard</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminHome;
