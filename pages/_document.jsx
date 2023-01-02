/* eslint-disable react/react-in-jsx-scope */
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html>
			<Head>
				{/* <meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" /> */}
				<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />

				<link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.css" />
				<link rel="stylesheet" href="/assets/css/style.css" />
				<link rel="stylesheet" href="/assets/css/owl-carousel.css" />
				<link rel="stylesheet" href="/assets/css/mine.css" />

			</Head>
			<body>
				<Main />
				<NextScript />

				{/* Scripts */}

				<script src="/assets/js/jquery-2.1.0.min.js"></script>
				<script src="/assets/js/popper.js"></script>
				<script src="/assets/js/bootstrap.min.js"></script>
				<script src="/assets/js/owl-carousel.js"></script>
				<script src="/assets/js/accordions.js"></script>
				<script src="/assets/js/datepicker.js"></script>
				<script src="/assets/js/scrollreveal.min.js"></script>
				<script src="/assets/js/waypoints.min.js"></script>
				<script src="/assets/js/jquery.counterup.min.js"></script>
				<script src="/assets/js/imgfix.min.js"></script>
				<script src="/assets/js/slick.js"></script>
				<script src="/assets/js/lightbox.js"></script>
				<script src="/assets/js/isotope.js"></script>
				<script src="/assets/js/custom.js"></script>
			</body>
		</Html>
	)
}