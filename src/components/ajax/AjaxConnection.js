const AjaxConnection = {
	getCountryList: () => {
		return ['aaa', 'bbb', 'ccc'];
	},
	getCityList: (countryName) => {
		return [countryName + "-A", countryName + '-B', countryName + '-C'];
	}
};

export default AjaxConnection;
