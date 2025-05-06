export const getWindowWidthService = () => {
	if (window.innerWidth < 960 || window.outerWidth < 960) {
		return true
	} else {
		return false
	}
}
