import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import PoppinsMedium from '../../../font/Poppins-Medium.ttf';
import NotoSerifDisplay from '../../../font/NotoSerifDisplay-Black.ttf';
// import MontserrantBold from '../../../fonts/Montserrat-Bold.ttf';
// import Playfair from '../../../fonts/PlayfairDisplay-SemiBoldItalic.ttf';

Font.register({
	family: 'Poppins',
	format: 'truetype',
	fonts: [{ src: PoppinsMedium, fontWeight: 400 }],
});

Font.register({
	family: 'NotoSerifDisplay',
	format: 'truetype',
	fonts: [{ src: NotoSerifDisplay, fontWeight: 900 }],
});

const PDFCertificate = (props) => {
	const currentDate = new Date();
	const userInfo = JSON.parse(sessionStorage.getItem('rpUser'));
	return (
		<Document>
			<Page size="A4" orientation="landscape">
				<View style={styles.mainView}>
					<View style={styles.view}>
						<View style={{ flex: 1 }}>
							<Text
								style={{
									color: '#192034',
									// position: 'absolute',
									// marginVertical: 20,
									// position: 'absolute',
									// top: '0%',
									// left: '35%',
									// marginHorizontal: 190,
									marginTop: 80,
									// marginLeft: 230,
									fontSize: 38,
									fontFamily: 'NotoSerifDisplay',
									textAlign: 'center',
									fontWeight: '900',
								}}
							>
								{userInfo.name}
								{/* Abisola Morohunfolu */}
							</Text>
						</View>
					</View>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Text
							style={{
								fontFamily: 'Poppins',
								fontSize: 20,
								marginTop: 260,
								fontWeight: '700',
								// marginHorizontal: 140,
								// position: 'absolute',
								// top: '67%',
								// left: '23%',
								color: '#192034',
								textAlign: 'center',
							}}
						>
							Marketing Business Course
						</Text>
						<Text
							style={{
								fontFamily: 'Poppins',
								fontSize: 16,
								marginTop: 0,
								// marginHorizontal: 140,
								// position: 'absolute',
								// top: '67%',
								// left: '23%',
								color: '#192034',
								textAlign: 'center',
							}}
						>
							on{' '}
							{currentDate.toLocaleDateString('en-GB', {
								year: 'numeric',
								month: 'numeric',
								day: 'numeric',
							})}
							.{/* // .replace(/\//g, '-')} */}
						</Text>
					</View>
				</View>
				<Image
					src="https://res.cloudinary.com/abisola/image/upload/v1644968409/Roleplay_Coaching_Certificate_c9xscj.png"
					style={styles.image}
				/>
			</Page>
		</Document>
	);
};

export default PDFCertificate;

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		// position: 'absolute',
		// alignItems: 'center',
		marginHorizontal: 20,
		marginVertical: 30,
	},
	Heading: {
		textTransform: 'uppercase',
		marginBottom: 20,
		fontFamily: 'Lato',
		fontWeight: 700,
		fontSize: 28,
		letterSpacing: 2,
		color: '#003883',
	},
	textView: {},
	view: {
		position: 'absolute',
		zIndex: 21,
		// justifyContent: 'center',
		// alignItems: 'center',
		// alignContent: 'center',
		// flex: 1,
	},
	image: {
		position: 'absolute',
		zIndex: 20,
		height: '100vh',
		width: '100vw',
	},
});
