let user;
let role;

export const setInformationData = (data) => {
	console.log(data.name);
	user = {
		name: data?.name,
	};
	role = data?.role;
};

export const getInformationData = () => {
	return user;
};
