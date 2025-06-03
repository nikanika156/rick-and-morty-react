export const getWindowWidthService = () => {
	if (window.innerWidth < 900) {
		return true
	} else {
		return false
	}
}
