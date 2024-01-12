import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
	return (
		<div className='container-fluid pt-5 pb-4 text-dark d-flex justify-content-center align-items-center'>
			<div>
				<h3
					data-text='Choose books, choose knowledge.'
					className='banner-text display-5 fw-bold'
				>
					Choose books, choose knowledge.
				</h3>
				<p className=''>-- Welcome to the Bookstore --</p>
				<Link to={"/search"}>
					<button className='btn btn-primary btn-lg text-white float-end'>
						Khám phá ngay
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Banner;
