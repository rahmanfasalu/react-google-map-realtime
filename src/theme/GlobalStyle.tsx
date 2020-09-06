import { createGlobalStyle } from "styled-components";
import Theme from "./theme";

const GlobalStyle = createGlobalStyle`
   
	::selection {
		color: ${Theme.colors.primary};
		background: ${Theme.colors.bg};
	}
    html {
		height: 100%;
	  }
	  body,#root {
	  }
	  
	body {
		margin:0;
		font-family: Tahoma;
		background: ${Theme.colors.bg};
		color: ${Theme.colors.primary};
	}
   
	.shadow{
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(0deg, black, transparent);
	}
	h1, h2, h3, h4 {
		color: ${Theme.colors.white};
	}



	label {
		margin-bottom: .5rem;
		color: ${Theme.colors.secondary};
	}

	input, textarea {
		border-radius: .5rem;
		border: none;
		background: rgba(0, 0, 0, 0.05);
		padding: .25rem 1rem;
		&:focus {
			outline: none;
		}
	}

	.textRight {
		text-align: right;
	}


	.marker{
		color: ${Theme.colors.white}; 
		text-align: center; 
		padding-top: 6px;
		font-size:13px;
	}

	.markerBlue,.markerRed,.markerGreen {
		
		background: ${Theme.colors.blue};
		position: relative;
		-moz-border-radius: 10px;
		-webkit-border-radius: 10px;
		border-radius: 10px;
		padding: 4px;
		width: 33px;
       height: 25px;
	}
	.markerBlue:before,.markerRed:before,.markerGreen:before{
		content: "";
		position: absolute;
		left: 2px;
		bottom: -3px;
		width: 0;
		height: 0;
		border-right: 12px solid transparent;
		border-top: 14px solid ${Theme.colors.blue};
		border-left: 0px solid transparent;
	}

	.markerRed{
			background: ${Theme.colors.red};
			:before {
				border-top: 14px solid ${Theme.colors.red};
			}	
	}

	.markerGreen{
		background: ${Theme.colors.green};
		:before {
			border-top: 14px solid ${Theme.colors.green};
		}
	}
	  
	.infoWindow{
		position: relative;
		background: ${Theme.colors.white};
		border-radius: 3px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
		padding: 10px 20px 15px 10px;
		pointer-events: auto;
		min-width: 150px;
		z-index:1000;
		cursor: default;
		font-size: 19px;
		float:left;
		color:${Theme.colors.primary};
		.name,.address{
			text-align:center;
		}
		.btn{
			position: absolute;
			right: 0;
			top: 0;
			border: 0;
			border-radius: 0 3px 0 0;
			background-color: transparent;
			padding: 5px;
			font-size: 14px;
			cursor: pointer;
		}
		.address{
			font-size: 14px;
			color:${Theme.colors.secondary};
			margin-bottom: 6px;
			border-bottom: 1px solid ${Theme.colors.primary};
			padding-bottom: 5px;
		}
		.bikes,.parking{
			float:left;
			width:100%;
			margin-bottom: 6px;
		}

		.parkingIco{
			color:${Theme.colors.green};
			border:2px solid ${Theme.colors.green};
			text-align:center;
			width:18px;
			margin-right:5px;
			padding: 0 5px;
			font-weight: bold;
		}
		.fa-bicycle{
			font-weight: bold;
			margin-right:5px;
		}
	}

	
`;

export default GlobalStyle;
