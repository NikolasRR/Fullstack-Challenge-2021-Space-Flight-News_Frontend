import api from "./api";

async function getNews(page, order, searchValue) {
	return await api.get(`/articles?page=${page}&order=${order}&search=${searchValue}`);
}

const requests = {
	getNews,
};

export default requests;

