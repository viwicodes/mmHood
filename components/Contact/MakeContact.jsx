/* eslint-disable react/no-unescaped-entities */
import React from "react"

const MakeContact = () => {
	return (
		<>
			<div className="contact-us">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div id="map">
								{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90186.37207676383!2d-80.13495239500924!3d25.9317678710111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1877e4a82d%3A0xa891714787d1fb5e!2sPier%20Park!5e1!3m2!1sen!2sth!4v1637512439384!5m2!1sen!2sth" width="100%" height="400px" frameBorder="0" style={{"border":"0"}} allowfullscreen></iframe> */}
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.88653972818!2d77.49085332862963!3d12.9539599874817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1669474749699!5m2!1sen!2sin" width="100%" height="400px" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="section-heading">
								<h2>Say Hello. Don't Be Shy!</h2>
								<span>Feel free to connect with us. We are willing to help you.</span>
							</div>
							<form id="contact" action="" method="post">
								<div className="row">
									<div className="col-lg-6">
										<fieldset>
											<input name="name" type="text" id="name" placeholder="Your name" required=""/>
										</fieldset>
									</div>
									<div className="col-lg-6">
										<fieldset>
											<input name="email" type="text" id="email" placeholder="Your email" required=""/>
										</fieldset>
									</div>
									<div className="col-lg-12">
										<fieldset>
											<textarea name="message" rows="6" id="message" placeholder="Your message" required=""></textarea>
										</fieldset>
									</div>
									<div className="col-lg-12">
										<fieldset>
											<button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane"></i></button>
										</fieldset>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default MakeContact