const trebuchet = (data) => {
	for (let i in data) {
		if (!isNaN(data[i])) {
			console.log(data[i])
		}
	}
}

trebuchet('5knjbxgvhktvfcq89onefive')
