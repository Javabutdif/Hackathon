let user;
let role;

export const setInformationData = (data) => {
	console.log(data.name);
    user = data.name;
	role = data?.role;
};

export const getInformationData = () => {
	return user;
};
