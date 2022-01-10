export default function convertTime(timestamp) {
	const d = new Date(timestamp);
	return ('0' + d.getDate()).slice(-2) + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + d.getFullYear();;
}