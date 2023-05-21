import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Span, Box, Image, Icon, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
import { TiTickOutline } from "react-icons/ti";
import { MdDevicesOther, MdPermPhoneMsg } from "react-icons/md";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="#ffffff">
			<Override slot="SectionContent" font="10em --fontFamily-googleInter" />
			<Text margin="0px 0 24px 0" text-align="center" font="--headline2" md-font="--headline3">
				Nextup
			</Text>
			<Menu
				display="flex"
				justify-content="center"
				font="normal normal 100 22px/1.5 --fontFamily-googleInter"
				font-weight="700"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px" />
			</Menu>
		</Section>
		<Section min-height="100vh" padding="0 0 0 0" display="flex">
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				max-width="none"
				width="100%"
				sm-padding="72px 0px 0px 0px"
			/>
			<Box
				display="flex"
				width="40%"
				justify-content="center"
				align-items="stretch"
				lg-width="100%"
				lg-align-items="center"
				sm-margin="0px 0px 50px 0px"
				margin="20px 2% 40px 5%"
				lg-padding="24px 60px 24px 60px"
				sm-padding="0px 20px 0px 20px"
				height="800px"
				align-content="center"
				flex-direction="column"
				order="0"
				flex="0 0 auto"
				padding="24px 0px 24px 0px"
				text-align="left"
				position="relative"
			>
				<Text
					margin="0px 0px 40px 0px"
					color="--dark"
					font="normal 800 60px/1.2 --fontFamily-sans"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Everything you need to scale a{" "}
					<Span
						border-color="--color-purple"
						border-width="20px"
						border-radius="5px"
						box-shadow="6px 8px 2px 2px --color-purple"
						font="normal 800 60px/72px &quot;Fugaz One&quot;, cursive"
						overflow-wrap="normal"
						word-break="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
						text-align="center"
						padding="0px 3px 0px 0px"
					>
						global team
					</Span>
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="--lead" lg-text-align="center">
					Check out our proven methods, guides, and exercises that help make work better, and people happier.{"\n\n"}
				</Text>
				<Box
					display="flex"
					sm-flex-direction="column"
					sm-width="100%"
					sm-text-align="center"
					justify-content="flex-start"
					align-items="center"
				>
					<Link
						href="#"
						padding="12px 24px 12px 24px"
						color="--light"
						text-decoration-line="initial"
						font="--lead"
						border-radius="8px"
						margin="0px 16px 0px 0px"
						transition="background-color 0.2s ease-in-out 0s"
						sm-margin="0px 0px 16px 0px"
						sm-text-align="center"
						background="--color-indigo"
						hover-background="--color-primary"
						hover-transition="background-color 0.2s ease-in-out 0s"
					>
						Get Started
					</Link>
					<Link
						href="#"
						padding="10px 24px 10px 24px"
						color="--darkL1"
						text-decoration-line="initial"
						font="--lead"
						border-radius="8px"
						margin="0px 16px 0px 0px"
						border-width="2px"
						border-style="solid"
						border-color="--color-darkL1"
						transition="color 0.2s ease-in-out 0s,border 0.2s ease-in-out 0s"
						sm-margin="0px 0px 0px 0px"
						sm-text-align="center"
						hover-background="--color-green"
						lg-margin="0px 0px 0px 0px"
						hover-transition="color 0.2s ease-in-out 0s,border 0.2s ease-in-out 0s"
						hover-color="--primary"
						hover-border-color="--color-primary"
					>
						Check our video
					</Link>
				</Box>
			</Box>
			<Image
				src="https://uploads.quarkly.io/645788a7bf72b300207f050e/images/%E2%80%94Pngtree%E2%80%94business%20start%20up%20project%20concept_5335847.png?v=2023-05-21T19:54:59.764Z"
				width="670px"
				height="800px"
				flex="0 1 auto"
				order="0"
				align-self="center"
				display="block"
				position="static"
				overflow-y="hidden"
				overflow-x="hidden"
			/>
			<Box min-width="50%" min-height="100px" max-width="max-content" />
		</Section>
		<Section background="--color-lightD1">
			<Text margin="0px 0px 10px 0px" color="#564aec" font="normal 400 20px/1.5 --fontFamily-sansHelvetica" text-align="center">
				Our Features
			</Text>
			<Text margin="0px 0px 0px 0px" font="normal 900 72px/1.2 --fontFamily-sans" text-align="center">
				Our key benefits
			</Text>
			<Text margin="0px 0px 0px 0px" font="normal 300 24px/1.5 --fontFamily-googleInter" text-align="center">
				Our services are designed to cater to your specific needs and goals{"\n\n"}
			</Text>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" font="800 1.4em --fontFamily-googleInter" background="--color-lightD1">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				width="50%"
				lg-width="100%"
				lg-display="flex"
				lg-justify-content="center"
				padding="0px 16px 0px 0px"
				lg-padding="0px 0px 0px 0px"
			>
				<Box
					display="grid"
					grid-template-rows="repeat(9, 60px)"
					grid-template-columns="repeat(2, 1fr)"
					grid-gap="16px"
					max-width="480px"
					lg-margin="0px 0px 16px 0px"
					sm-grid-template-rows="repeat(9, 10vw)"
				>
					<Image
						src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
						border-radius="24px"
						object-fit="cover"
						width="100%"
						grid-row="1 / span 5"
						grid-column="1 / span 1"
						height="100%"
					/>
					<Image
						src="https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=800&q=80"
						border-radius="24px"
						object-fit="cover"
						grid-column="2 / span 1"
						grid-row="2 / span 3"
						width="100%"
						height="100%"
					/>
					<Image
						src="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=800&q=80"
						border-radius="24px"
						object-fit="cover"
						width="100%"
						grid-column="1 / span 1"
						grid-row="6 / span 3"
						height="100%"
					/>
					<Image
						src="https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=800&q=80"
						border-radius="24px"
						object-fit="cover"
						width="100%"
						grid-column="2 / span 1"
						grid-row="5 / span 5"
						height="100%"
					/>
				</Box>
			</Box>
			<Box
				display="grid"
				width="50%"
				flex-direction="column"
				justify-content="end"
				align-items="start"
				lg-align-items="center"
				sm-margin="20px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
				lg-width="100%"
				lg-padding="24px 0px 0px 0px"
				flex="1 1 0%"
				align-content="space-between"
				font="20px sans-serif"
				order="0"
				align-self="center"
				justify-items="center"
				text-align="center"
			>
				<Box
					display="block"
					lg-flex-wrap="wrap"
					grid-template-columns="repeat(4, 1fr)"
					grid-gap="36px 4%"
					lg-grid-template-columns="repeat(2, 1fr)"
					sm-grid-template-columns="1fr"
					sm-grid-gap="12px"
					order="0"
					align-self="center"
				>
					<Box
						display="flex"
						flex-direction="column"
						sm-margin="0px 0px 30px 0px"
						sm-width="100%"
						margin="0px 0px 30px 0px"
						justify-content="space-around"
						align-items="center"
					>
						<Icon category="ti" icon={TiTickOutline} size="64px" color="--indigo" />
						<Text margin="0px 0px 18px 0px" color="--darkL2" font="800 1.4em --fontFamily-googleInter" lg-text-align="left">
							Project Structure{"\n\n"}
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							color="--darkL2"
							font="normal 400 22px/1.5 --fontFamily-sans"
							lg-text-align="left"
							border-color="#232e38"
						>
							Check out our proven methods, guides, and exercises that help make work better, and people happier.{"\n\n"}
						</Text>
					</Box>
					<Box
						display="flex"
						flex-direction="column"
						sm-margin="0px 0px 30px 0px"
						sm-width="100%"
						margin="0px 0px 30px 0px"
						justify-content="space-around"
						align-items="center"
					>
						<Icon
							category="md"
							icon={MdDevicesOther}
							size="64px"
							border-color="--color-indigo"
							color="--indigo"
						/>
						<Text margin="0px 0px 18px 0px" color="--darkL2" font="800 1.4em --fontFamily-googleInter" lg-text-align="left">
							Responsive{"\n\n"}
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							color="--darkL2"
							font="normal 400 22px/1.5 --fontFamily-sans"
							lg-text-align="left"
							border-color="#232e38"
						>
							This Design System and UI kit is coming with full-responsive screens for tablet and mobile devices.{"\n\n"}
						</Text>
					</Box>
					<Box
						display="flex"
						flex-direction="column"
						sm-margin="0px 0px 30px 0px"
						sm-width="100%"
						margin="0px 0px 30px 0px"
						justify-content="space-around"
						align-items="center"
					>
						<Icon category="md" icon={MdPermPhoneMsg} size="64px" color="--indigo" />
						<Text margin="0px 0px 18px 0px" color="--darkL2" font="800 1.4em --fontFamily-googleInter" lg-text-align="left">
							Messaging{"\n\n"}
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							color="--darkL2"
							font="normal 400 22px/1.5 --fontFamily-sans"
							lg-text-align="left"
							border-color="#232e38"
						>
							On mobile, customers can send text, or audio messages to agents, like using any messaging app{"\n\n"}
						</Text>
					</Box>
					<Box
						display="flex"
						flex-direction="column"
						sm-width="100%"
						sm-margin="0px 0px 30px 0px"
						margin="0px 0px 30px 0px"
					/>
					<Box display="flex" flex-direction="column" sm-margin="0px 0px 30px 0px" sm-width="100%" />
				</Box>
			</Box>
		</Section>
		<Section
			padding="100px 0 100px 0"
			quarkly-title="Statistics-7"
			display="inline-block"
			flex-direction="row"
			align-content="center"
			overflow-x="hidden"
			overflow-y="hidden"
		>
			<Box min-width="100px" min-height="100px" display="flex" md-flex-direction="column">
				<Box
					min-width="100px"
					min-height="100px"
					width="50%"
					display="block"
					flex-direction="column"
					justify-content="center"
					lg-padding="0px 0px 0px 50px"
					md-width="100%"
					md-padding="0px 35px 80px 35px"
					sm-padding="0px 0 80px 0"
					align-self="center"
					order="-1"
					overflow-x="hidden"
					overflow-y="hidden"
				>
					<Text margin="0px 0px 10px 0px" color="#564aec" font="normal 400 20px/1.5 --fontFamily-sansHelvetica">
						Our mission
					</Text>
					<Text margin="0px 0px 30px 0px" color="--dark" font="--headline1">
						Our goal is to be a leader in our industry
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 18px/1.5 --fontFamily-sansHelvetica" color="#75767d">
						Our mission is to provide innovative solutions that meet the needs of our customers while contributing to the betterment of society. We aim to create a positive impact on the world by promoting sustainability, diversity, and inclusivity in all aspects of our operations.{"  "}
					</Text>
					<Box
						min-width="100px"
						min-height="100px"
						margin="60px 0px 0px 0px"
						display="grid"
						grid-template-columns="repeat(2, 1fr)"
						grid-template-rows="repeat(2, 1fr)"
						lg-margin="50px 0px 0px 0px"
						md-margin="40px 0px 0px 0px"
						sm-grid-template-columns="1fr"
						sm-grid-template-rows="auto"
					>
						<Box
							min-width="100px"
							min-height="80px"
							padding="0px 0px 0 15px"
							border-width="0 0 0 1px"
							border-style="solid"
							border-color="#d4d5db"
							margin="0px 0px 30px 0px"
						>
							<Text margin="0px 0px 0px 0px" font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
								8,000+
							</Text>
							<Text margin="15px 0px 0px 0px" color="#75767d" font="300 18px --fontFamily-sansHelvetica">
								Creators on the platform
							</Text>
						</Box>
						<Box
							min-width="100px"
							padding="0px 0px 0 15px"
							border-width="0 0 0 1px"
							border-style="solid"
							border-color="#d4d5db"
							margin="0px 0px 30px 0px"
							min-height="80px"
						>
							<Text margin="0px 0px 0px 0px" font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
								3%
							</Text>
							<Text margin="15px 0px 0px 0px" color="#75767d" font="300 18px --fontFamily-sansHelvetica">
								Flat platform fee
							</Text>
						</Box>
						<Box
							min-width="100px"
							padding="0px 0px 0 15px"
							border-width="0 0 0 1px"
							border-style="solid"
							border-color="#d4d5db"
							margin="0px 0px 30px 0px"
							min-height="80px"
						>
							<Text margin="0px 0px 0px 0px" font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
								99.9%
							</Text>
							<Text margin="15px 0px 0px 0px" color="#75767d" font="300 18px --fontFamily-sansHelvetica">
								Uptime guarantee
							</Text>
						</Box>
						<Box
							min-width="100px"
							min-height="80px"
							padding="0px 0px 0 15px"
							border-width="0 0 0 1px"
							border-style="solid"
							border-color="#d4d5db"
							margin="0px 0px 35px 0px"
						>
							<Text margin="0px 0px 0px 0px" font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
								$70M
							</Text>
							<Text margin="15px 0px 0px 0px" color="#75767d" font="300 18px --fontFamily-sansHelvetica">
								Paid out to creators
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					width="50%"
					md-width="100%"
					md-margin="0px 0px 50px 0px"
					sm-margin="0px 0px 35px 0px"
				>
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/young-colleagues-smart-casual-wear-working-while-spending-time-office.jpg?v=2023-04-21T14:47:38.630Z"
						display="block"
						width="auto"
						height="750px"
						max-width="100%"
						object-fit="cover"
						object-position="30% 50%"
						md-height="600px"
						sm-height="400px"
						overflow-x="hidden"
						overflow-y="hidden"
						padding="0px 0px 0px 0"
						margin="0px 0px 0px 40px"
						border-width="40px"
						border-radius="50px"
					/>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 100px 0" sm-padding="60px 0 60px 0" background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box">
			<Box
				padding="80px 72px 80px 72px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Image%20%289%29.png?v=2021-08-26T14:56:08.732Z) 0% 0% /cover no-repeat scroll padding-box"
				border-radius="24px"
				margin="0px 0px 64px 0px"
				sm-padding="60px 36px 60px 36px"
			>
				<Box
					width="60%"
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-align-items="center"
					md-justify-content="center"
					md-text-align="center"
					lg-width="100%"
				>
					<Text
						margin="0px 0px 16px 0px"
						font="--headline2"
						color="--dark"
						md-text-align="center"
						sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					>
						Setting up a workplace in the office and at home
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--greyD3" md-text-align="center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
					</Text>
				</Box>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="36px 4%"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				sm-grid-gap="12px"
			>
				<Box display="flex" flex-direction="column" sm-margin="0px 0px 30px 0px" sm-width="100%">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						1
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-width="100%" sm-margin="0px 0px 30px 0px">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						2
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-margin="0px 0px 30px 0px" sm-width="100%">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						3
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-width="100%" sm-margin="0px 0px 0px 0px">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						4
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section background="--color-lightD1" padding="90px 0 110px 0" quarkly-title="Team-12">
			<Text margin="0px 0px 0px 0px" color="--dark" font="--headline1">
				Our team
			</Text>
			<Text
				text-align="left"
				color="--greyD2"
				font="300 22px --fontFamily-sansHelvetica"
				margin="16px 600px 16px 0px"
				lg-margin="16px 0 16px 0px"
			>
				We are united by our passion for innovation and our commitment to delivering high-quality solutions to our clients.{"   "}
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				flex-direction="column"
				lg-width="100%"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="repeat(2, 1fr)"
				grid-gap="46px 24px"
				sm-grid-template-columns="1fr"
				sm-grid-template-rows="auto"
				sm-grid-gap="36px 0"
				margin="50px 0px 0px 0px"
				lg-grid-template-columns="repeat(2, 1fr)"
				lg-grid-template-rows="auto"
			>
				<Box
					min-width="100px"
					min-height="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
				>
					<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/man-isolated-showing-facial-emotions.jpg?v=2023-04-18T19:20:05.237Z"
							display="block"
							width="100%"
							border-radius="25px"
							lg-max-width="100%"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							md-height="250px"
							md-width="auto"
							sm-width="100%"
							sm-height="auto"
							height="250px"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						sm-width="100%"
						sm-padding="0px 0px 0px 0"
						margin="25px 0px 0px 0px"
					>
						<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
							Michael Foster
						</Text>
						<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
							Co-Founder / CO
						</Text>
						<Box min-width="100px" display="flex" justify-content="flex-start" margin="25px 0px 0px 0px">
							<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
								<Icon
									category="fa"
									icon={FaTwitter}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
							<LinkBox href="linkedin.com">
								<Icon
									category="fa"
									icon={FaLinkedin}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
				>
					<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background.jpg?v=2023-04-18T18:06:34.340Z"
							display="block"
							width="100%"
							border-radius="25px"
							lg-max-width="100%"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							md-height="250px"
							md-width="auto"
							sm-width="100%"
							sm-height="auto"
							height="250px"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						sm-width="100%"
						sm-padding="0px 0px 0px 0"
						margin="25px 0px 0px 0px"
					>
						<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
							Emma Dorsey
						</Text>
						<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
							Sales Manager
						</Text>
						<Box min-width="100px" display="flex" justify-content="flex-start" margin="25px 0px 0px 0px">
							<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
								<Icon
									category="fa"
									icon={FaTwitter}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
							<LinkBox href="linkedin.com">
								<Icon
									category="fa"
									icon={FaLinkedin}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
				>
					<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/smiling-young-brunette-caucasian-girl-looks-camera-olive-green.jpg?v=2023-04-18T18:07:43.011Z"
							display="block"
							width="100%"
							border-radius="25px"
							lg-max-width="100%"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							md-height="250px"
							md-width="auto"
							sm-width="100%"
							sm-height="auto"
							height="250px"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						sm-width="100%"
						sm-padding="0px 0px 0px 0"
						margin="25px 0px 0px 0px"
					>
						<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
							Alicia Bell
						</Text>
						<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
							Marketing manager
						</Text>
						<Box min-width="100px" display="flex" justify-content="flex-start" margin="25px 0px 0px 0px">
							<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
								<Icon
									category="fa"
									icon={FaTwitter}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
							<LinkBox href="linkedin.com">
								<Icon
									category="fa"
									icon={FaLinkedin}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
				>
					<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/portrait-positive-cherful-nice-attractive-guy-toothy-beaming-smile-violet-background.jpg?v=2023-04-18T18:08:27.505Z"
							display="block"
							width="100%"
							border-radius="25px"
							lg-max-width="100%"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							md-height="250px"
							md-width="auto"
							sm-width="100%"
							sm-height="auto"
							height="250px"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						sm-width="100%"
						sm-padding="0px 0px 0px 0"
						margin="25px 0px 0px 0px"
					>
						<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
							Michael Foster
						</Text>
						<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
							Project manager
						</Text>
						<Box min-width="100px" display="flex" justify-content="flex-start" margin="25px 0px 0px 0px">
							<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
								<Icon
									category="fa"
									icon={FaTwitter}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
							<LinkBox href="linkedin.com">
								<Icon
									category="fa"
									icon={FaLinkedin}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
				>
					<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/european-man-smiling-cheerful-expression-closeup-portrait.jpg?v=2023-04-18T18:03:35.040Z"
							display="block"
							width="100%"
							border-radius="25px"
							lg-max-width="100%"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							md-height="250px"
							md-width="auto"
							sm-width="100%"
							sm-height="auto"
							height="250px"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						sm-width="100%"
						sm-padding="0px 0px 0px 0"
						margin="25px 0px 0px 0px"
					>
						<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
							Tom Cook
						</Text>
						<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
							Director of Product
						</Text>
						<Box min-width="100px" display="flex" justify-content="flex-start" margin="25px 0px 0px 0px">
							<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
								<Icon
									category="fa"
									icon={FaTwitter}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
							<LinkBox href="linkedin.com">
								<Icon
									category="fa"
									icon={FaLinkedin}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					justify-self="center"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
				>
					<Box min-width="100px" min-height="100px" sm-width="100%" sm-margin="0px 0px 0 0px">
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/happy-woman-beige-sweater.jpg?v=2023-04-18T19:20:53.770Z"
							display="block"
							width="100%"
							border-radius="25px"
							lg-max-width="100%"
							max-width="100%"
							object-fit="cover"
							max-height="100%"
							md-height="250px"
							md-width="auto"
							sm-width="100%"
							sm-height="auto"
							height="250px"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						justify-content="center"
						sm-width="100%"
						sm-padding="0px 0px 0px 0"
						margin="25px 0px 0px 0px"
					>
						<Text color="--dark" font="600 18px --fontFamily-sans" lg-margin="0 0px 0px 0px" margin="0 0px 0 0px">
							Courtney Henry
						</Text>
						<Text margin="8px 0px 0px 0px" color="--greyD2" font="300 18px/140% --fontFamily-sansHelvetica">
							Designer
						</Text>
						<Box min-width="100px" display="flex" justify-content="flex-start" margin="25px 0px 0px 0px">
							<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
								<Icon
									category="fa"
									icon={FaTwitter}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
							<LinkBox href="linkedin.com">
								<Icon
									category="fa"
									icon={FaLinkedin}
									size="25px"
									color="--greyD2"
									hover-color="--darkL1"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" background="--color-light">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 33px 0px"
				width="100%"
				sm-margin="0px 0px 30px 0px"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--dark"
					font="--headline1"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Price
				</Text>
				<Text margin="0px 0px 0px 0px" color="--grey" text-align="center" font="--lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<Box
				display="grid"
				flex-wrap="wrap"
				width="100%"
				align-items="stretch"
				justify-content="center"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px"
				md-grid-template-columns="1fr"
				justify-items="center"
			>
				<Box
					width="100%"
					display="flex"
					padding="48px 40px 56px 40px"
					background="--color-light"
					border-radius="24px"
					align-items="center"
					justify-content="flex-start"
					flex-direction="column"
					lg-padding="48px 35px 56px 35px"
					border-color="--color-indigo"
					border-width="2px"
					border-style="solid"
				>
					<Text margin="0px 0px 24px 0px" font="--headline3">
						Monopoly
					</Text>
					<Text margin="0px 0px 8px 0px" font="--headline1">
						$59
					</Text>
					<Text margin="0px 0px 32px 0px" color="--greyD2" text-align="center" font="--base">
						per month
					</Text>
					<Text
						margin="0px 0px 48px 0px"
						color="--greyD2"
						text-align="center"
						font="--base"
						flex="1 1 auto"
					>
						Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="12px 24px 12px 24px"
						border-radius="8px"
						background="--color-purple"
						lg-padding="12px 20px 12px 20px"
						transition="background-color 0.2s ease-in-out 0s"
						hover-transition="background-color 0.2s ease-in-out 0s"
						hover-background="--color-orange"
					>
						Select plan
					</Link>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="48px 40px 56px 40px"
					background="--color-light"
					border-radius="24px"
					align-items="center"
					justify-content="flex-start"
					flex-direction="column"
					border-width="2px"
					border-style="solid"
					border-color="--color-indigo"
					lg-padding="48px 35px 56px 35px"
					position="relative"
				>
					<Text
						padding="1px 26px 5px 24px"
						color="#04080C"
						background="--color-purple"
						font="--base"
						position="absolute"
						transform="rotate(90deg)"
						right="-38px"
						left="auto"
						top="70px"
						bottom="auto"
						border-radius="0px 0px 12px 12px"
					>
						Popular
					</Text>
					<Text margin="0px 0px 24px 0px" font="--headline3">
						Startup
					</Text>
					<Text margin="0px 0px 8px 0px" font="--headline1">
						$12
					</Text>
					<Text margin="0px 0px 32px 0px" color="--greyD2" text-align="center" font="--base">
						per month
					</Text>
					<Text
						margin="0px 0px 48px 0px"
						color="--greyD2"
						text-align="center"
						font="--base"
						flex="1 1 auto"
					>
						Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="12px 24px 12px 24px"
						border-radius="8px"
						background="--color-purple"
						lg-padding="12px 20px 12px 20px"
						transition="background-color 0.2s ease-in-out 0s"
						hover-transition="background-color 0.2s ease-in-out 0s"
						hover-background="--color-orange"
					>
						Select plan
					</Link>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="48px 40px 56px 40px"
					background="--color-light"
					border-radius="24px"
					align-items="center"
					justify-content="flex-start"
					flex-direction="column"
					lg-padding="48px 35px 56px 35px"
					border-color="--color-indigo"
					border-style="solid"
					border-width="2px"
				>
					<Text margin="0px 0px 24px 0px" font="--headline3">
						Freelance
					</Text>
					<Text margin="0px 0px 8px 0px" font="--headline1">
						$9
					</Text>
					<Text margin="0px 0px 32px 0px" color="--greyD2" text-align="center" font="--base">
						per month
					</Text>
					<Text
						margin="0px 0px 48px 0px"
						color="--greyD2"
						text-align="center"
						font="--base"
						flex="1 1 auto"
					>
						Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="12px 24px 12px 24px"
						border-radius="8px"
						background="--color-purple"
						lg-padding="12px 20px 12px 20px"
						transition="background-color 0.2s ease-in-out 0s"
						hover-transition="background-color 0.2s ease-in-out 0s"
						hover-background="--color-orange"
					>
						Select plan
					</Link>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0">
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Text
					margin="0px 0px 0px 0px"
					font="--headline1"
					color="--dark"
					sm-font="normal 700 52px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
				>
					Partners
				</Text>
				<Text
					margin="25px 0px 0px 0px"
					font="--lead"
					display="block"
					text-align="center"
					color="--darkL2"
					lg-width="100%"
					width="60%"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<Box margin="40px 0px 0px 0px" display="flex" flex-direction="row" flex-wrap="wrap">
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2025.svg?v=2021-08-27T23:06:50.611Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2026.svg?v=2021-08-27T23:06:50.617Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2027.svg?v=2021-08-27T23:06:50.623Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2028.svg?v=2021-08-27T23:06:50.609Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2029.svg?v=2021-08-27T23:06:50.627Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2030.svg?v=2021-08-27T23:06:50.610Z" border-radius="16px" max-width="100%" />
				</Box>
			</Box>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				hello@company.com
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"645788a7bf72b300207f050c"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});