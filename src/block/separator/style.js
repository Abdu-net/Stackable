export const createStyles = props => {
	const {
		height,
		tabletHeight = '',
		mobileHeight = '',

		backgroundColor = '',
		layer1Color = '',
		layer1Width = 1,
		layer1Flip = false,

		marginTop = 0,
		marginBottom = 0,
		marginUnit = 'px',
		tabletMarginTop = '',
		tabletMarginBottom = '',
		tabletMarginUnit = 'px',
		mobileMarginTop = '',
		mobileMarginBottom = '',
		mobileMarginUnit = 'px',

		paddingTop = 0,
		paddingBottom = 0,
		paddingUnit = 'px',
		tabletPaddingTop = '',
		tabletPaddingBottom = '',
		tabletPaddingUnit = 'px',
		mobilePaddingTop = '',
		mobilePaddingBottom = '',
		mobilePaddingUnit = 'px',
	} = props.attributes

	const isEditing = typeof props.mergeBlocks !== 'undefined'

	return {
		'.ugb-separator': {
			backgroundColor: backgroundColor ? backgroundColor : undefined,
			// -1 to prevent white lines.
			// -14 during editing only.
			marginTop: `${ marginTop - 1 + ( isEditing ? -14 : 0 ) }${ marginUnit } !important`,
			marginBottom: `${ marginBottom - 1 + ( isEditing ? -14 : 0 ) }${ marginUnit } !important`,
		},
		'.ugb-separator__bottom-pad': {
			height: paddingBottom !== '' ? `${ paddingBottom }${ paddingUnit }` : undefined,
			background: layer1Color ? layer1Color : undefined,
		},
		'.ugb-separator__top-pad': {
			height: paddingTop !== '' ? `${ paddingTop }${ paddingUnit }` : undefined,
			background: backgroundColor ? backgroundColor : undefined,
		},
		'.ugb-separator__svg-wrapper': {
			height: height !== '' ? `${ height }px` : undefined,
		},
		'.ugb-separator__shadow, .ugb-separator__layer-1': {
			fill: layer1Color ? layer1Color : undefined,
			transform: ( () => {
				let transform = layer1Width ? `scaleX(${ layer1Width })` : undefined
				if ( layer1Flip ) {
					transform = transform ? `${ transform } scaleX(-1)` : 'scaleX(-1)'
				}
				return transform
			} )(),
		},
		tablet: {
			'.ugb-separator__svg-wrapper': {
				height: tabletHeight !== '' ? `${ tabletHeight }px` : undefined,
			},
			'.ugb-separator': {
				marginTop: `${ tabletMarginTop - 1 }${ tabletMarginUnit } !important`, // -1 to prevent white lines.
				marginBottom: `${ tabletMarginBottom - 1 }${ tabletMarginUnit } !important`, // -1 to prevent white lines.
			},
			'.ugb-separator__bottom-pad': {
				height: tabletPaddingBottom !== '' ? `${ tabletPaddingBottom }${ tabletPaddingUnit }` : undefined,
			},
			'.ugb-separator__top-pad': {
				height: tabletPaddingTop !== '' ? `${ tabletPaddingTop }${ tabletPaddingUnit }` : undefined,
			},
		},
		mobile: {
			'.ugb-separator__svg-wrapper': {
				height: mobileHeight !== '' ? `${ mobileHeight }px` : undefined,
			},
			'.ugb-separator': {
				marginTop: `${ mobileMarginTop - 1 }${ mobileMarginUnit } !important`, // -1 to prevent white lines.
				marginBottom: `${ mobileMarginBottom - 1 }${ mobileMarginUnit } !important`, // -1 to prevent white lines.
			},
			'.ugb-separator__bottom-pad': {
				height: mobilePaddingBottom !== '' ? `${ mobilePaddingBottom }${ mobilePaddingUnit }` : undefined,
			},
			'.ugb-separator__top-pad': {
				height: mobilePaddingTop !== '' ? `${ mobilePaddingTop }${ mobilePaddingUnit }` : undefined,
			},
		},
	}
}

export default createStyles
